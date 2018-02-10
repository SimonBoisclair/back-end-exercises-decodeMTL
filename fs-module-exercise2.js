fs = require('fs')

// Creating functions
function FileWriteSync(fileName,content){
    fs.writeFileSync(fileName, content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function genRand() {
   return Math.floor(Math.random() * 1000)
}

// Creating file content
fileContent = ""
for (i=1;i<=10;i++){
    if(i !== 10){
        fileContent = fileContent+genRand()+"\n"
    }else{
        fileContent = fileContent+genRand()     
    }
}

// Calling Functions
FileWriteSync("./exo2/sync.js",fileContent)
