import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form, Section, ButtonsSection, ButtonBack } from "./styles";

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'


export function New() {
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <ButtonBack to="/">
                            <ButtonText title="Voltar" icon={FiArrowLeft} />
                        </ButtonBack>
                        <h2>Novo Filme</h2>
                    </header>
                    <div className="body-form">
                        <div className="title-note">
                            <Input 
                                placeholder="Título"
                            />
                             <Input 
                                placeholder="Sua nota (de 0 a 5)"
                            />
                        </div>
                        <Textarea placeholder="Observações" />
                        <Section>
                            <h2>Marcadores</h2>
                            <div className="tags">
                                <NoteItem value="React" />
                                <NoteItem isNew placeholder="Novo marcador" />
                            </div>
                        </Section>
                        <ButtonsSection>
                            <Button title="Excluir filme" />
                            <Button title="Salvar alterações" />
                        </ButtonsSection>
                    </div>
                </Form>
            </main>
        </Container>
    )
}