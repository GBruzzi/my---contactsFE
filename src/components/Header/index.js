import { Container } from "./styles";
import { InputSearchContainer } from "./styles";


export default function Header() {
  return (
    <Container>
      <h1>MyContacts</h1>

      <InputSearchContainer>
        <input type="text"  placeholder="Pesquise pelo nome... "></input>

      </InputSearchContainer>
    </Container>

  );
}
