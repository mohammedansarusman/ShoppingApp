import Link from "next/link";
import { LoginForm } from "../(auth)/login/LoginForm";

export default function LoginPage(){
    return (
        <div className="w-full h-screen bg-blue-500 pt-25">
            <h1 className="text-2xl font-bold text-white">Login</h1>
            <LoginForm/>
            <p>Don't have an account ? {" "}
                <Link href={"/register"}>Register</Link>
            </p>
        </div>
    )
}