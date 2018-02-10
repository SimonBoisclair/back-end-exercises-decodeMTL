fs = require('fs')

// Creating functions
function fileread(filename){
	var contents = fs.readFileSync(filename);
	return contents;
}
function FileWriteSync(fileName,content){
    fs.writeFileSync(fileName, content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// get and parse file content
fileContent = fileread("./exo2/sync.js").toString()
fileContentSplited = fileContent.split("\n")

// create the reversed array and parse it
fileContentReversed = []
for (i=fileContentSplited.length-1; i > -1; i--){
	fileContentReversed.push(fileContentSplited[i])
}
fileNewContent = ""
for ( i = 0 ; i < fileContentReversed.length ; i++){
	if(i !== fileContentReversed.length-1){
		fileNewContent = fileNewContent + fileContentReversed[i] + "\n"
	}else{
		fileNewContent = fileNewContent + fileContentReversed[i]
	}
}


// show Total
console.log(fileContentSplited)
console.log(fileContentReversed)
FileWriteSync("./exo2/sync.js",fileNewContent)
