import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }){
    const [user, setUser] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) setUser(JSON.parse(saved));
    }, []);

    const login = (email) => {
        const fakeUser = { email, name: "Návštevník" };
        setUser(fakeUser);
        localStorage.setItem("user", JSON.stringify(fakeUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return(
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    return useContext(AuthContext);
}
