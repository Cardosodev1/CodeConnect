import styled from "styled-components"

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`

const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 24px;
`

const Li = styled.li`
    background-color: #BCBCBC;
    color: #171D1F;
    font-size: 18px;
    padding: 4px 8px;
    border-radius: 4px;
`

const Button = styled.button`
    border: none;
    background-color: transparent;
    color: #888888;
    font-size: 18px;
`

export default function Filtro() {
    return(
        <Section>
            <Ul>
                <Li>Front-end</Li>
                <Li>React</Li>
                <Li>Acessibilidade</Li>
            </Ul>
            <Button>Limpar Tudo</Button>
        </Section>
    )
}