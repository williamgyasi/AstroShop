import { logEvent } from "firebase/analytics";
import { analytics, firebaseAuth } from "./getFirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const REGISTER__CLIENT = async (email, password) => {
  // const user = "i am the cat";
  const response = createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      // ..
    });
  return response;
};
