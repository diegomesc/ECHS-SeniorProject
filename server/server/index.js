// server/index.js
const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 3001;

const storagePath = path.join(__dirname, "..", "..", "..", "..", "..", '/Programming/Storage/');

app.get("/files", (req, res) => {
  var files = [];
  var folders = [];

  fs.readdir(storagePath, function (err, itemPaths) {
    if (err) console.log('Unable to scan directory: ' + err);
    itemPaths.forEach((item) => {
      let itemPath = storagePath + item;
      if (fs.lstatSync(itemPath).isDirectory()) {
        folders.push(item);
      }
      else files.push(item);
    });
    res.json({files: files, folders: folders});
  });
});

app.get("/media/:fileName", (req, res) => {
  let fileName = req.params.fileName;
  let filePath = path.join(storagePath, fileName);
  res.sendFile(filePath);
  });

app.get("/pdf/:fileName", (req, res) => {
  let fileName = req.params.fileName;
  let filePath = path.join(storagePath, fileName);
  res.sendFile(filePath);
});

app.use(fileUpload());

app.post('/upload', function(req, res) {
  let file = req.files.file;
  let name = path.parse(file.name).name;
  let ext = path.parse(file.name).ext;
  let targetPath = storagePath + file.name;

  if (fs.existsSync(targetPath)) {
    console.log("file does exist, creating duplicate file")
    targetPath = storagePath + name + " - Duplicate" + ext;
  }
  else {
    console.log("file does not exist, creating file")
  }
  
  file.mv(targetPath, function(err) {
    if (err)
      return res.status(500).send(err);
    res.send('File uploaded!');
  });
})

app.get('/download/:fileName', (req, res) => {
  res.send(storagePath + req.params.fileName);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});