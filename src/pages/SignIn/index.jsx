import { ContainerSignIn, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Link } from "react-router-dom"
import { FiLock, FiMail } from "react-icons/fi"

export function SignIn() {
    return(
        <ContainerSignIn>
            <Form>
                <h1>Movie Memoir 🎬</h1>
                <p>Aplicação para acompanhar meus filmes favoritos.</p>

                <h2>Faça seu login</h2>

                <Input placeholder="E-mail" type="text" icon={FiMail} />

                <Input placeholder="Senha" type="password" icon={FiLock} />

                <Button name="Entrar" />

                <Link to="/register">Criar conta</Link>
            </Form>
            <Background />
        </ContainerSignIn>
    )
}