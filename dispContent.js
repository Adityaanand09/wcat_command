let fs=require("fs");
function contentViewr(filePath)
{
   fs.readFile(filePath,'utf8', function (err,data){
    if (err) {
      return console.log(err);
    }
    console.log(data);
  })
}

  /*let data = fs.readFileSync(filePath).toString();
console.log(data);
}*/

module.exports={
    fn:contentViewr
}
