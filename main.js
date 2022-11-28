const fs = require('fs');
let dataString;

if(!fs.existsSync('./in.txt')){
    fs.writeFileSync('./in.txt',"");
}


fs.writeFileSync('./out.csv','','ascii');

function readEntries(){
    const content = fs.readFileSync('./in.txt','ascii');
    return content;
}
dataString = readEntries();

const lines = dataString.split(/\r?\n/);

lines.forEach(line => {
    const fields = line.split(' ');
    let tonsIndex;
    if (fields.length === 10){
        tonsIndex = 6;
    } else{
        tonsIndex = 5;
    }

    const filteredData = [fields[0],fields[2],fields[tonsIndex]];
    const length = filteredData.length;
    let i = 0;
    filteredData.forEach(field => {
        fs.appendFileSync('./out.csv',field,'ascii');
        if (i < length - 1){
            fs.appendFileSync('./out.csv',',','ascii');
        }
    })
        fs.appendFileSync('./out.csv','\n','ascii');
})

