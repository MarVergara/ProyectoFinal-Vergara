# PMO — Flower Shop (React + Firebase)

Minimal e-commerce built with React, React Router, Context, and Cloud Firestore.

## Run
1. `npm install`
2. `npm start`

## Routes
- `/` Home
- `/products` All products
- `/category/:categoryId` Catalog by category
- `/item/:itemId` Product details
- `/checkout` Create order, shows order ID
- `/contact` Contact
- `*` 404

## Notes
- Products + orders are stored in **Firestore**.
- For local dev, allow reads and order creation in Firestore rules.
