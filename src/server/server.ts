import express from 'express';
import path from 'path';
import chalk from 'chalk';

const app = express();
const DOCS_PATH = '../../docs/';
const PORT = 8082;
const IP_ADRESS = 'localhost';

app.set('port', PORT);
app.set('ipAdress', IP_ADRESS);

app.use(express.static(path.join(__dirname, DOCS_PATH)));

app.get('*', (_, res) =>
  res.sendFile(path.join(__dirname, DOCS_PATH, 'index.html')),
);

/* eslint-disable no-console */
app.listen(PORT, IP_ADRESS, () =>
  console.log(`
    =====================================================
    -> Server (${chalk.bgBlue('SPA')}) 🏃 (running) on ${chalk.green(
    IP_ADRESS,
  )}:${chalk.green(String(PORT))}
    =====================================================
  `),
);
/* eslint-enable no-console */
