const Sequelize = require('sequelize');
const db = require('../models');
const availability = db.availability;

module.exports = {

    /**
     * Availability Create
     */
    create (req, res) {
        // Capturo datos del request
        let dateFrom = req.body.dateFrom;
        let dateTo = req.body.dateTo;
        let scheduleTemp = req.body.schedule;
        let doc = req.body.doctor;
        let freq = req.body.frequency;
        
        // Genero array de horarios por dia de semana
        let schedule = [];
        for(var i = 0; i < scheduleTemp.length; i++){
            schedule[scheduleTemp[i].day] = {
                start: scheduleTemp[i].start,
                end: scheduleTemp[i].end
            }
        }
        
        // Recorro el rango de fechas y genero su correspondiente objeto de dispoibilidad horaria.
        var getDaysArray = function(doc, freq, start, end) {
            var arr = [];
            var endDate = new Date(end);
            for(dt=new Date(start); dt<=endDate; dt.setDate(dt.getDate()+1)){
                var obj = {};
                if(typeof schedule[dt.getDay()] !== 'undefined')
                {
                    obj = {
                        doctor_id: doc,
                        date: dt.getFullYear() + "-" + ((dt.getMonth()+1).length > 1? (dt.getMonth()+1) : "0" + (dt.getMonth()+1)) 
                            + "-" + (dt.getDate().length > 1? dt.getDate() : "0" + dt.getDate()),
                        weekday: dt.getDay(),
                        timeFrom: schedule[dt.getDay()].start,
                        timeTo: schedule[dt.getDay()].end,
                        frequency: freq
                    };
                    arr.push(obj);
                }
                dt = new Date(dt);
            }
            return arr;
        };
        let dates = getDaysArray(doc, freq, dateFrom, dateTo);

        return availability
            .bulkCreate(dates)
            .then(availability => res.status(200).send(availability))
            .catch(error => res.status(400).send(error))
    },

    /**
     * List of Users
     */
    list (_, res) {
        return availability
            .findAll({})
            .then(availability => res.status(200).send(availability))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Find a Users
     */
    find (req, res) {
        return availability
            .findAll({
                where: {
                    doctor_id: req.params.doctor,
                }
            })
            .then(availability => res.status(200).send(availability))
            .catch(error => res.status(400).send(error))
    },
}