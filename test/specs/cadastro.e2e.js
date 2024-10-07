import { expect } from '@wdio/globals'
import  HomePage from '../pageobjects/home.page.js'
import  LoginPage from '../pageobjects/login.page.js'
import  CadastroPage from '../pageobjects/cadastro.page.js'
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro de Usuário',  () => {
    it('Deve cadastrar usuário com sucesso', async () => {
        /*O teste está falhando pois tem um bug no aplicativo da Ebac Shop. 
        O cadastro é feito com sucesso e então o usuário é redirecionado para a HomePage, porém nela o menu de navegação some, o que faz com que o teste falhe.*/
        
        const email = faker.internet.email()
        
        await HomePage.abrirAba('tab-profile')
        await LoginPage.clicarEmSignUp()
        await CadastroPage.cadastrarUsuario('Thomas','Almeida',11912345678,email,'teste123')
        await HomePage.abrirAba('tab-profile')
        expect(await $(`android=new UiSelector().text("${email}")`)).toBeDisplayed()
    });
});