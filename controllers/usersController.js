const express = require('express');
const autos = require('../db')
const db = require("../db/models");
const bcryptjs = require("bcryptjs");
const { Association } = require('sequelize');
const User = db.User; 


const usersController = {

    register: function(req, res) {


        if (req.session.user != undefined) {
            return res.redirect("/users/profile")
        } else {
            res.render('register')
        }

        
    },
    create: function(req, res) {
       // recuperar los datos del form
       let user = req.body.user;
       let email = req.body.email;
       let password = req.body.password;
       let date = req.body.fecha;
       let dni = req.body.dni;
       let foto = req.body.foto;

       // guardar el usuario
       let usuario = {
           usuario: user,
           email: email,
           contrasenia: bcryptjs.hashSync(password, 10),
           fecha: date,
           dni: dni,
           foto_perfil: foto
       }

       db.User.create(usuario)
           .then(function(results) {
               return res.redirect("/users/login")
           })
           .catch(function(err) {
               return res.send(err)
           })
       
   },
    login: function(req, res) {
        if (req.session.user != undefined) {
            return res.redirect("/users/profile")
        } else {
            res.render('login')
        }
    },
    createLogin: function(req, res) {
        // recuperar los datos del form
        let userInfo = {
            email: req.body.email,
            contrasenia:  req.body.password,
            recordarme:  req.body.checkbox
        }
       
        // validar que el mail y la pasword sean correctas
        let user = db.User.findOne({
            where: {
                email: userInfo.email
            }
        }) //las validaciones no estan hechas
        
        

        //poner en session
        req.session.user = userInfo;

        // check de recordarme?
        if (userInfo.recordarme != undefined) {
            // como se crea una cookie?
            res.cookie("user", userInfo, { maxAge: 150000});
        }

        res.redirect("/users/profile")
    },
    profile: function(req, res) {
        let id = req.params.id
        // console.log(id);                
        res.render('profile', {profile: autos, producto: autos.productos})

//         const relacion = {
//     include : [{
//         Association: "user"
//     }]
// }
//     User.findByPk(id)
//         .then(function (resultados) {
//             return res.render('profile', {Usuario: resultados})

//         })
//         .catch(function (err) {
//             return res.send(err);
//         })
    }
    


}


    



module.exports = usersController;