import { livros } from "../DadosUltimoslancamentos";
import styled from "styled-components";
import { Titulo } from "../Titulo";
const UltimoslancaSection = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
  return (
    <UltimoslancaSection>
      <Titulo>Últimos Lançamentos</Titulo>
      <NovosLivrosContainer>
                 { livros.map( livro => (
                <img src={livro.src}></img>
            )) }
         </NovosLivrosContainer>
    </UltimoslancaSection>
  );
}   

export default UltimosLancamentos;