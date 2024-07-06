const express = require("express");
const {RegisterAttendee, getAllAttendee} = require("../controllers/registerAttendee");
const { AttendeePay, PaySuccess, PayFail, PayCancel, Validate } = require("../controllers/attendeePay");
const regRouter = express.Router();

regRouter.post("/",RegisterAttendee);
regRouter.get("/",getAllAttendee);
regRouter.get('/pay/:id',AttendeePay);
regRouter.post('/paySuccess/:id',PaySuccess);
regRouter.post('/payFail/:id',PayFail);
regRouter.post('/payCancel/:id',PayCancel);
regRouter.post("/validate",Validate);

// localhost:5000/register/pay/
module.exports = regRouter;