const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    desc: String,
    mime: String,
    image: String,
    categories: String,
    discount: Number,
});

productSchema.virtual('averageRating').get(function () {
    if (this.reviews.length === 0) {
      return 0;
    }
    const totalRating = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / this.reviews.length;
  });
  

module.exports = mongoose.model('Products', productSchema);