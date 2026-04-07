'use server'
import axios from "axios"

import { redirect } from "next/navigation";
import { setSession } from "../_lib/session";

type UserTypes = {
    id: string;
    name: string;
    email: string;
    password: string;
}


export const loginAction = async (formData: FormData) => {
    console.log("🚀 Starting loginAction with formData:", formData);
    try {
        const email: string = (formData.get("email") as string).trim();
        const password: string = (formData.get("password") as string).trim();

        const url = `http://localhost:3001/users?email=${email}&password=${password}`;

        const response = await axios.get(url);

        console.log("👉 FULL RESPONSE:", response.data);
        const user = response.data[0];

        if (!user) {
            throw new Error("Invalid credentials");
        }

        console.log("✅ User found:", user);

        await setSession({name: user.name, email: user.email, id: user.id} as UserTypes);
        redirect("/shipping");

    } catch (error: any) {
        console.error("🔥 REAL ERROR:", error);
        throw error; // VERY IMPORTANT
    }
};