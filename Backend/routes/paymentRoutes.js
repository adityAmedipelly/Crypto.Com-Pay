const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/create', async (req, res) => {
    const { amount, currency } = req.body;
    try {
        const paymentRequest = {
            amount: amount,
            currency: currency,
            description: 'Product Payment',
            redirect_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        };

        const response = await axios.post('https://api.crypto.com/v2/pay', paymentRequest, {
            headers: {
                'Authorization': `Bearer ${process.env.CRYPTO_COM_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({ error: 'Payment request failed' });
    }
});

module.exports = router;
