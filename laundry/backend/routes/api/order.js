const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middlewares/auth');
const Order = require('../../models/Order');
const Razorpay = require('razorpay');




const instance = new Razorpay({
    key_id: "rzp_test_AA4NwVPxxntMXR",
    key_secret: "cpALU3dBceEwOWgW2Vtp2cTe"
});



// create order
router.post(
    '/',
    [
        check('schedule_date', 'schedule_date is required').not().isEmpty(),
        check('schedule_time', 'schedule_time is required').not().isEmpty(),
        check('name', 'name is required').not().isEmpty(),
        check('phone', 'phone is required').not().isEmpty(),
        check('address', 'address is required').not().isEmpty(),
        check('payment', 'payment is required').not().isEmpty(),
        check('payment_mode', 'payment_mode is required').not().isEmpty(),
    ],
    auth,
    async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            if (req.user) {
                const order = await Order.create(req.body);
                await order.save();
                return res.status(201).json(order);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }
);


// create order with payment online
router.get(
    '/orderPayment',
    // auth,
    async (req, res, next) => {
        try {
            const options = {
                amount: 2000 * 100, // amount == Rs 10
                currency: "INR",
                receipt: "receipt#1",
                payment_capture: 0,
                // 1 for automatic capture // 0 for manual capture
            };
            instance.orders.create(options, async function (err, order) {
                if (err) {
                    return res.status(500).json({
                        message: "Something Went Wrong",
                    });
                }
                return res.status(200).json(order);
            });
        } catch (err) {
            return res.status(500).json({
                message: "Something Went Wrong",
            });
        }
    }
);


router.post("/capture/:paymentId", (req, res) => {
    try {
        return request(
            {
                method: "POST",
                url: `https://${config.RAZOR_PAY_KEY_ID}:${config.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
                form: {
                    amount: 10 * 100,
                    currency: "INR",
                },
            },
            async function (err, response, body) {
                if (err) {
                    return res.status(500).json({
                        message: "Something Went Wrong",
                    });
                }
                console.log("Status:", response.statusCode);
                console.log("Headers:", JSON.stringify(response.headers));
                console.log("Response:", body);
                return res.status(200).json(body);
            });
    } catch (err) {
        return res.status(500).json({
            message: "Something Went Wrong",
        });
    }
});



// count all order
router.get('/getTotal', async (req, res) => {
    try {
        const getOrder = await Order.find().count();
        return res.status(201).json(getOrder)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


// get all order by id

router.get(
    '/:id',
    auth,
    async (req, res, next) => {
        try {
            if (req.user) {

                const id = req.params.id;

                const order = await Order.find().where({ user_id: id });

                if (order.length == 0) {
                    return res.status(404).json({ msg: "No record are found" })
                }

                return res.status(201).json(order);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }
);


// get all order 
router.get(
    '/',
    auth,
    async (req, res, next) => {
        try {
            if (req.user) {
                const order = await Order.find();

                if (order.length == 0) {
                    return res.status(404).json({ msg: "No record are found" })
                }

                return res.status(201).json(order);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }
);



module.exports = router;