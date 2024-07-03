const express = require("express");
const RegisterAttendee = require("../controllers/registerAttendee");
const { AttendeePay, PaySuccess, PayFail, PayCancel } = require("../controllers/attendeePay");
const regRouter = express.Router();

regRouter.post("/",RegisterAttendee);
regRouter.get('/pay/:id',AttendeePay);
regRouter.post('/paySuccess/:id',PaySuccess);
regRouter.post('/payFail/:id',PayFail);
regRouter.post('/payCancel/:id',PayCancel);

// localhost:5000/register/pay/
module.exports = regRouter;