"use client";
import { useFormState } from "react-dom";
import { signUp } from "../actions";

export default function Page() {
  const [state, formAction] = useFormState(signUp, {
    error: null,
  });
  
  return (
    <>
      <h1>Create an account</h1>
      <form action={formAction}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br />
        {state.error}
        <button>Continue</button>
      </form>
    </>
  );
}
