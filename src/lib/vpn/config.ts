import "server-only";

export const VPN_CONFIG = {
  sweden: {
    serverPublicKey:
      process.env.WIREGUARD_SWEDEN_SERVER_PUBLIC_KEY!,

    endpoint:
      process.env.WIREGUARD_SWEDEN_ENDPOINT!,
  },

  provisionerUrl:
    process.env.WIREGUARD_PROVISIONER_URL!,

  provisionerApiKey:
    process.env.WIREGUARD_PROVISIONER_API_KEY!,
};

export function validateVpnConfig() {
  const missing = Object.entries({
    WIREGUARD_SWEDEN_SERVER_PUBLIC_KEY:
      VPN_CONFIG.sweden.serverPublicKey,

    WIREGUARD_SWEDEN_ENDPOINT:
      VPN_CONFIG.sweden.endpoint,

    WIREGUARD_PROVISIONER_URL:
      VPN_CONFIG.provisionerUrl,

    WIREGUARD_PROVISIONER_API_KEY:
      VPN_CONFIG.provisionerApiKey,
  })
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(
      `Missing VPN environment variables: ${missing.join(", ")}`
    );
  }
}