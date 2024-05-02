import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { ContainerProfile, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'
export function Profile() {
    return(
        <ContainerProfile>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/brwuna.png" alt="Foto do user" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Senha atual" type="password" icon={FiLock} />
                <Input placeholder="Nova senha" type="password" icon={FiLock} />

                <Button name="Salvar" />
            </Form>
        </ContainerProfile>
    )
}