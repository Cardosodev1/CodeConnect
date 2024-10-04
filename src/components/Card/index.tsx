import Code from './assets/code.svg'
import Chat from './assets/chat.svg'
import Share from './assets/share.svg'
import styled from 'styled-components'

interface Props {
    id: number
    imagemUrl: string
    titulo: string
    resumo: string
    linhasDeCodigo: number
    compartilhamentos: number
    comentarios: number
    usuario: {
        nome: string
        imagem: string
    }
}

const Article = styled.article`
    color: #BCBCBC;
    text-decoration: none;
    background-color: #171D1F;
    margin-top: 32px;
    border-radius: 8px;
    width: 100%;
    display: grid;
`

const CardImagem = styled.div`
    width: 100%;
    height: 240px;
    background-color: #BCBCBC;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgCapa = styled.img`
    width: 90%;
    height: 80%;
    object-fit: cover;
    border-radius: 8px;
`

const CardConteudo = styled.div`
    padding: 16px;
    height: 100%;
`

const ConteudoTexto = styled.div`
    margin-bottom: 67px;
`

const H3 = styled.h3`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
`

const P = styled.p`
    font-size: 15px;
    font-weight: 400;
    line-height: 23px;
`

const ConteudoRodape = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 16px;
    align-items: baseline;
`

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    font-size: 15px;
`

const LiImg = styled.img`
    width: 24px;
    height: 24px;
`

const RodapeUsuario = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const UsuarioImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 100%;
    object-fit: cover;
`

export default function Card({imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuario}: Props) {
    return (
        <Article>
            <CardImagem>
                <ImgCapa src={imagemUrl} alt="imagem do post" />
            </CardImagem>
            <CardConteudo>
                <ConteudoTexto>
                    <H3>{titulo}</H3>
                    <P>{resumo}</P>
                </ConteudoTexto>
                <ConteudoRodape>
                    <Ul>
                        <Li>
                            <LiImg src={Code} alt="códigos" />
                            <p>{linhasDeCodigo}</p>
                        </Li>
                        <Li>
                            <LiImg src={Share} alt="compartilhamentos" />
                            <p>{compartilhamentos}</p>
                        </Li>
                        <Li>
                            <LiImg src={Chat} alt="comentários" />
                            <p>{comentarios}</p>
                        </Li>
                    </Ul>
                    <RodapeUsuario>
                        <UsuarioImg src={usuario.imagem} alt="imagem do usuário" />
                        <p>{usuario.nome}</p>
                    </RodapeUsuario>
                </ConteudoRodape>
            </CardConteudo>
        </Article>
    )
}