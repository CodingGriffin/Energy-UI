let envConfig;

let env = window.location.hostname.includes("hatronika.com") ? "qa" : "local";

if (env === "qa") {
  envConfig = {
    channel: "web",
    name: "QA",
    uiHost: "https://qa-portal.hatronika.com",
    apiHost: "https://dev-network-api-652046075376.us-central1.run.app",
    assetBase: "/assets",
  };
}

if (env === "local") {
  envConfig = {
    channel: "web",
    name: "Development",
    uiHost: "http://localhost:5173",
    apiHost: "http://localhost:8080",
    assetBase: "/assets",
  };
}

export const Environment = envConfig;
