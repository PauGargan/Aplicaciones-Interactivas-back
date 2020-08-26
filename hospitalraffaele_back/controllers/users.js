const Sequelize = require('sequelize');
const db = require('../models');
const users = db.users;

module.exports = {

    /**
     * Users Create
     */
    create (req, res) {
        return users
            .create({
                username: req.body.username,
                role_id: req.body.role_id,
                email: req.body.email,
                status: req.body.status
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Users Update
     */
    update (req, res) {
        return users
            .findOne({
                where: {
                    id: req.body.user_id
                }
            })
            .then(user => { 
                delete req.body.user_id;
                user
                    .update(req.body)
                    .then(user => res.status(200).send(user))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },

    /**
     * Users Disable
     */
    disable (req, res) {
        return users
            .findOne({
                where: {
                    id: req.body.user_id
                }
            })
            .then(user => { 
                user
                    .update({
                        status: 0
                    })
                    .then(user => res.status(200).send(user))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },

    /**
     * List of Users
     */
    list (_, res) {
        return users
            .findAll({})
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Find all users by role
     */
    find (req, res) {
        return users
            .findAll({
                where: {
                    email: req.params.email,
                }
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },

    /**
     * list all users by role
     */
    listByRole (req, res) {
        return users
            .findAll({
                where: {
                    role_id: req.params.role,
                }
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },
}