// This is the async and we need callbacks = we run it when we are done 
const {readFile, writeFile} = require('fs')

readFile('./content/subfolder/test.txt', 'utf8', (error, result) =>{
    if(error){
        console.log("There is an error");
        return
    }
    const first = result;
    readFile('./content/subfolder/second.txt','utf8', (error, result) =>{
        if(error){
            console.log(error);
            return
        }
        const second = result;
        writeFile('./content/subfolder/async.txt', `Async file and adding same files content
         ${first}, ${second}`, (error, result) =>{
            if(error){
                console.log(error);
                return
            }
            console.log(result);
         })
    })    
})