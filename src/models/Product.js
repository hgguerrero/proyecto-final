import { db } from '../config/firebase.config.js';
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc 
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

class Product {
  static async getAll() {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  static async getById(id) {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  }

  static async create(data) {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  }

  static async update(id, data) {
    const docRef = doc(db, 'products', id);
    await updateDoc(docRef, data);
    return { id, ...data };
  }

  static async delete(id) {
    const docRef = doc(db, 'products', id);
    await deleteDoc(docRef);
    return true;
  }
}

export default Product;