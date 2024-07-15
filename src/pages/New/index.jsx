import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"

import { ContainerNewNote, Form } from "./styles"
import {Header} from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"

export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState([]);
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleteTag) {
        setTags(prevState => prevState.filter(tag => tag !== deleteTag));
    }

    async function handleNewMovie() {
        if(!title) {
            return alert("Você precisa informar o nome do filme!")
        }

        if(!rating) {
            return alert("Você precisa informar a nota do filme!")
        }

        if (rating < 0 || rating > 5) {
            return alert("A nota do filme deve estar entre 0 e 5")
        }

        if(!description) {
            return alert("Você precisa informar a descrição do filme!")
        }

        if(newTag) {
            return alert("Você esqueceu de adicionar a tag, volte para adicionar novamente!")
        }

        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        })

        alert("Nota do filme foi criada com sucesso!");
        navigate(-1);
    }

    function handleBack() {
        navigate(-1);
    }

    return(
        <ContainerNewNote>
            <Header />

            <main>
                <Form>
                    <header>
                        <button type="button" onClick={handleBack}>
                            <FiArrowLeft size={28} />
                        </button>
                        <h2>Novo Filme</h2>
                    </header>

                    <div className="inputs">
                        <Input 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                            placeholder="Your score between(0 - 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <Textarea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                    tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)} 
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }
                        </div>
                        <div className="tags">
                            <NoteItem 
                                isNew 
                                placeholder="Novo Marcador"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <div>
                        {/* <Button name="Excluir" /> */}
                        <Button 
                            name="Salvar" 
                            onClick={handleNewMovie} 
                        />
                    </div>
                </Form>
            </main>
        </ContainerNewNote>
    )
}