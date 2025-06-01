const express = require('express');
const autos = require('../db')
const db = require("../db/models");
const bcryptjs = require("bcryptjs");
const User = db.User;


const usersController = {

    register: function (req, res) {


        if (req.session.user != undefined) {
            return res.redirect("/users/profile")
        } else {
            // Limpiamos cualquier error anterior
            return res.render('register', { error: null })
        }


    },
    create: function (req, res) {
        // recuperar los datos del form
        let user = req.body.user;
        let email = req.body.email;
        let password = req.body.password;
        let date = req.body.fecha;
        let dni = req.body.dni;
        let foto = req.body.foto;

        // Validar email vacío
        if (!email) {
            return res.render('register', { error: 'El email es obligatorio' });
        }

        // Validar contraseña
        if (!password) {
            return res.render('register', { error: 'La contraseña es obligatoria' });
        }
        if (password.length < 3) {
            return res.render('register', { error: 'La contraseña debe tener al menos 3 caracteres' });
        }

        // Verificar si el email ya existe
        db.User.findOne({
            where: {
                email: email
            }
        })
        .then(function(userExists) {
            if (userExists) {
                return res.render('register', { error: 'Este email ya está registrado' });
            }

            // Si el email no existe, crear el usuario
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
                    return res.render('register', { error: 'Error al crear el usuario' });
                })
        })
        .catch(function(err) {
            return res.render('register', { error: 'Error al verificar el email' });
        });
    },
    login: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect("/users/profile")
        } else {
            // Limpiamos cualquier error anterior
            return res.render('login', { error: null })
        }
    },
    createLogin: function (req, res) {
        let email = req.body.email;
        let password = req.body.password;

        // Validar campos vacíos
        if (!email) {
            return res.render('login', { error: 'El email es obligatorio' });
        }
        if (!password) {
            return res.render('login', { error: 'La contraseña es obligatoria' });
        }

        // Buscar usuario por email
        db.User.findOne({
            where: {
                email: email
            }
        })
        .then(function(user) {
            if (!user) {
                return res.render('login', { error: 'El email no está registrado' });
            }

            // Verificar contraseña
            if (!bcryptjs.compareSync(password, user.contrasenia)) {
                return res.render('login', { error: 'La contraseña es incorrecta' });
            }

            // Si todo está bien, crear la sesión
            req.session.user = {
                id: user.id,
                email: user.email,
                usuario: user.usuario,
                foto_perfil: user.foto_perfil
            };

            if (req.body.checkbox) {
                res.cookie("user", req.session.user, { maxAge: 150000 });
            }

            return res.redirect("/users/profile/" + user.id);
        })
        .catch(function(error) {
            return res.render('login', { error: 'Error al iniciar sesión' });
        });
    },
    profile: function (req, res) {
        let id = req.params.id
        
        
        User.findByPk(id,{include:[{association:'products', include: [{ association: 'comments' }]},{association:'comments'} ]})
        
            .then(function (resultados) {
                return res.render('profile', { usuario: resultados })
            })
            .catch(function (err) {
                return res.send(err);
            })
            
    },
    logout: function (req, res) {
        // Destruir la cookie
        res.clearCookie('user');
        
        // Destruir la sesión
        req.session.destroy();
        
        // Redireccionar al login
        return res.redirect('/users/login');
    }

    


}






module.exports = usersController;