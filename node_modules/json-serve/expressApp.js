const express = require('express');
const path = require('path');

module.exports = function (filesNames, dir, port = 3000) {
  const app = express();

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  app.get('/list', function (req, res) {
    res.json({filesNames});
  });

  app.get('/data/:fileName', function (req, res) {
    const fileName = decodeURIComponent(req.params.fileName);
    try {
      const dataPath = path.join(dir, fileName + '.json');
      const data = require(dataPath);
      res.json({fileName, path: dataPath, data});
    } catch(e) {
      res.status(500).json(e);
    }
  });

  const server = app.listen(port, function () {
    console.log('Serving json files in ' + dir + ' on port ' + port);
  });

  return server.close;
}
