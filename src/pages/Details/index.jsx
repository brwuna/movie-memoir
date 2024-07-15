import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

import { Container, Content } from "../Details/styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Rating } from "../../components/Rating";
import { Tags } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function DetailsMovie() {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchMovie()
  }, [])

  async function handleRemove() {
    const confirmDeleteNoteMovie = window.confirm("Deseja realmente remover a nota deste filme?");
    if(confirmDeleteNoteMovie) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  function handleBack() {
    navigate(-1)
  }


  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <div className="btns">
              <span onClick={handleBack}>
                <FiArrowLeft size={24} />
              </span>

              <ButtonText 
                title="Excluir nota" 
                onClick={handleRemove} 
                />
            </div>

            <div>
              <h1>{data.title}</h1>
              <Rating grade={data.rating} isBigSize />
            </div>

            <div className="user-post">
              <img src={avatarURL} alt={user.name} />
              <span>By {user.name}</span>
              <AiOutlineClockCircle />
              <span>{data.created_at}</span>
            </div>

            {
              data && 
              <Section>
                {
                  data.tags.map(tag => (
                    <Tags 
                    key={String(tag.id)}
                    title={tag.name} 
                    />
                  ))
                }
              </Section>
            }

            <p>{data.description}</p>
            
          </Content>
        </main>
      }
    </Container>
  )
}
