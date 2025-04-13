import mongoose from "mongoose";
import validator from "validator";

const reservationSchma = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain atleast 3 character"],
        maxLength: [30, "Last name can not exceed 30 characters"],
    },

    lastName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain atleast 3 character"],
        maxLength: [30, "Last name can not exceed 30 characters"],
    },                  
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],

    },
    phone: {
        type: String,
        required: true, 
        minLength: [10, "Phone number must conatin only 10 digits"],
        maxLength: [10, "Phone number must contain only 10 digits"]
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation",reservationSchma);


// or


// const Reservation = mongoose.model('Reservation', reservationSchma);

// module.exports = Reservation;