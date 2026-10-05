const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"));
const pool = require("./db");





app.get("/multas", async(req,res)=>{
    const [rows] = await pool.query("SELECT *FROM multas");
    return res.json(rows);
});

app.get("/multas/:id", async(req,res) =>{
    const id = Number(req.params.id);
    const [rows] = await pool.query("SELECT * FROM multas WHERE id = ?",[id]);

    if(rows.length === 0){
        return res.status(404).send({error: "Multa não encontrada"});
    }
    res.json(rows)[0];
});

app.post("/multas", async(req,res) =>{
    const{ait,placa,condutor,valor,status} = req.body;
    const [result] = await pool.query("INSERT INTO multas (ait, placa, condutor, valor, status) VALUES (?, ?, ?, ?, ?)", [ait,placa,condutor,valor,status]);
    const id = result.insertId;
    res.status(201).json(id);

});

app.patch("/multas/:id", async(req,res)=>{
    const id = Number(req.params.id);
    const status = req.body.status;
    const [result] = await pool.query("UPDATE multas SET status = ? WHERE id = ?", [status,id]);
    if(result.affectedRows === 0){
        return res.status(404).send({error:"Multa não encontrada"});
    }
    const [rows] = await pool.query("SELECT * FROM multas WHERE id = ?", [id]);
    res.status(200).json(rows[0]);




});

app.delete("/multas/:id", async(req,res)=>{
    const id = Number(req.params.id);
    const [result] = await pool.query("DELETE FROM multas WHERE id = ?",[id]);
    if(result.affectedRows === 0){
        return res.status(404).send({error:"Multa não encontrada"});
    }

    res.status(204).send();
});

app.listen(3000,() =>{
    console.log("Servidor rodando em http://localhost:3000");
});