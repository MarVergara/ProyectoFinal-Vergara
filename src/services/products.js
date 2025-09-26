import { collection, getDocs, query, where, doc, getDoc, limit } from "firebase/firestore";
import { db } from "../utils/firebase";

const getAll = async (categoryId) => {
  const ref = collection(db, "products");
  const q = categoryId ? query(ref, where("category", "==", categoryId)) : ref;
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ docId: d.id, ...d.data() }));
};

const getById = async (idOrCustom) => {
  const byDocSnap = await getDoc(doc(db, "products", String(idOrCustom)));
  if (byDocSnap.exists()) return { docId: byDocSnap.id, ...byDocSnap.data() };

  const ref = collection(db, "products");
  let snap = await getDocs(query(ref, where("id", "==", String(idOrCustom)), limit(1)));
  if (!snap.empty) {
    const d = snap.docs[0];
    return { docId: d.id, ...d.data() };
  }
  const n = Number(idOrCustom);
  if (Number.isFinite(n)) {
    snap = await getDocs(query(ref, where("id", "==", n), limit(1)));
    if (!snap.empty) {
      const d = snap.docs[0];
      return { docId: d.id, ...d.data() };
    }
  }

  return null;
};

const add = async (_newFlower) => {};
const update = async (_flower) => {};
const remove = async (_id) => {};

export const products = { getAll, getById, add, update, remove };
