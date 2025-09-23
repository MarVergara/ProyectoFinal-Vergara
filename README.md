# PMO — Flowershop (React + Firebase)

SPA e-commerce built with React Router, Context, and Firestore.

## Run
- `npm install`
- Create `.env` with your Firebase config (VITE_ or REACT_APP_ vars).
- `npm start`

## Features
- Catalog & detail from Firestore (with category filtering)
- Cart (Context): items, qty, subtotal, total; remove/clear
- Checkout: writes order to Firestore and shows order ID
- Routing: Home, Products, /category/:categoryId, /item/:itemId, Cart, Checkout, Contact, 404

## Notes
- Images use direct URLs (i.ibb.co or similar).
- Firestore rules allow reads and orders creation for demo.
