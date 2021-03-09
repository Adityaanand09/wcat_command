let fs =require("fs");



function breakspace(filePath1)
{
    let data = fs.readFileSync(filePath1).toString();
  //console.log(data);
let no_of_lines = data.split('\n').length;
//let a=data.split('\n');
let f  = data.replace(/(\r\n|\r|\n){2,}/g, '$1\n');let ans=[];
console.log(f);
}

module.exports={
    fn:breakspace
}