import * as dotenv from 'dotenv';
import * as http from 'http';

const dotenvResult = dotenv.config({
  encoding: 'UTF-8',
  path: __dirname + '/../.env',
});

if (dotenvResult.error) throw dotenvResult.error;

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080;
const HOST = process.env.HOST || '0.0.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(307, {
    location: `http://jared.crimmins.io${req.url}`,
  });
  res.end();
});

server.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}...`);
});
