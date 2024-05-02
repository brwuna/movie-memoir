import { ContainerNewNote, Form } from "./styles"
import {Header} from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"

import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"

export function New() {
    return(
        <ContainerNewNote>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to="/">
                        <FiArrowLeft />
                            Voltar
                            </Link>
                        <h1>Novo Filme</h1>
                    </header>

                    <div className="inputs">
                        <Input placeholder="Título" />
                        <Input placeholder="Your score between(0 - 5)" />
                    </div>

                    <Textarea placeholder="Observações" />

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="Romance" />
                            <NoteItem value="Fantasia" />
                            <NoteItem isNew placeholder="Novo Marcador" />
                        </div>
                    </Section>

                    <div>
                        <Button name="Excluir" />
                        <Button name="Salvar" />
                    </div>
                </Form>
            </main>
        </ContainerNewNote>
    )
}