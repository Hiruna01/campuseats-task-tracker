const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (!Number.isFinite(price) || price < 0 ||
      !Number.isInteger(quantity) || quantity < 0) {
    throw new Error("Price must be nonnegative and quantity must be a nonnegative integer");
  }

  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}