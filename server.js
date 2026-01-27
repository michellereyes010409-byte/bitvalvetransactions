const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Sample data representation
let receiptData = {
    payment: 0,
    currency: "USD",
    made_by: "",
    receiver_name: "",
    account_number: "",
    reason: "",
    status: "Pending"
};

// Route to get receipt data
app.get('/api/receipt', (req, res) => {
    res.json(receiptData);
});

// Route to update receipt data
app.post('/api/admin/update-receipt', (req, res) => {
    const { payment, currency, made_by, receiver_name, account_number, reason } = req.body;

    // Update the receipt data
    receiptData = {
        payment,
        currency,
        made_by,
        receiver_name,
        account_number,
        reason,
        status: "Updated"
    };

    res.json({ success: true });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
