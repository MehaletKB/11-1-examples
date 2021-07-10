import http from "http";

const PORT = 8080;

// This is an event handler
// It will only do stuff when we make a request.
const handleRequest = (req, res) => {
  console.log("received a req");

  // `end` is hanging up the 'call' ☎️
  res.end(`<h1>Hello World</h1> <p>Received request from ${req.url}</p>`);
};

// Create a server
const server = http.createServer(handleRequest);

// Turn the server on and start listing on port 8080
server.listen(PORT, () => {
  console.info(`Server 🏃🏾‍♂️ on port: ${PORT}`);
});
