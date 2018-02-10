fs = require('fs')

// Creating functions
function FileWriteAsync(fileName,content){
    fs.writeFile(fileName, content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    });
}
function FileWriteSync(fileName,content){
    fs.writeFileSync(fileName, content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// Creating file content
fileContent = ""
for (i=1;i<=100;i++){
    fileContent = fileContent+i+"\n"
}

// Calling Functions
FileWriteSync("./exo1/sync.js",fileContent)
FileWriteAsync("./exo1/async.js",fileContent)
