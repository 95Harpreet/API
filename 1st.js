//http module
const htpp=require('http')
const port=1242
const myserver=htpp.createServer((req,res)=>
{
    res.write('<h1>Hello how are you</h1>')
    res.end()
})

myserver.listen(port,()=>
{
    console.log(`click here http://localhost:${port}`)
})