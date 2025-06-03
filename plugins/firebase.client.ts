import { initializeApp } from "firebase/app";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
  };
  const app = initializeApp(firebaseConfig);
});