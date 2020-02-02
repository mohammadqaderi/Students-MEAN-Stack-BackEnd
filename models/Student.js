const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
    student_name: {
        type: String
    },
    student_email: {
        type: String
    },
    section: {
        type: String
    },
    subjects: {
        type: Array
    },
    gender: {
        type: String
    },
    DOB: {
        type: Date
    },
}, {
    collation: 'students'
});
module.exports = mongoose.model('Student', Student)