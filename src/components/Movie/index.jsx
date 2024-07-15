import { ContainerNote } from "./styles"
import { Tags } from "../Tag"
import { Rating } from "../Rating"

export function Movie({ data, ...rest }) {
    return(
        <ContainerNote {...rest}>
            <h1>{data.title}</h1>

            <Rating grade={data.rating} />
            <p>{data.description}</p>

            {
                data.tags && 
                <footer>
                    {data.tags.map(tag => <Tags key={tag.id} title={tag.name} />
                    )}
                </footer>
            }
        </ContainerNote>
    )
}