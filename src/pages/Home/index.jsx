import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Content, NewMovie } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Movie } from '../../components/Movie'
import { api } from '../../services/api'

export function Home() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/notes?title=${search}`);
            setMovies(response.data)
        }
        fetchMovies();
    }, [search])

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    return(
        <Container>
            <Header>
                <Input 
                    placeholder="Pesquisar pelo tema" 
                    icon={FiSearch}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>

            <main>
                <header>
                    <h1>Meus filmes</h1>

                    <NewMovie to="/new">
                        <FiPlus />
                        Adicionar filme
                    </NewMovie>
                </header>
                
                <Content>
                    {
                        movies.map(movie => (
                            <Movie 
                                key={String(movie.id)}
                                data={movie}
                                onClick={() => handleDetails(movie.id)}
                            />
                        ))
                    }
                </Content>
            </main>
        </Container>
    )
}