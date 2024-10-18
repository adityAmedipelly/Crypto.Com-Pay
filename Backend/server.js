const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config({ path: './config/config.env' });

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

app.use('/api/payments', paymentRoutes);

app.post('/api/webhook', (req, res) => {
    const { paymentId, status } = req.body;
    if (status === 'CONFIRMED') {
        console.log(`Payment ${paymentId} confirmed.`);
    }
    res.status(200).send('Webhook received');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
