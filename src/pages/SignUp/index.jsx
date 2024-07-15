import { useState } from "react"
import { api } from "../../services/api"

import { ContainerSignUp, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Link, useNavigate } from "react-router-dom"
import { FiLock, FiMail, FiUser } from "react-icons/fi"

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }
        
        api.post("/users", {name, email, password})
        .then(() => {
            alert("Cadastro realizado com sucesso!");
            navigate("/");
        })
        .catch(e => {
            if(e.response) {
                alert(e.response.data.message);
            }
        })
    }

    return(
        <ContainerSignUp>
            <Form>
                <h1>Movie Memoir 🎬</h1>
                <p>Aplicação para acompanhar seus filmes favoritos.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome" 
                    type="text" 
                    icon={FiUser}
                    onChange={e => setName(e.target.value)} 
                />

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
                
                <Button name="Cadastrar" onClick={handleSignUp} />

                <Link to="/">Voltar para o login</Link>
            </Form>
            <Background />
        </ContainerSignUp>
    )
}