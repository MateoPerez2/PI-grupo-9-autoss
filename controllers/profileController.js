const express = require('express');
const autos = require('../db')

const profileController = {

    
    profile: function(req, res) {
        res.render('profile', {profile: autos})
    },
    
    


}

module.exports = profileController;