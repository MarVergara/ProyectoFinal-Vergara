import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../utils/firebase";

const create = async ({ buyer, items, total }) => {
  const ref = collection(db, "orders");
  const docRef = await addDoc(ref, {
    buyer,
    items,
    total: Number(total ?? 0),
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};

export const orders = { create };
