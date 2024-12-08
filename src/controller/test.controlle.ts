import { data } from "../data/data";

export const testController = (req: any, res: any) => {
  if (req.method === "GET") {
    // Handle GET request for /test
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data,
      }),
    );
  } else {
    // Method not allowed
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        error: "Method not allowed",
      }),
    );
  }
};
