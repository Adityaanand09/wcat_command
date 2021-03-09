let fs =require("fs");
function breakspacef12f2(filePath1,filePath2)
{
 let data = fs.readFileSync(filePath1).toString();
  //console.log(data);
let no_of_lines = data.split('\n').length;
//let a=data.split('\n');
let f  = data.replace(/(\r\n|\r|\n){2,}/g, "");let ans=[];
console.log(f);
fs.appendFile(filePath2, f,function (err) {
  if (err) return console.log(err);
});

}

module.exports={
    fn:breakspacef12f2
}