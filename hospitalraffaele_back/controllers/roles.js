const Sequelize = require('sequelize');
const db = require('../models');
const roles = db.roles;

module.exports = {

    /**
     * Users Create
     */
    create (req, res) {
        return roles
            .create({
                name: req.body.name
            })
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    },

    /**
     * List of Users
     */                  
    list (_, res) {
        return roles
            .findAll({})
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Find a Users
     */
    find (req, res) {
        return roles
            .findAll({
                where: {
                    name: req.params.name,
                }
            })
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    },
}