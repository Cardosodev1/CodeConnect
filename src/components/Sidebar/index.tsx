import Logo from './assets/Logo.svg'
import Feed from './assets/feed.svg'
import Perfil from './assets/account_circle.svg'
import Info from './assets/info.svg'
import Sair from './assets/logout.svg'
import styled from 'styled-components'

const Aside = styled.aside`
    background-color: #171D1F;
    padding: 40px 16px;
    width: 177px;
    border-radius: 8px;
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px;
    list-style-type: none;
    margin-top: 80px;
`

const A = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;
    gap: 10px;
    border: 1px solid #81FE88;
    color: #81FE88;
    padding: 12px 30px;
    border-radius: 8px;
    text-decoration: none;
`

const Anchor = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;
    gap: 10px;
    text-decoration: none;
    color: #BCBCBC;
`

export default function Sidebar() {
    return (
        <Aside>
            <img src={Logo} alt="Logo do Code Connect" />
            <nav>
                <Ul>
                    <li>
                        <A href="#">Publicar</A>
                    </li>
                    <li>
                        <Anchor href="#">
                            <img src={Feed} alt="Feed" />
                            <span>Feed</span>
                        </Anchor>
                    </li>
                    <li>
                        <Anchor href="#">
                            <img src={Perfil} alt="Perfil" />
                            <span>Perfil</span>
                        </Anchor>
                    </li>
                    <li>
                        <Anchor href="#">
                            <img src={Info} alt="Info" />
                            <span>Sobre nós</span>
                        </Anchor>
                    </li>
                    <li>
                        <Anchor href="#">
                            <img src={Sair} alt="Sair" />
                            <span>Sair</span>
                        </Anchor>
                    </li>
                </Ul>
            </nav>
        </Aside>
    )
}