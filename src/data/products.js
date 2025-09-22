const PRODUCTS = [
  { id: "1", title: "Red Roses Bouquet", category: "bouquets", price: 4500 },
  { id: "2", title: "Spring Tulips Bouquet", category: "bouquets", price: 3900 },
  { id: "3", title: "White Orchid (Indoor)", category: "indoor", price: 5500 },
  { id: "4", title: "Succulent Mix (3 pack)", category: "succulents", price: 2500 },
  { id: "5", title: "Lavender Dried Set", category: "bouquets", price: 2900 },
  { id: "6", title: "Monstera Deliciosa", category: "indoor", price: 6000 },
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function getProducts(categoryId) {
  await delay(600);
  return categoryId ? PRODUCTS.filter((p) => p.category === categoryId) : PRODUCTS;
}

export async function getProductById(id) {
  await delay(600);
  return PRODUCTS.find((p) => p.id === id) || null;
}
