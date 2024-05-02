import { ContainerSignUp, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Link } from "react-router-dom"
import { FiLock, FiMail, FiUser } from "react-icons/fi"

export function SignUp() {
    return(
        <ContainerSignUp>
            <Form>
                <h1>Movie Memoir 🎬</h1>
                <p>Aplicação para acompanhar meus filmes favoritos.</p>

                <h2>Crie sua conta</h2>

                <Input placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Senha" type="password" icon={FiLock} />
                <Button name="Cadastrar" />

                <Link to="/">Voltar para o login</Link>
            </Form>
            <Background />
        </ContainerSignUp>
    )
}