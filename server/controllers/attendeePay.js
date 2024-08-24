const SSLCommerzPayment = require("sslcommerz-lts");
const Attendee = require("../models/attendee");
const baseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;
const FRONTENDURL = process.env.NEXT_PUBLIC_APP_FRONTEND_URL;
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWD;
const is_live = false; //true for live, false for sandbox
// const billAmount = 1000; // registration fee
const earlyBirdDeadline = new Date("2024-12-10T23:59:59Z");
const regularDeadline = new Date("2024-12-25T23:59:59Z");

const AttendeePay = async (req, res) => {
  const { id } = req.params;
  try {
    const attendee = await Attendee.findById(id);
    if (!attendee) {
      return res.status(404).json({ message: "Attendee not found" });
    } else if (attendee.payment_status) {
      return res.status(400).json({ message: "Already Paid" });
    }

    const currentDate = new Date();
    let billAmount = 0;

    // Determine the fee based on the deadline
    if (currentDate <= earlyBirdDeadline) {
      billAmount = attendee.early_bird_fee;
    } else if (currentDate <= regularDeadline) {
      billAmount = attendee.regular_fee;
    } else {
      return res.status(400).json({ message: "Payment deadline has passed" });
    }
    
    const data = {
      total_amount: billAmount,
      currency: attendee.currency,
      tran_id: id,
      cus_email: attendee.email,
      cus_phone: attendee.phone,
      shipping_method: "NO",
      product_name: "Registration for ICERIE 2025",
      product_category: "N/A",
      product_profile: "Ticket",
      success_url: `${baseUrl}/registration/paySuccess/${id}`,
      fail_url: `${baseUrl}/registration/payFail/${id}`,
      cancel_url: `${baseUrl}/registration/payCancel/${id}`,
      emi_option: 0,
    };
    const sslcommerz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    sslcommerz.init(data).then((apiResponse) => {
      let GatewayPageURL = apiResponse.GatewayPageURL;
      res.json({ url: GatewayPageURL });
      // console.log("Payment gateway URL: ", GatewayPageURL);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const PaySuccess = async (req, res) => {
  const { id } = req.params;
  const { val_id } = req.body;
  const data = { val_id };

  try {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = await sslcz.validate(data);
    
    if ((apiResponse.status === 'VALID' || apiResponse.status === 'VALIDATED') && apiResponse.tran_id === id) {
      await Attendee.findByIdAndUpdate(id, { payment_status: true, val_id });
      // console.log("Payment successful");
      res.redirect(`${FRONTENDURL}/attendee/${id}`);
    } else {
      res.status(500).json({ message: "Payment Validation Failed" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Validate = async (req,res)=>{
  const data = req.body;
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
  sslcz.validate(data).then(response=>{
    res.status(200).json(response);
  })
}

const PayFail = async (req, res) => {
  const { id } = req.params;
  // console.log(req.body);

  // console.log("Payment failed.");
  res.redirect(`${FRONTENDURL}/attendee/${id}`);
};

const PayCancel = async (req, res) => {
  const { id } = req.params;
  // console.log("Payment canceled. Please complete payment soon.");
  res.redirect(`${FRONTENDURL}/attendee/${id}`);
};

module.exports = { AttendeePay, PaySuccess, PayFail, PayCancel, Validate };
