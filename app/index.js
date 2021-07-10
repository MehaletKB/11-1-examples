import http from "http";
import router from "./router.js";

const PORT = 8080;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    switch (req.url) {
      case "/buttons":
        res.end(router.generateButtons());
        break;
      case "/portfolio":
        res.end(router.generatePortfolio());
        break;
      default:
        res.end("404: Not Found\n");
    }
  })
  .listen(PORT, () => {
    console.info("🏃🏾‍♂️");
  });
