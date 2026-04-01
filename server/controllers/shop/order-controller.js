const { OrdersController, CheckoutPaymentIntent } = require("@paypal/paypal-server-sdk");
const client = require("../../helpers/paypal"); // your existing client
const Order = require("../../models/Order");

const ordersController = new OrdersController(client);

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      paymentId,
      payerId,
      cartId,
    } = req.body;

    const orderRequest = {
      body: {
        intent: CheckoutPaymentIntent.Capture, // "CAPTURE" (new SDK uses CAPTURE, not "sale")
        purchaseUnits: [
          {
            amount: {
              currencyCode: "USD",
              value: totalAmount.toFixed(2),
              breakdown: {
                itemTotal: {
                  currencyCode: "USD",
                  value: totalAmount.toFixed(2),
                },
              },
            },
            items: cartItems.map((item) => ({
              name: item.title,
              sku: item.productId,
              unitAmount: {
                currencyCode: "USD",
                value: item.price.toFixed(2),
              },
              quantity: String(item.quantity),
            })),
          },
        ],
        applicationContext: {
          returnUrl: "http://localhost:5173/shop/paypal-return",
          cancelUrl: "http://localhost:5173/shop/paypal-cancel",
        },
      },
    };

   const response = await ordersController.createOrder(orderRequest);
console.log("Full PayPal Response:", JSON.stringify(response, null, 2));

const paymentInfo =response.result ;

    const newlyCreatedOrder = new Order({
      userId,
      cartId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      paymentId,
      payerId,
    });

    await newlyCreatedOrder.save();

    // Find the approval link
    const approvalURL = paymentInfo.links.find(
      (link) => link.rel === "approve"  // new SDK uses "payer-action" instead of "approval_url"
    ).href;
console.log("PayPal Response:", JSON.stringify(paymentInfo, null, 2));
    res.status(201).json({
      success: true,
      approvalURL,
      orderId: newlyCreatedOrder._id,
    });

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

const capturePayment = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

module.exports = { createOrder, capturePayment };
