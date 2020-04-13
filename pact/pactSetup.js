const path = require("path");
const Pact = require("@pact-foundation/pact").Pact;

global.port = 8991;
global.provider = new Pact({
  port: global.port,
  log: path.resolve(process.cwd(), 'pact', 'logs', 'mock-server.log'),
  dir: path.resolve(process.cwd(), 'pact', 'pacts'),
  logLevel: 'trace',
  spec: 2,
  pactfileWriteMode: "update",
  consumer: "TX Bowling - Front End",
  provider: "TX Bowling - Back End",
});
