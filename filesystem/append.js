const fs = require('fs');

var content = `This is the content, which we wanted added to the file\n`;

fs.appendFile('./files/append.txt', content, function(err){
    if(err){
        console.log("error");
        console.log(err);
    } else {
        console.log("content was appended");
    }
});
