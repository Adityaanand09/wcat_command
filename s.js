let fs = require("fs");
let copyContent = require("./copyContent");
let breakspacef12f2 = require("./breakspacef1f2");
let breakspace = require("./breakspace");
function input(argument)
{
     //console.log(argument);
   let input1 = argument[1];
   if(input1.charAt(0)=='-')
   {
       if(input1.charAt(1)=='n')
       {
           if(argument[3]!=">>")
           {
            let filePath = argument[2];
            if(isFileorNot(filePath))
            {
                breakspace.fn(filePath)
            }
            else
            console.log("ENTER CORRECT FILE NAME");
            
            //console.log("call n.js");
           }
           else
           {
               let filePath1 = argument[2];
               let filePath2 = argument[4];
               if(isFileorNot(filePath2) && isFileorNot(filePath1))
               //copycontent(filePath1,filePath2)
               breakspacef12f2.fn(filePath1,filePath2);
               else
               console.log("ENTER CORRECT FILE NAME");

               //console.log("call n.js");
           }
           
       }
       else if(input1.charAt(1)=='b')
       {
        if(argument[3]!=">>")
           {
            let filePath = argument[2];
            if(isFileorNot(filePath))
            {
                breakspace.fn(filePath)
            }
            else
            console.log("ENTER CORRECT FILE NAME");
            //console.log("call b.js");
           }
           else
           {
               let filePath1 = argument[2];
               let filePath2 = argument[4];
               if(isFileorNot(filePath2) && isFileorNot(filePath1))
               //copycontent(filePath1,filePath2)
               breakspacef12f2.fn(filePath1,filePath2);
               else
               console.log("ENTER CORRECT FILE NAME");

               //console.log("call b.js");
           }
       }
   }
  
   else
   {
       if(argument[2]==undefined)
       {
        let filePath = argument[1];
        //console.log(filePath);
       if(isFileorNot(filePath))
       {
             breakspace.fn(filePath)
       }
       else
       console.log("ENTER CORRECT FILE NAME");
        // console.log("only remove empty lines");
       }
       else 
       {
        copyContent.fn('b',argument);
        breakspace.fn(argument[3]);
       }
       
   } 
}


function isFileorNot(filepath)
{
    let k =fs.existsSync(filepath)
   // console.log(k);
    return k;
}


module.exports={
    fn:input
    
}