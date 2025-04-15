const express = require('express');
const autos = require('../db')

const profileController = {

    
    profile: function(req, res) {
        res.render('profile', {profile: autos, producto: autos.productos})
    },
    
    


}

module.exports = profileController;