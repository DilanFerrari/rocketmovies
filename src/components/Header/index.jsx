import { Container, Search, Profile } from "./styles";

import { Input } from '../Input'

export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Search>
                <Input placeholder="Pesquisar pelo titulo" />
            </Search>
            <Profile to="/profile">
                <div>
                    <strong>Dilan Ferrari</strong>
                    <a>
                        sair
                    </a> 
                </div>
                <img 
                    src="https://github.com/DilanFerrari.png" 
                    alt="Foto do úsuario" />
            </Profile>
        </Container>
    )
}