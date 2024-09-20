let envConfig;

let env = window.location.hostname.includes("netlify.app") ? "qa" : "local";

if (env === "qa") {
  envConfig = {
    channel: "web",
    name: "QA",
    uiHost: "https://hatronika-energy-portal-dev.netlify.app",
    apiHost: "https://dev-network-api-652046075376.us-central1.run.app",
    assetBase: "/assets",
  };
}

if (env === "local") {
  envConfig = {
    channel: "web",
    name: "Development",
    uiHost: "http://localhost:5173",
    apiHost: "https://energy-api-psi.vercel.app/",
    assetBase: "/assets",
  };
}

export const Environment = envConfig;
