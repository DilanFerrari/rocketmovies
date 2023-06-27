import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Conatiner, Form, Avatar } from "./styles";

import { Link } from 'react-router-dom';

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
    return (
        <Conatiner>
            <header>
                <Link to="/" href="/">
                    <ButtonText title="Voltar" icon={FiArrowLeft} />
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/DilanFerrari.png" 
                        alt="Foto do usuário" />
                        <label htmlFor="avatar">
                            <FiCamera />
                            <input 
                                type="file" 
                                id="avatar" />
                        </label>
                </Avatar>
                <Input 
                    placeholder="Nome" 
                    type="text" 
                    icon={FiUser} />
                <Input 
                    autocomplete="nope"
                    placeholder="E-mail" 
                    type="mail" 
                    icon={FiMail} />
                <Input 
                    placeholder="Senha atual" 
                    type="password" 
                    icon={FiLock} />
                <Input 
                    placeholder="Nova senha" 
                    type="password" 
                    icon={FiUser} />
                <Button title="Salvar" disabled/>
            </Form>
        </Conatiner>
    )
}