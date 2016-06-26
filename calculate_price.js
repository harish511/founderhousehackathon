var station1 = {
    capacity: 10,
    inventory: 1,
    maxPayOut: 1.00,
    maxPrice: -2.00,
    priceRange: function() {
        return this.maxPayOut + Math.abs(this.maxPrice)
    },
    incrementSize: function() {
        return this.priceRange() / (this.capacity - 1);
    },
    availableSpaces: function() {
        return this.capacity - this.inventory;
    },
    price: function(type) {
        if (type === 'dropoff') {
            var startPrice = this.maxPayOut;
            var priceOffset = this.inventory * this.incrementSize(); 
            return startPrice - priceOffset;
        } else if (type == 'pickup') {
            var startPrice = this.maxPayOut;
            var priceOffset = this.availableSpaces() * this.incrementSize();
            return startPrice - priceOffset;
        }
        return priceOffset;
    }
};

console.log(station1.price('pickup'));