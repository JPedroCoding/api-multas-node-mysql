const express = require("express");
const app = express();
app.use(express.json());

const multas = [
    {id:1, ait: "AIT-001",placa : "ABC1D23", condutor: "João Silva", valor:195.23, status: "Aberta"},
    {id: 2 , ait:"AIT-002",placa:"XYZ4E56", condutor:"Maria Souza", valor:88.38, status:"paga"},
    {id:3 , ait:"AIT-003", placa:"QWE7R89", condutor: "Carlos Lima", valor:293.47, status:"aberta"},
];

app.get("/", (req,res) => {
    res.send("API de multas no ar!!!");
});

app.get("/multas", (req,res)=>{
    res.json(multas);
});

app.get("/multas/:id", (req,res)=>{
    const id = Number(req.params.id);
    const multa = multas.find((m) => m.id === id);

    if (!multa) {
        return res.status(404).send({error: "Multa não encontrada"});
    }

    res.send(multa);
});

app.post("/multas", (req,res)=> {
    const {ait,placa,condutor,valor,status}= req.body;
    const novaMulta = {id: multas.length + 1, ait, placa,condutor,valor,status};
    multas.push(novaMulta);
    res.status(201).json(novaMulta);
});

app.listen(3000,() =>{
    console.log("Servidor rodando em http://localhost:3000");
});

app.patch("/multas/:id", (req,res) =>{
    const id = Number(req.params.id);
    const multa = multas.find((m) => m.id === id);

    if(!multa){
        return res.status( 404).send({error: "Multa não encontrada"});
    }
    const status = req.body.status;
    const placa = req.body.placa;

    multa.status = status;
    multa.placa = placa;

    res.status(200).json(multa);
});

app.delete("/multas/:id",(req,res) =>{
    const id = Number(req.params.id);
    const posicao = multas.findIndex((m) => m.id === id );

    if( posicao === -1){
        return res.status(404).send({error:"Multa não encontrada"});
    }

    multas.splice(posicao,1);
    return res.status(204).send();
});