import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBdytEr5I0e7DDhBD8ZJHxQhLMkvpH0vMA",
  authDomain: "vanlife-project-ef043.firebaseapp.com",
  projectId: "vanlife-project-ef043",
  storageBucket: "vanlife-project-ef043.firebasestorage.app",
  messagingSenderId: "537543067841",
  appId: "1:537543067841:web:a8d34aa2d5e0594b2cec40",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

// Refactoring the fetching functions below
const vansCollectionReference = collection(database, "vans");

export async function getVans() {
  const snapshot = await getDocs(vansCollectionReference);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getVan(id) {
  const docRef = doc(database, "vans", id);
  const snapshot = await getDoc(docRef);

  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}

// A fs the function for 2 seconds before moving on
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(() => resolve(), ms));
// }

// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : "/api/vans";
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
