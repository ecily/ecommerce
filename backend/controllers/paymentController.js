const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../models/order");
const Product = require("../models/product");

// current checkout implementation according new documentation from stripe
exports.createCheckoutSession = catchAsyncErrors(async (req, res, next) => {
  const { cartItems } = req.body;

  const lineItems = cartItems.map((i) => ({
    price: i.priceId,
    quantity: i.quantity,
    description: i.product,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: ["AT"],
    },
    phone_number_collection: {
      enabled: true,
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
    payment_method_types: ["card", "eps", "sofort", "klarna"],
    mode: "payment",
    success_url:
      process.env.NODE_ENV === "DEVELOPMENT"
        ? `http://localhost:3000/success?id={CHECKOUT_SESSION_ID}`
        : `${process.env.BASE_URI}/success?id={CHECKOUT_SESSION_ID}`,
    cancel_url:
      process.env.NODE_ENV === "DEVELOPMENT"
        ? `http://localhost:3000/cancel`
        : `${process.env.BASE_URI}/cancel`,
  });

  res.json({ url: session.url });
  //only works within the same domain otherwise I'll got an cors error
  //workaround for cors error locally
});

exports.checkoutSessionHandler = catchAsyncErrors(async (req, res, next) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.id, {
    expand: ["line_items"],
  });
  const shippingInfo = {
    address: session.shipping.address.line1,
    city: session.shipping.address.city,
    phoneNo: session.customer_details.phone,
    postalCode: session.shipping.address.postal_code,
    country: session.shipping.address.country,
  };
  const user = session.shipping.name;
  const email = session.customer_details.email;
  const orderItems = await Promise.all(
    session.line_items.data.map(async (item) => {
      const ecilyProduct = await Product.findById(item.description);
      return {
        name: ecilyProduct.name,
        quantity: item.quantity,
        price: item.price.unit_amount / 100,
        product: item.description,
        image: ecilyProduct.images[0]?.url,
      };
    })
  );
  const paymentInfo = {
    id: session.id,
    status: session.payment_status,
  };
  const amount = session.amount_total / 100;

  const order = await Order.create({
    orderItems,
    shippingInfo,
    itemsPrice: amount,
    shippingPrice: amount,
    totalPrice: amount,
    paymentInfo,
    paidAt: Date.now(),
    user,
    email,
  });

  res.json(order.id);
});
