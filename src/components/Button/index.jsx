import { Container } from "./styles";

export function Button({ name, loading = false }) {
    return(
        <Container type="button" disabled={loading}>
            { loading ? 'Carregando...' : name}
        </Container>
    )
}