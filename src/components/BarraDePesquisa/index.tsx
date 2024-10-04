import styled from "styled-components"
import Search from './assets/search.svg'
import { useState } from "react"

const Input = styled.input`
    width: 100%;
    color: #BCBCBC;
    padding: 8px 16px 8px 64px;
    height: 49px;
    font-size: 22px;
    background: #171D1F url(${Search}) no-repeat 24px;
    border: none;
    border-radius: 4px;
`

export default function BarraDePesquisa() {
    const [termoPesquisa, setTermoPesquisa] = useState('')
    console.log(termoPesquisa)
    return (
        <Input 
            type="text" 
            placeholder="Digite o que você procura"
            value={termoPesquisa}
            onChange={(evento) => setTermoPesquisa(evento.target.value)} />
    )
}