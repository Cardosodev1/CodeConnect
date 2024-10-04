import styled from 'styled-components'
import BarraDePesquisa from './components/BarraDePesquisa'
import Sidebar from './components/Sidebar'
import Filtro from './components/Filtro'
import Ordenacao from './components/Ordenacao'
import Card from './components/Card'
import { useEffect, useState } from 'react'

interface Props {
  id: number
  imagem_capa: string
  titulo: string
  resumo: string
  linhas_de_codigo: number
  compartilhamentos: number
  comentarios: number
  usuario: {
    nome: string
    imagem: string
  }
}

const Container = styled.div`
  width: 1165px;
  margin: 56px auto;
  display: flex;
  gap: 16px;
`

const Div = styled.div`
  flex-grow: 2;
`

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 24px;
`

function App() {
  const [dados, setDados] = useState<Props[]>([])
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes').then(resposta => resposta.json()).then(dados => setDados(dados))
  }, [])

  return (
    <Container>
      <Sidebar />
      <Div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <Ul>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card 
                id={item.id}
                imagemUrl={item.imagem_capa}
                titulo={item.titulo}
                resumo={item.resumo}
                linhasDeCodigo={item.linhas_de_codigo}
                compartilhamentos={item.compartilhamentos}
                comentarios={item.comentarios}
                usuario={item.usuario}/>
            </li>
          )): null}
        </Ul>
      </Div>  
    </Container>
  )
}

export default App
