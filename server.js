const liveServer = require("live-server");

const params = {
  port: 8000, // Set the server port. Defaults to 8080.
  root: "./public", // Set root directory that's being served. Defaults to cwd.
  open: true,
  file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
};

liveServer.start(params);
