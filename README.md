# Elastic Search Example
Example of elastic search integration. Based on Node.js + Koa and Angular 5 on Front-End.

- [Installation](#installation)
- [Start](#start)
- [Usage](#usage)

## Installation
- Install PostgreSQL and Elastic Search (no additional configuration is required);
- Run in both **client** and **server** folders:
  ``` bash
  npm install
  ```
- In **server** folder run in the following order:
  ``` bash
  node database/scripts/initDb.js
  node database/scripts/initTables.js
  node database/scripts/setData.js
  ```
  Don't forget that you can customize those scripts for your own needs (setData especially, probably you want to decrease number of entries).

## Start
- Run in **client** folder:
  ``` bash
  npm run bundle
  ```
- Run in **server** folder:
  ``` bash
  NODE_ENV=production node index.js
  ```

## Usage
 - Visit *http://localhost:8001*;
 
 We are looking forward to meeting you on our website *https://soshace.com*
