import http from "http";
import fs from "fs";

const PORT = 8080;

const server = http.createServer((req, res) => {
	console.log(req.url);

	// res.writeHead(200, { "Content-Type": "text/html" });
	// res.write("<h1>Hola Mundo!</h1>");
	// res.end();

	// const data = { name: "John Doe", age: 30, city: "New York" };
	// res.writeHead(200, { "Content-Type": "application/json" });
	// res.end(JSON.stringify(data));

	if (req.url === "/") {
		const htmlFile = fs.readFileSync("./public/index.html", "utf-8");
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(htmlFile);
	} else {
		res.writeHead(400, { "Content-Type": "text/html" });
		res.end();
	}
});

server.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
