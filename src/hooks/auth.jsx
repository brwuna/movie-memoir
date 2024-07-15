import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});
    
    async function signIn({ email, password }) {

        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@movie-memoir:user", JSON.stringify(user));
            localStorage.setItem("@movie-memoir:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });


        } catch (e) {
            if(e.response) {
                alert(e.response.data.message)
            } else {
                alert("Não foi possível entrar.")
            }
        }

    }

    function signOut() {
        localStorage.removeItem("@movie-memoir:user");
        localStorage.removeItem("@movie-memoir:token");
        
        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
        try {
            
            if(avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);
                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);
            localStorage.setItem("@movie-memoir:user", JSON.stringify(user));
            
            setData({ user, token: data.token });
            alert("Pefil atualizado!")

        } catch (e) {
            if(e.response) {
                alert(e.response.data.message)
            } else {
                alert("Não foi possível atualizar o perfil.")
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@movie-memoir:user");
        const token = localStorage.getItem("@movie-memoir:token");
        
        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            setData({ 
                token,
                 user: JSON.parse(user) 
            });
        }
    }, [])
    
    return (
        <AuthContext.Provider value={{ 
            signIn, 
            signOut, 
            user: data.user,
            updateProfile 
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };