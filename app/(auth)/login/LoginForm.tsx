"use client";
import { loginAction } from "../../actions/auth";

export const LoginForm = () => {
  
  return (
    <form action={loginAction}>
      <div className="w-100 bg-red-200 h-50 p-4">
        <label className="block" htmlFor="email">
          Email
        </label>
        <input
          placeholder="Enter email address"
          className="block"
          name="email"
          id="email"
          type="text"
        />
        <label className="block" htmlFor="password">
          Password
        </label>
        <input
          placeholder="Enter password"
          className="block"
          name="password"
          id="password"
          type="password"
        />
      </div>
      <button className="px-5 py-2 bg-blue-700" type="submit">LOGIN</button>
    </form>
  );
};
