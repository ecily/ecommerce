const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// current checkout implementation according new documentation from stripe
exports.createCheckoutSession = catchAsyncErrors(async (req, res, next) => {
  const { cartItems } = req.body;

  const lineItems = cartItems.map((i) => ({
    price: i.priceId,
    quantity: i.quantity,
  }));
  console.log(lineItems);
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: ["AT"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "eur",
          },
          display_name: "Gratis Versand",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 3,
            },
          },
        },
      },
    ],
    payment_method_types: ["card", "eps", "sofort"],
    mode: "payment",
    success_url: `http://localhost:3000/success?id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/cancel`,
  });

  // res.json(303, session.url); only works within the same domain otherwise I'll got an cors error
  //workaround for cors error locally
  res.json({ url: session.url });
});

exports.checkoutSessionHandler = catchAsyncErrors(async (req, res, next) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.id, {
    expand: ["line_items"],
  });
  res.json(session);
});
