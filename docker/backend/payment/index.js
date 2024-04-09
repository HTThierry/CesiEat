const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3006;

const paymentSchema = new mongoose.Schema({
  customerName: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  status: String
});
const Payment = mongoose.model('Payment', paymentSchema);

async function initializeData() {
  try {
    const count = await Payment.countDocuments();
    if (count === 0) {
      console.log("No payments found, initializing data...");
      const initialPayments = [
        { customerName: "John Doe", amount: 100, status: "Completed" },
        { customerName: "Jane Smith", amount: 200, status: "Pending" },
        { customerName: "Alice Johnson", amount: 50, status: "Failed" }
      ];
      await Payment.insertMany(initialPayments);
      console.log("Initial data inserted successfully!");
    }
  } catch (err) {
    console.error("Error initializing data:", err);
  }
}
console.log('Mongo URI:', process.env.MONGO_URI);
mongoose.connect('mongodb://localhost:27017/mydatabase', { //hack : mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
  try {
    initializeData();
  } catch (err) {
    console.error('Error initializing data:', err);
  }
})
.catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello, your Payment Service is running and connected to MongoDB!');
});

app.listen(port, () => {
  console.log(`Payment service listening at http://localhost:${port}`);
});
