#! /usr/bin/env node
var fs = require("fs");
var s =require("./s");
let b =require("./b");
let n= require("./n");
let copyFile =require("./copyContent");
let dispContent = require("./dispContent");
let input = process.argv.slice(2);
let str = input[0];

if(str.charAt(0)=='-')
{
    if(str.charAt(1)=='s')
    {
            //console.log("breakline remobal and call s.js");
            s.fn(input);

    }
    else if(str.charAt(1)=='b')
    {

           // console.log("count no.of lines and call b.js");
            b.fn(input);
    }
    else if(str.charAt(1)=='n')
    {
        //console.log("call n.js");
        n.fn(input);
    }
}
else
    {
        if(input[1]!=">>" && input[1]!=">")
        {
            let l =input.length;
        for(let i=0;i<l;i++)
        {
            if(isFileorNot(input[i]))
            {
                dispContent.fn(input[i]);
            }
            else
            {
                console.log("ENTER CORRECT FILE NAME!")
            }
        }
        }
        else 
        {
            copyFile.fn('a',input);

        }
        
    }
    function isFileorNot(filepath)
    {
        let k =fs.existsSync(filepath)
       // console.log(k);
        return k;
    }
