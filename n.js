let fs = require("fs");
let copyContent = require("./copyContent");
let breakspacef12f2 = require("./breakspacef1f2");
let breakspace = require("./breakspace");
let s = require("./s");
const { fn } = require("./dispContent");
function input(argument)
{
    let input1 = argument[1];
    if(input1=='-s')
    {
        if(input[3]!=">>" && input[3]!=">")
        {
            let filepath = argument[2];
            if(isFileorNot(filepath))
            {
                addnumber(filepath);
                breakspace.fn(filepath)
            }
            else
            console.log("ENTER CORRECT FILE NAME");
            
        }
        else if(input[3]==">")
        {
            copyContent.fn('c',argument);
            addnumber(input[4]);
        }
        else
        {
            let filePath1 = argument[2];
            let filePath2 = argument[4];
            if(isFileorNot(filePath1) && isFileorNot(filePath2))
            {
                
                
                copyContent.fn('c',argument);
                adddnumber(input[4]);
            }
            else
            console.log("ENTER CORRECT FILE NAME");
        }
    }
    else
    {
        //console.log("chcecking for b");
        if(argument[1]!="-b")
        {
            if(argument[2]!=">>" &&argument[2]!=">")
        {
            //copyContent.fn('b',argument);
            if(isFileorNot(argument[1]))
            addnumber(argument[1]);
            else
            console.log("ENTER CORRECT FILE NAME");
        }
        
        else
        {
            copyContent.fn('b',argument);
            addnumber(argument[3]);
            
        }
        }
        else
        {
            if(argument[3]==undefined)
            {
                //copyContent.fn('c',argument);
                addnumber(argument[2]);
            }
            
            else
            {
                copyContent.fn('c',argument);
                addnumber(argument[4]);
                
            }

        }
        
    }

}


function isFileorNot(filepath)
{
    let k =fs.existsSync(filepath)
   // console.log(k);
    return k;
}
function addnumber(filePath)
{  let data = fs.readFileSync(filePath).toString();
  //console.log(data);
let no_of_lines = data.split('\n').length;
let a=data.split('\n');
let c=1;
for(let i=0;i<no_of_lines;i++)
{
    console.log(i+1+" "+a[i]);
    //console.log(a[i].length);
      /* if(a[i].length>1)
    {
      console.log(c+" "+a[i]);
    c++; 
    } */
}
  
}

module.exports={
    fn:input
}