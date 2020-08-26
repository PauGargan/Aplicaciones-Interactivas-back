const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const db = require('../models');
const users = db.users;
const patients = db.patients;
const PACIENTE = 3; // Role id del paciente

const hashPasswordAsync = async password => {
//	const salt = await bcrypt.genSalt()
	const hash = await bcrypt.hash(password);/*
	 * Instead of logging on the console
	 * you can store the password on the DB
	 */
	return hash;
}

module.exports = {

    /**
     * Users Create
     */
    create (req, res) {
        // TODO Encriptar password!!! Se puede usar bcrypt, investigar

        return users
            .create({
                role_id: req.body.role_id,
                email: req.body.email,
                password: req.body.password,
                status: req.body.status
            })
            .then(users => {
                if(users.role_id == PACIENTE) {
                    return patients
                        .create({
                            user_id: users.id,
                            dni: req.body.dni
                        })
                        .then(patient => res.status(200).send(patient))
                        .catch(error => res.status(400).send(error));
                } else {
                    return res.status(200).send(users); 
                }
            })
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