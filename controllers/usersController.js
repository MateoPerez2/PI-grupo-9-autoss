const express = require('express');
const autos = require('../db')

const usersController = {

    
    login: function(req, res) {
        res.render('login')
    },
    register: function(req, res) {
        res.render('register')
    },
    profile: function(req, res) {
        res.render('profile', {profile: autos, producto: autos.productos})
    }
    


}

module.exports = usersController;