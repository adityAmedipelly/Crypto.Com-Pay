import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [amount, setAmount] = useState('');

    const handlePayment = async () => {
        try {
            const response = await axios.post('/api/payments/create', {
                amount: amount,
                currency: 'USD',
            });
            window.location.href = response.data.redirect_url;
        } catch (error) {
            console.error('Payment error:', error);
        }
    };

    return (
        <div>
            <h1>Crypto.com Pay MERN Project</h1>
            <input
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handlePayment}>Pay with Crypto.com</button>
        </div>
    );
}

export default App;
