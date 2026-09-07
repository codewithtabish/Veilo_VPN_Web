import { connectVpn } from "@/actions/connect-vpn";
import { NextResponse } from "next/server";

type ConnectRequest = {
  deviceId?: string;
  publicKey?: string;
};

export async function POST(request: Request) {
  try {
    // --------------------------------------------------
    // Parse request body
    // --------------------------------------------------

    const body = (await request.json()) as ConnectRequest;

    const deviceId = body.deviceId?.trim();
    const publicKey = body.publicKey?.trim();

    // --------------------------------------------------
    // Validate Device ID
    // --------------------------------------------------

    if (!deviceId) {
      return NextResponse.json(
        {
          success: false,
          message: "❌ Device ID is required.",
          config: null,
          clientId: null,
          vpnIp: null,
        },
        {
          status: 400,
        }
      );
    }

    // --------------------------------------------------
    // Validate WireGuard public key
    // --------------------------------------------------

    if (!publicKey) {
      return NextResponse.json(
        {
          success: false,
          message: "❌ WireGuard public key is required.",
          config: null,
          clientId: null,
          vpnIp: null,
        },
        {
          status: 400,
        }
      );
    }

    // --------------------------------------------------
    // Provision VPN client
    // --------------------------------------------------

    const result = await connectVpn({
      deviceId,
      publicKey,
    });

    // --------------------------------------------------
    // Log result
    // --------------------------------------------------

    if (result.success) {
      console.log("✅ VPN Connect Success:", {
        message: result.message,
        clientId: result.clientId,
        vpnIp: result.vpnIp,
        configLength: result.config.length,
      });
    } else {
      console.error("❌ VPN Connect Failed:", {
        message: result.message,
      });
    }

    // --------------------------------------------------
    // Return result to client
    // --------------------------------------------------

    return NextResponse.json(result, {
      status: result.success ? 200 : 500,
    });
  } catch (error) {
    // --------------------------------------------------
    // Invalid JSON / unexpected request error
    // --------------------------------------------------

    console.error(
      "❌ POST /api/vpn/connect Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "❌ Invalid request or unable to connect to the VPN.",
        config: null,
        clientId: null,
        vpnIp: null,
      },
      {
        status: 400,
      }
    );
  }
}