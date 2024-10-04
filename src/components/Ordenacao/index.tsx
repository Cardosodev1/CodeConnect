import styled from "styled-components"

const Ul = styled.ul`
    display: flex;
    margin-top: 56px;
    list-style-type: none;
    gap: 24px;
    justify-content: center;
`

const Anchor = styled.a`
    font-size: 22px;
    color: #888888;
    text-decoration: none;
`

export default function Ordenacao() {
    return (
        <div>
            <Ul>
                <li><Anchor href="#">Recentes</Anchor></li>
                <li><Anchor href="#">Recentes</Anchor></li>
            </Ul>
        </div>
    )
}