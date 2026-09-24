// CampusEats Task Tracker - Clean & Secure

const VIP_DISCOUNT = 0.1;

// Task list with metadata
const tasks = [
  { id: 1, title: "Set up MongoDB schemas", dueDate: "2026-10-05" },
  { id: 2, title: "Implement JWT authentication", dueDate: "2026-10-08" }
];

function calculateTotal(price, quantity, customerType) {
  // Input validation
  if (price < 0 || quantity < 0) {
    throw new Error("Price and quantity must be non-negative.");
  }

  const subtotal = price * quantity;
  return customerType === "VIP" ? subtotal * (1 - VIP_DISCOUNT) : subtotal;
}

// Display tasks
tasks.forEach(task => {
  console.log(`${task.id}. ${task.title} (Due: ${task.dueDate})`);
});

// Example calculation
console.log("Total:", calculateTotal(100, 2, "VIP"));

// Read secrets safely from environment variables (never hardcode)
const apiKey = process.env.API_KEY || "NOT_SET";
console.log("API Key loaded:", apiKey !== "NOT_SET");