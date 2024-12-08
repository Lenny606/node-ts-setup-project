import * as fs from 'fs';
import http from 'http';
const file = fs;
export const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
        data: "Hello, World!"
    }));
});
server.listen(8002, () => {
    console.log("listening");
});
//# sourceMappingURL=index.js.map