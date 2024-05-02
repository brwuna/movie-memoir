import { ContainerTextarea } from "./styles"

export function Textarea({ value, ...rest }) {
    return(
        <ContainerTextarea {...rest}>
            {value}
        </ContainerTextarea>
    )
}