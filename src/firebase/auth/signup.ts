import firebase_app from "../firebase-config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

const auth = getAuth(firebase_app);
export default async function signUp(email: string, password: string) {
  let result = null;

  result = await createUserWithEmailAndPassword(auth, email, password);

  // localStorage.setItem("myUID", result.user.uid);

  return { result };
}
