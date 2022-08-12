const homeHandler = require("./handlers/home")
const publicHandler = require("./handlers/public")
const artistHandler = require("./handlers/artist")



const router= (req,res)=>{
    const endpoint= req.url
    if(endpoint="/"){
        homeHandler(res)
    }else if(endpoint.includes("public")){
        publicHandler(res,endpoint)
    }else if(endpoint.includes("post")){
        artistHandler(res,endpoint)
    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1> Page Not Found ! <h1> ')
        res.end();
    }
}

module.exports = router;
