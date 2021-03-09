let fs = require("fs");
let dispContent = require("./dispContent");
let path =require("path");
function input(code,argument)
{
    if(code=='a')
    {
        if(argument[1]==">>")
        {
            console.log("appendcontent");
            appendFile(argument[0],argument[2]);
            
        }
        else if(argument[1]==">")
        {
            //console.log("copyfile");
            copyFile(argument[0],argument[2]);
            
        }
    }
    else if(code=='b')
    {
        if(argument[2]==">>")
        {
            console.log("appendcontent");
            appendFile(argument[1],argument[3]);
            
        }
        else if(argument[2]==">")
        {
            //console.log("copyfile");
            copyFile(argument[1],argument[3]);
            
        }
    }
    else if(code=='c')
    {
        if(argument[3]==">>")
        {
            //console.log("appendcontent");
            appendFile(argument[2],argument[4]);
            
        }
        else if(argument[3]==">")
        {
            //console.log("copyfile");
            copyFile(argument[2],argument[4]);
            
        }
        
    }

    
}
function copyFile(filePath1, filePath2) {
    /* let filePath1=input[1];
            let filePath2=input[3]; */
            if (fs.existsSync(filePath2)) {
                // Do something
                fs.copyFile(filePath1, filePath2, (error) => {
                    // incase of any error
                    if (error) {
                      console.error(error);
                      return;
                    }
                });
            }
            else 
            {
                let fileName2 = path.basename(filePath2)
                console.log(fileName2);
                let content = fs.copyFile(filePath1, filePath2, (error) => {
                    // incase of any error
                    if (error) {
                      console.error(error);
                      return;
                    }
                });
               // console.log(content);
                /* fs.writeFile(fileName2,content , function (err) {
                    if (err) throw err;
                    console.log('File is created successfully.');
                  }); */
            }
            dispContent.fn(filePath2);
    
}

function appendFile(file1,file2)
{
    if(isFileorNot(file1) && isFileorNot(file2))
    {
        var w = fs.createWriteStream(file2, {flags: 'a'});
        // open source file for reading
        var r = fs.createReadStream(file1);
        
        w.on('close', function() {
            console.log("done writing");
        });
        
        r.pipe(w);
        dispContent.fn(file2);
    }
    else
       console.log("ENTER CORRECT FILE NAME");
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