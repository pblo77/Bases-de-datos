const  express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pablo77:QewYSKqogPZ9Dhk2@introduccion.xb6yhqk.mongodb.net/");
const db = mongoose.connection;

db.on("error", console.error.bind(console,"error"));

db.once("open",function(){
    console.log("connected to MongoDB");
    userSchema=mongoose.Schema({
        nombres: String,
        apellidos: String
    });
    const usuarios = mongoose.model("users",userSchema);

    const app = express();
    app.use(express.json());

    /* 1. usuarios mayores de 18 */
    app.get("/api/mayor",async(req,res)=>{
        const users = await usuarios.find({ edad: { $gt:18}});
        res.json(users);
    });
    /* 2. usuarios de londres o paris */
    app.get("/api/lop",async(req,res)=>{
        const users = await usuarios.find({$or: [{ciudad: "Londres"},
        {ciudad: "Paris"}]});
        res.json(users);
    });

    /* 3. usuarios que ganen mas de 2000 y tengan menos de 30 años.*/
    app.get("/api/2000y30",async(req,res)=>{
        const users = await usuarios.find({$and: [{salario: { $gt:2000}},
        {edad: { $lt:30}}]});
        res.json(users);
    });

    /* 4. usuarios de españa y ganen mas de 3000 al mes */
    app.get("/api/3000yespaña",async(req,res)=>{
        const users = await usuarios.find({$and: [{ciudad: "España"},
        {salario: { $gt:3000}}]});
        res.json(users);
    });

    /* 5. usuarios entre 25 y 35 */
    app.get("/api/25y35",async(req,res)=>{
        const users = await usuarios.find({$and: [{edad: { $gt:25}},
        {edad: { $lt:35}}]});
        res.json(users);
    });

    /* 6. usuarios que NO sean de estados unidos */
    app.get("/api/nounidos",async(req,res)=>{
        const users = await usuarios.find({pais: {$ne: "Estados Unidos"}});
        res.json(users);
    });

    /* 7. Usuarios de londres y ganen mas de 2500 o que tengan mas de 30 años */
    app.get("/api/ly2500o30",async(req,res)=>{
        const users = await usuarios.find({$or: [{$and:[{ciudad:"Londres"},{salario: {$gt:2500}}]},{edad: {$gt:30}}]});
        res.json(users);
    });

    /* 8. usuarios que sean de australia y tengan un peso mayor a 140 libras */
    app.get("/api/peso140",async(req,res)=>{
        const users = await usuarios.find({$and: [{pais: "Australia"},
        {peso: { $gt:140}}]});
        res.json(users);
    });

    /*  9. usuarios que no sean de londres ni paris*/
    app.get("/api/no2",async(req,res)=>{
        const users = await usuarios.find({$and: [{ciudad: {$ne: "Londres"}},
        {ciudad: {$ne: "Paris"}}]});
        res.json(users);
    });

    /* 10. usuarios que ganen menos de 2000 o mas de 40 años*/
    app.get("/api/200040", async (req,res)=>{
        const users = await usuarios.find({$or: [{usuarios: {$lt:2000}},{edad: {$gt:40}}]});
        res.json(users);
    });

    /* 11. usuarios que sean de canada y ganen mas de 4000 al mes O que tengan una altura mayor a 1.80 */
    app.get("/api/c4000o180", async (req,res)=>{
        const users = await usuarios.find({$or:[
            {$and: [{pais: "Canada"},{salario: {$gt: 4000}}]},{altura: {$gt:1.80}}
        ]});
        res.json(users);
    });

    /* 12.Usuarios que sean de italia y tengan entre 20 y 30 años*/
    app.get("/api/i20y30", async (req,res)=>{
        const users = await usuarios.find({$and: [{pais: "Italia"},{$and: [{edad: {$gte:20}},{edad: {lte:30}}]}]});
        res.json(users);
    });

    /* 13. usuarios que no tengan un correo electronico registrado*/
    app.get("/api/noemail", async (req,res)=>{
        const users = await usuarios.find({correo: {$exists: false}});
        res.json(users);
    });

    /* 14.  usuarios que sean de francia y su salario este entre 3000 y 5000*/
    app.get("/api/f3000y5000", async(req,res)=>{
        const users = await usuarios.find({$and: [{pais: "Francia"},{$and: [{salario: {$gte:3000}},{salario: {$lte:5000}}]}]});
        res.json(users);
    });

    /* 15. usuarios que sean de brasil y tengan un peso menor a 120 O  mayor a 140 */
    app.get("/api/b120o140", async(req,res)=>{
        const users = await usuarios.find({$and: [{pais: "Brasil"},{$or: [{peso: {lt:120}},{peso: {gt:140}}]}]});
        res.json(users);
    });

    /* 16. usuarios que sean de argentina o de chile y que su edad sea menor a 25.*/
    app.get("/api/ao25", async(req,res)=>{
        const users = await usuarios.find({$or: [{pais: "Argentina"},{$and: [{pais: "Chile"},{edad: {lt:25}}]}]});
        res.json(users);
    });

    /* 17. usuarios que no sean de españa ni mexico y que ganes menos de 3000 al mes*/
    app.get("/api/noespañamexico3000", async(req,res)=>{
        const users = await usuarios.find({$and: [{$and: [{pais: {$ne:"Mexico"}},{pais: {$ne: "España"}}]},{salario: {lt:3000}}]});
        res.json(users);
    });

    /* 18. usuarios que sean de alemania y que tengan un salario menor a 4000 O edad mayor a 35 */
    app.get("/api/a4000oe35", async(req,res)=>{
        const users = await usuarios.find({$or:[{$and: [{pais: "Alemania"},{salario: {lt:4000}}]},{edad: {$gt: 35}}]});
        res.json(users);
    });

    /* 19. usuarios que no sean de colombia y que su altura sea menor a 1.70*/
    app.get("/api/ncyam170", async(req,res)=>{
        const users = await usuarios.find({$and: [{pais: {$ne: "Colombia"}},{altura: {lt:1.70}}]});
        res.json(users);
    });

    /* 20 . usuarios que sean de india y que no tengan un salario registrado*/
    app.get("/api/nossalario", async(req,res)=>{
        const users = await usuarios.find({$and: [{pais: "India"},{salario: {$exists: false}}]});
        res.json(users);
    });
   
    app.listen(4000,function(){console.log("server arriba")});
});