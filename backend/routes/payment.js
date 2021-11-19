const express = require("express");
const router = express.Router();

const {
  createCheckoutSession,
  checkoutSessionHandler,
} = require("../controllers/paymentController");

// const { isAuthenticatedUser } = require('../middlewares/auth');

// router.route('/payment/process').post(processPayment);
// router.route('/stripeapi').get(sendStripeApi);
//router.route("/create-checkout-session").post(createCheckoutSession);
router.route("/create-checkout-session").post(createCheckoutSession);
router.route("/checkout-session").get(checkoutSessionHandler);
module.exports = router;
