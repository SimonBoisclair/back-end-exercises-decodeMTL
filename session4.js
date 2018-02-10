const express = require('express')
const app = express()

function parseCookies(str) {
   let asArray =  str.split('; ').map(x => x.split('='));
   let ret = {};
   asArray.forEach(lst => ret[lst[0]] = lst[1])
   return ret;
}


function genRand() {
   return Math.floor(Math.random() * 100000000)
}

// Object shape { userID : noOfVisit }
var userList = {}

app.get('/', (req, res) => {
    if (req.headers.cookie) {
       let cookies = parseCookies(req.headers.cookie);

       // If the user have a cookie on its computer but we have restarted the computer since
       // This would be deleted once we include a persistency method
       if(userList[cookies.userID] === undefined){
           userList[cookies.userID] = 0
           res.send("<h1>Soory mate, we know you already visited our web site!<br/><br/>  But we lost track of it !!! <br/><br/>We will consider this as your first visit.</h1>");
       }else{
           userList[cookies.userID] = userList[cookies.userID]+1
           res.send("HAPPY TO SEE YOU AGAIN, MATE </br> Number of previous visits : "+userList[cookies.userID]);
       }
   }else{

       newUserId = genRand()
       if (userList[newUserId] !== undefined){
           newUserId = getRand()
       }

       res.set('Set-Cookie', "userID="+newUserId)
       res.send("Hey user "+newUserId+", it's the first time we saw you!");
       userList[newUserId] = 0
   }
})

app.listen(3000, () => console.log('Port 3000'))
