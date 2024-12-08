import http from "http";
import { testController } from "./controller/test.controlle";

export const server = http.createServer((req, res) => {
  if (req.url === "/test") {
    testController(req, res);
  } else {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        data: "Hello, World!",
      }),
    );
  }
});

server.listen(8002, () => {
  console.log("listening on 8002");
});
