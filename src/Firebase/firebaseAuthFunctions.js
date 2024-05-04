import { logEvent } from "firebase/analytics";
import { analytics, firebaseAuth } from "./getFirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const REGISTER__CLIENT = (email, password) => {
  createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};
