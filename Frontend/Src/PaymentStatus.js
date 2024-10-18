import React from 'react';
import { useParams } from 'react-router-dom';

function PaymentStatus() {
    const { status } = useParams();

    return (
        <div>
            {status === 'success' ? (
                <h1>Payment Successful!</h1>
            ) : (
                <h1>Payment Failed or Canceled</h1>
            )}
        </div>
    );
}

export default PaymentStatus;
