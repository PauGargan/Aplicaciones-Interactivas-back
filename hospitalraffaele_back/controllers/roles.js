const Sequelize = require('sequelize');
const db = require('../models');
const roles = db.roles;
const permissions = db.permissions;

module.exports = {

    /**
     * Roles Create
     */
    create (req, res) {
        return roles
            .create({
                name: req.body.name
            })
            .then(role => {
                let permissionsArr = [];
                for(let i=0; i < req.body.permissions.length; i++) {
                    req.body.permissions[i].role_id = role.id;
                    permissionsArr.push(req.body.permissions[i]);
                }

                return permissions
                    .bulkCreate(permissionsArr)
                    .then(permissions => res.status(200).send(permissions))
                    .catch(error => res.status(400).send(error)) 
            })
            .catch(error => res.status(400).send(error))
    },

    /**
     * Roles Update
     */
    update (req, res) {
        return roles
            .findOne({
                where: {
                    id: req.body.role_id
                }
            })
            .then(role => { 
                role
                    .update({
                        name: req.body.name
                    })
                    .then(role => res.status(200).send(role))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },

    /**
     * List of Roles
     */                  
    list (_, res) {
        return roles
            .findAll({})
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Find a Roles
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