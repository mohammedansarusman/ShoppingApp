import { cookies } from "next/headers";

type UserTypes = {
    id: string;
    name: string;
    email: string
    password: string;
}

export const setSession = async(user: UserTypes) => {
    const cookieStore = await cookies();
    cookieStore.set("session", JSON.stringify(user), { 
        path: "/" ,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60,

    });
}
// get session cookie and return user object
export const getSession = async (): Promise<UserTypes | null> => {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session");
    if (!sessionCookie) {
        return null;
    }
    try {
        const user: UserTypes = JSON.parse(sessionCookie.value);
        return user;
    } catch (error) {
        console.error("Error parsing session cookie:", error);
        return null;
    }
}

// delete session cookie
export const deleteSession = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("session");
}