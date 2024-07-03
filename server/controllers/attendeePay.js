const SSLCommerzPayment = require("sslcommerz-lts");
const Attendee = require("../models/attendee");
const { BACKENDURL, FRONTENDURL } = require("../URL");
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWD;
const is_live = false; //true for live, false for sandbox
const billAmount = 1000; // registration fee


const AttendeePay = async (req, res) => {
  const { id } = req.params;
//   console.log(id)
  try {
    const attendee = await Attendee.findById(id);
    if (!attendee) {
      return res.status(404).json({ message: "Attendee not found" });
    } else if (attendee.payment_status) {
      return res.status(400).json({ message: "Already Paid" });
    }
    const data = {
      total_amount: billAmount,
      currency: "BDT",
      tran_id: id,
      cus_email: attendee.email,
      cus_phone: attendee.phone,
      shipping_method: "NO",
      product_name: "Registration for ARCES 2024",
      product_category: "N/A",
      product_profile: "Ticket",
      success_url: `${BACKENDURL}registration/paySuccess/${id}`,
      fail_url: `${BACKENDURL}registration/payFail/${id}`,
      cancel_url: `${BACKENDURL}registration/payCancel/${id}`,
      emi_option: 0,
    };
    const sslcommerz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    sslcommerz.init(data).then((apiResponse) => {
      // Redirect the user to payment gateway
      let GatewayPageURL = apiResponse.GatewayPageURL;
      res.redirect(GatewayPageURL);
      console.log("Redirecting to: ", GatewayPageURL);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const PaySuccess = async(req,res)=>{
    const { id } = req.params;
    try {
        await Attendee.findByIdAndUpdate(id,{payment_status:true});
        console.log("Payment successfull");
        res.redirect(`${FRONTENDURL}success`);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const PayFail = async(req,res)=>{
    console.log("Payment failed.");
    res.redirect(`${FRONTENDURL}fail`);
};

const PayCancel = async(req,res)=>{
    console.log("Payment canceled. Please complete payment soon.");
    res.redirect(`${FRONTENDURL}cancel`);
};

module.exports = {AttendeePay, PaySuccess, PayFail, PayCancel};
