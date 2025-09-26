# PMO — Flower Shop (React + Firebase)

Minimal e-commerce built with React, React Router, Context, and Cloud Firestore.

## Run
1. `npm install`
2. Add your Firebase config to `.env` (CRA or Vite). Example keys:
   - REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_PROJECT_ID, REACT_APP_FIREBASE_STORAGE_BUCKET, REACT_APP_FIREBASE_MESSAGING_SENDER_ID, REACT_APP_FIREBASE_APP_ID
3. `npm start`

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
