const express = require('express');

const app = express();
const router = express.Router();

let Student = require('../models/Student');

router.route('/add-student').post((req, res, next) => {
    Student.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

router.route('/').get((req, res, next) => {
    Student.find((err, data) => {
        if (err) {
            return next(err)
        } else {
            res.json(data)
        }
    })
})

router.route('/update-student/:id').put((req, res, next) => {
    Student.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
        (err, data) => {
            if (err) {
                return next(err)
            } else {
                res.json(data);
                console.log('Student successfully updated!');
            }
        }
    )
})

router.route('/delete/student/:id').delete((req,res,next)=>{
    Student.findByIdAndDelete(req.params.id, (err,data)=>{
        if (err) {
            return next(err)
        } else {
            res.status(200).json({
                msg: data
            });
            console.log('Student successfully updated!');
        }
    })
})
module.exports = router;