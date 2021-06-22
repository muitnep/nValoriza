import express, { response } from 'express';

const app = express();

app.get("/teste", (resquest, response) => {
    return response.send('Olá NLW');
});

app.post("/teste-post", (resquest, response) => {
    return response.send("Olá NLW método post...");
})

app.listen(3000, () => {
    console.log("Server is Running...");
})
