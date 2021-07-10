import { promises as fs } from "fs";
import http from "http";
import path from "path";

const PORT = 8080;

http
  .createServer(
    // This CB fxn. fires when a request comes in from 'localhost:PORT'
    async ({ url }, res) => {
      let html;

      switch (url) {
        case "/port":
          html = await fs.readFile(path.resolve("./app/assets/port.html"));
          break;
        default:
          html = await fs.readFile(path.resolve("./app/assets/index.html"));
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    }
  )
  .listen(PORT, () => {
    console.info(`Server running at http://localhost:${PORT}/`);
  });
