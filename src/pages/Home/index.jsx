import { FiPlus } from 'react-icons/fi'

import { Container, TitleAdd, AllFilms, AddMovie } from "./styles";

import { Header } from '../../components/Header'
import { Films } from '../../components/Films'

export function Home() {
    return (
        <Container>
            <Header />
            <main>
                <TitleAdd>
                    <h2>Meus filmes</h2>
                    <AddMovie to="/new">
                        <FiPlus />
                        Adicionar filme
                    </AddMovie>
                </TitleAdd>
                <AllFilms>
                    <Films data={{
                        title: "Interestellar",
                        tags: [
                            {id: '1', name:'Ficção Científica'},
                            {id: '2', name:'Drama'},
                            {id: '3', name:'Famiilia'}
                        ]
                    }}/>   
                    <Films data={{
                        title: "Interestellar",
                        tags: [
                            {id: '1', name:'Ficção Científica'},
                            {id: '2', name:'Drama'},
                            {id: '3', name:'Famiilia'}
                        ]
                    }}/>
                    <Films data={{
                        title: "Interestellar",
                        tags: [
                            {id: '1', name:'Ficção Científica'},
                            {id: '2', name:'Drama'},
                            {id: '3', name:'Famiilia'}
                        ]
                    }}/>
                    <Films data={{
                        title: "Interestellar",
                        tags: [
                            {id: '1', name:'Ficção Científica'},
                            {id: '2', name:'Drama'},
                            {id: '3', name:'Famiilia'}
                        ]
                    }}/>
                    <Films data={{
                        title: "Interestellar",
                        tags: [
                            {id: '1', name:'Ficção Científica'},
                            {id: '2', name:'Drama'},
                            {id: '3', name:'Famiilia'}
                        ]
                    }}/>
                    <Films data={{
                        title: "Interestellar",
                        tags: [
                            {id: '1', name:'Ficção Científica'},
                            {id: '2', name:'Drama'},
                            {id: '3', name:'Famiilia'}
                        ]
                    }}/>    
                </AllFilms>
            </main>
        </Container>
    )
}