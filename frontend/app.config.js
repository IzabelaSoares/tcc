export default {
  name: "frontend",
  slug: "frontend",
  version: "1.0.0",
  sdkVersion: "53.0.0", 
  platforms: ["ios", "android", "web"],
  orientation: "portrait",
  splash: {
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ["**/*"]
};
