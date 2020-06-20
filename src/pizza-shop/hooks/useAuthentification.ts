import { useEffect, useState } from "react";
declare const window: any;

const auth = window.firebase.auth();
const prowider = new window.firebase.auth.GoogleAuthProvider();

export const useAuthentification = (): any => {
    const [authentificated, setAuthentificated] = useState("loading");
    const login = (): void => {
        auth.signInWithPopup(prowider);
    };

    const logout = (): void => {
        auth.signOut()
            .then(() => {})
            .catch((error: any) => {});
    };
    useEffect(() => {
        auth.onAuthStateChanged(
            (user: any) => {
                if (user) {
                    setAuthentificated(user);
                } else {
                    setAuthentificated("");
                }
            },

            (error: any) => {
                console.log(error);
            },
        );
    }, []);

    return { login, logout, loggedIn: authentificated };
};
