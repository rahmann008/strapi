module.exports = {
  "content-export-import": {
    enabled: true,
    resolve: "./src/plugins/content-export-import", // path to plugin folder
  },
  meilisearch: {
    config: {
      // Your meili host
      host: "http://localhost:7700",
      // Your master key or private key
      apiKey: "Mi78pXmB8w9pWG9jwuAuc668QV1iP2MS",
    },
  },
};
