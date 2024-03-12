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
    })

    const User = mongoose.model("usuarios",userSchema);
    const empresa = mongoose.model("empresas",userSchema);
    const usuarios = mongoose.model("users",userSchema);

    const app = express();
    app.use(express.json());

    app.get("/api/user",async(req,res)=>{
        const users = await User.find();
        res.json(users);
    });

    /* Listar solo 10 usuarios */
    app.get("/api/user10",async(req,res)=>{
        const user = await User.find().limit(10);
        res.json(user);
    });

    /* Listado de todas las empresas */
    app.get("/api/empresas",async(req,res)=>{
        const empresas = await empresa.find();
        res.json(empresas);
    });

    /* listado de usuarios que sean de la empresa id 5. */

    app.get("/api/user5",async(req,res)=>{
        const user = await User.find({empresa_id: 5 });
        res.json(user);
    });

    /* listado de usuarios que sean de Bangladesh.*/
    app.get("/api/userb",async(req,res)=>{
        const user = await User.find({pais: "Bangladesh" });
        res.json(user);
    });

    /* listado de empresas de la ciudad Bangladesh */
    app.get("/api/empresab",async(req,res)=>{
        const empresas = await empresa.find({ciudad: "Bangladesh" });
        res.json(empresas);
    });



    /* LOS EJERCICIOS DESDE AQUI SE DEBEN ENLAZAR A COLECTION USER (OPERADORES)*/

    /*Comparar si un campo es igual a un valor especifico*/
    app.get("/api/especifico",async(req,res)=>{
        const users = await usuarios.find({ edad: 5});
        res.json(users);
    });

    /* Se trae todos los datos, excepto el especificado */
    app.get("/api/excepto",async(req,res)=>{
        const users = await usuarios.find({ edad: { $ne:20}});
        res.json(users);
    });

    /* Operador mayor que */
    app.get("/api/mayor",async(req,res)=>{
        const users = await usuarios.find({ edad: { $gt:20}});
        res.json(users);
    });

    /* Operador menor que */
    app.get("/api/menor",async(req,res)=>{
        const users = await usuarios.find({ edad: { $lt:20}});
        res.json(users);
    });

    /* Operador mayor o igual que */
    app.get("/api/mayor_igual",async(req,res)=>{
        const users = await usuarios.find({ edad: { $gte:20}});
        res.json(users);
    });

    /* Operador menor o igual que */
    app.get("/api/menor_igual",async(req,res)=>{
        const users = await usuarios.find({ edad: { $lte:20}});
        res.json(users);
    });

    /* valor de un campo dentro de un array de valores */
    app.get("/api/array",async(req,res)=>{
        const users = await usuarios.find({ edad: { $in:[20,30,40]}});
        res.json(users);
    });

    /* todos menos los especificados en el array */
    app.get("/api/array2",async(req,res)=>{
        const users = await usuarios.find({ edad: { $nin:[20,30,40]}});
        res.json(users);
    });

    /* busca documentos donde un campo especifico existe o no existe*/
    app.get("/api/existe",async(req,res)=>{
        const users = await usuarios.find({ edad: { $exists:true}});
        res.json(users);
    });

    app.listen(4000,function(){console.log("server arriba");});

});