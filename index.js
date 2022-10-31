const fs=require("fs");
var date=new Date();
var content="Date:"+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+"/"+"Time:"+date.getHours()+":"+ date.getMinutes()
+":"+ date.getSeconds();

const file=require("fs-extra");
const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==="/users"){
        res.write("The file was created ");
        fs.writeFileSync("123.txt",content);
    }else if(req.url==="/posts"){
        res.write("done");
        file.move("123.txt","File/123.txt")
    }else{
        res.write("{}");
    }
    res.end();
});
server.listen(3001)

