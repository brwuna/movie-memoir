import { ContainerTag } from "./styles"

export function Tags({ title, ...rest }) {
    return (
        <ContainerTag {...rest}>
            {title}
        </ContainerTag>
    )
}