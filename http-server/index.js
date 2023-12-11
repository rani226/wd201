const http = require("http");
const fs = require("fs");
//const minimist = require("minimist");


let homeContent = "";
let projectContent = "";
let registrationContent = "";
//const argv = minimist(process.agrv.slice(2));
const argv = require("minimist")(process.argv.slice(2));
const port = argv.port || 3000;

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});
fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registrationContent = registration;
});
const server = http.createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(registrationContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  });
  server.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
  