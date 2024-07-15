import { useAuth } from "../../hooks/auth"
import { useState } from "react"

import { ContainerSignIn, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { FiLock, FiMail } from "react-icons/fi"

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return(
        <ContainerSignIn>
            <Form>
                <h1>Movie Memoir 🎬</h1>
                <p>Aplicação para acompanhar seus filmes favoritos.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail" 
                    type="text" 
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)} 
                />

                <Input 
                    placeholder="Senha" 
                    type="password" 
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)} 
                />

                <Button name="Entrar" onClick={handleSignIn} />

                <Link to="/register">Criar conta</Link>
            </Form>
            <Background />
        </ContainerSignIn>
    )
}