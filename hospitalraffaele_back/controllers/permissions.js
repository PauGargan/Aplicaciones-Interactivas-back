const Sequelize = require('sequelize');
const db = require('../models');
const permissions = db.permissions;
const features = db.features;

module.exports = {

    /**
     * Permissions Create
     */
    create (req, res) {
        return permissions
            .create({
                role_id: req.body.roleId,
                feature_id: req.body.featureId,
                can_create: req.body.canCreate,
                can_read: req.body.canRead,
                can_update: req.body.canUpdate,
                can_delete: req.body.canDelete,
            })
            .then(permissions => res.status(200).send(permissions))
            .catch(error => res.status(400).send(error))
    },

    /**
     * List of Permissions
     */                  
    list (_, res) {
        return permissions
            .findAll({})
            .then(permissions => res.status(200).send(permissions))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Find a Feature
     */
    find (req, res) {
        return permissions
            .findAll({
                where: {
                    role_id: req.params.roleId,
                },
                include: [{
                    model: features,
                    as: 'features'
                }]
            })
            .then(features => res.status(200).send(features))
            .catch(error => res.status(400).send(error))
    },
}