import express from "express";

const app = express();

app.get("/test", (request, response) => {
    return response.send('Olá Rogério');
});

app.post("/test-post", (request, response) => {
    return response.send('Opa!! esse é um método post');
});

app.listen(3000, () => console.log('Server is running'));