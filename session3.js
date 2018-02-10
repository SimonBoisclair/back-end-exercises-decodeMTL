const express = require('express')
const app = express()

function parseCookies(str) {
   let asArray =  str.split('; ').map(x => x.split('='));
   let ret = {};
   asArray.forEach(lst => ret[lst[0]] = lst[1])
   return ret;
}

app.get('/', (req, res) => {
    if (req.headers.cookie) {
       let cookies = parseCookies(req.headers.cookie);
       //console.log(cookies)
       res.send("HAPPY TO SEE YOU AGAIN, MATE");
   }else{
       res.set('Set-Cookie', "noWorries=REMEMBER ME")
       res.send("WE NEVER SAW YOUR FACE, </br> BUT GIVE US A CHANCE, </br> WE WILL REMEMBER");
   }
})

app.listen(3000, () => console.log('Port 3000'))
