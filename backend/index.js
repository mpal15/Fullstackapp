import express from 'express';

const app = express();

app.get('/', (req,res)=>{
    res.send('Server is ready')
});

app.get('/api/joke',(req,res)=>{
    const joke = [
        {
           id:1,
           title: 'A joke',
            content: 'This is a joke'  
        },
        {
            id:2,
            title: 'A joke',
             content: 'This is a joke2'  
         }
    ]
    res.send(joke);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("app is running in 3000 port")
})