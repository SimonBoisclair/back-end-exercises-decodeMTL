fs = require('fs')

// Creating functions
function fileread(filename){
	var contents = fs.readFileSync(filename);
	return contents;
}

// get and parse file content
fileContent = fileread("./exo2/sync.js").toString()
fileContentSplited = fileContent.split("\n")

// get sum of each line
fileContentSum = 0
for (i=0; i < fileContentSplited.length; i++){
    fileContentSum = Number(fileContentSum) + Number(fileContentSplited[i])
}

// show Total
console.log(fileContentSum)
