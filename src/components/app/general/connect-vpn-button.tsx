"use client";

import { connectVpn } from "@/actions/connect-vpn";
import { useState } from "react";

type ConnectVpnButtonProps = {
  deviceId: string;
  publicKey: string;
};

export default function ConnectVpnButton({
  deviceId,
  publicKey,
}: ConnectVpnButtonProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleConnect() {
    // --------------------------------------------------
    // Reset previous state
    // --------------------------------------------------

    setLoading(true);
    setMessage("");

    try {
      // --------------------------------------------------
      // Call VPN provisioning action
      // --------------------------------------------------

      const result = await connectVpn({
        deviceId,
        publicKey,
      });

      // --------------------------------------------------
      // Always show the server response message
      // --------------------------------------------------

      setMessage(result.message);

      // --------------------------------------------------
      // Successful provisioning
      // --------------------------------------------------

      if (result.success) {
        console.log("✅ VPN configuration:", result.config);
        console.log("✅ VPN client ID:", result.clientId);
        console.log("✅ VPN IP:", result.vpnIp);

        return;
      }

      // --------------------------------------------------
      // Failed provisioning
      // --------------------------------------------------

      console.error("❌ VPN connection failed:", {
        message: result.message,
      });
    } catch (error) {
      // --------------------------------------------------
      // Unexpected client-side error
      // --------------------------------------------------

      console.error("❌ Connect VPN error:", error);

      setMessage(
        error instanceof Error
          ? `❌ ${error.message}`
          : "❌ Unable to connect to the VPN. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        className="cursor-pointer bg-primary text-white"
        type="button"
        onClick={handleConnect}
        disabled={loading}
      >
        {loading ? "Connecting..." : "Connect VPN"}
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}