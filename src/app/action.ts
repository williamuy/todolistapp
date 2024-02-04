// app/actions.ts

"use server";

export async function fetchGreeting() {
  // Simulate fetching a greeting message
  return { message: "Welcome to our mini homepage!" };
}

export async function fetchItems() {
  // Simulate fetching a list of items
  return [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    // Add more items as needed
  ];
}
