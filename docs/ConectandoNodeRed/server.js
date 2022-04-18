const http = require('http')

const server= http.createServer((req,res){
    res.end('<h1>Deu certo</h1>')
})

server.listen(3001,'localhost',()=>{
    console.log('Servidor de pé em : http://localhost:3001')
    console.log('Jaja eu solicito a hora')
})