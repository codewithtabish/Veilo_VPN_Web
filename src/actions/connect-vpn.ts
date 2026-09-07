"use server";

import {
  VPN_CONFIG,
  validateVpnConfig,
} from "@/lib/vpn/config";

type ConnectVpnResult =
  | {
      success: true;
      message: string;
      config: string;
      clientId: number;
      vpnIp: string;
    }
  | {
      success: false;
      message: string;
      config: null;
      clientId: null;
      vpnIp: null;
    };

type ConnectVpnInput = {
  deviceId: string;
  publicKey: string;
};

export async function connectVpn(
  input: ConnectVpnInput
): Promise<ConnectVpnResult> {
  try {
    // --------------------------------------------------
    // Validate server-side VPN configuration
    // --------------------------------------------------

    validateVpnConfig();

    // --------------------------------------------------
    // Validate input
    // --------------------------------------------------

    const deviceId = input.deviceId?.trim();
    const publicKey = input.publicKey?.trim();

    if (!deviceId) {
      return {
        success: false,
        message: "❌ Device ID is required.",
        config: null,
        clientId: null,
        vpnIp: null,
      };
    }

    if (!publicKey) {
      return {
        success: false,
        message: "❌ WireGuard public key is required.",
        config: null,
        clientId: null,
        vpnIp: null,
      };
    }

    // --------------------------------------------------
    // Call the public HTTPS provisioner
    // --------------------------------------------------

    const response = await fetch(
      `${VPN_CONFIG.provisionerUrl}/provision`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "X-API-Key": VPN_CONFIG.provisionerApiKey,
        },

        body: JSON.stringify({
          device_id: deviceId,
          public_key: publicKey,
        }),

        cache: "no-store",
      }
    );

    // --------------------------------------------------
    // Safely read provisioner response
    // --------------------------------------------------

    let data: {
      success?: boolean;
      client_id?: number;
      vpn_ip?: string;
      status?: string;
      detail?: string;
      message?: string;
    } = {};

    try {
      data = await response.json();
    } catch {
      return {
        success: false,
        message: `❌ VPN provisioner returned an invalid response. HTTP ${response.status}.`,
        config: null,
        clientId: null,
        vpnIp: null,
      };
    }

    // --------------------------------------------------
    // Handle provisioner failure
    // --------------------------------------------------

    if (!response.ok || !data.success) {
      console.error("❌ VPN provisioner error:", {
        status: response.status,
        data,
      });

      const errorMessage =
        typeof data.detail === "string"
          ? data.detail
          : typeof data.message === "string"
            ? data.message
            : `VPN provisioning failed. HTTP ${response.status}.`;

      return {
        success: false,
        message: `❌ ${errorMessage}`,
        config: null,
        clientId: null,
        vpnIp: null,
      };
    }

    // --------------------------------------------------
    // Validate returned VPN IP
    // --------------------------------------------------

    if (!data.vpn_ip) {
      console.error(
        "❌ VPN provisioner did not return a VPN IP:",
        data
      );

      return {
        success: false,
        message:
          "❌ VPN server did not return a client VPN IP address.",
        config: null,
        clientId: null,
        vpnIp: null,
      };
    }

    if (typeof data.client_id !== "number") {
      console.error(
        "❌ VPN provisioner did not return a valid client ID:",
        data
      );

      return {
        success: false,
        message:
          "❌ VPN server did not return a valid client ID.",
        config: null,
        clientId: null,
        vpnIp: null,
      };
    }

    const vpnIp = data.vpn_ip;

    // --------------------------------------------------
    // Build WireGuard client configuration
    // --------------------------------------------------

    const config = `[Interface]
Address = ${vpnIp}/32
DNS = 1.1.1.1

[Peer]
PublicKey = ${VPN_CONFIG.sweden.serverPublicKey}
Endpoint = ${VPN_CONFIG.sweden.endpoint}
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25`;

    // --------------------------------------------------
    // Success
    // --------------------------------------------------

    console.log("✅ VPN provisioning successful:", {
      clientId: data.client_id,
      vpnIp,
      status: data.status,
    });

    return {
      success: true,
      message: `✅ VPN configuration created successfully. Sweden server assigned ${vpnIp}.`,
      config,
      clientId: data.client_id,
      vpnIp,
    };
  } catch (error) {
    // --------------------------------------------------
    // Unexpected error
    // --------------------------------------------------

    console.error("❌ connect-vpn error:", error);

    let message =
      "❌ Unable to connect to the VPN. Please try again.";

    if (error instanceof Error) {
      console.error("Error details:", {
        name: error.name,
        message: error.message,
      });

      // Give a more useful message for network/fetch errors.
      if (error.name === "TypeError") {
        message =
          "❌ Unable to reach the VPN provisioner. Please check the VPN server connection.";
      }
    }

    return {
      success: false,
      message,
      config: null,
      clientId: null,
      vpnIp: null,
    };
  }
}