const { readdirSync, rename } = require("fs");
const { resolve, extname } = require("path");

//Go the your files directory
const imageDirPath = resolve(__dirname, "images");

//Get the files
const files = readdirSync(imageDirPath);

//Loop thrhough each file renaming it
for (let i = 0; i < files.length; i++) {
  rename(
    `${imageDirPath}/${files[i]}`,
    `${imageDirPath}/${i + 1}-new-name-goes-here-${extname(files[i])}`,
    (err) => (err !== null ? console.log(err) : "")
  );
}
