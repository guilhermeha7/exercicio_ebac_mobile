import { $ } from '@wdio/globals'

class CadastroPage {
    async cadastrarUsuario(primeiroNome, segundoNome, numeroTelefone, email, senha) {
        await $('android=new UiSelector().resourceId("firstName")').setValue(primeiroNome)
        await $('android=new UiSelector().resourceId("lastName")').setValue(segundoNome) 
        await $('android=new UiSelector().resourceId("phone")').setValue(numeroTelefone)
        await $('android=new UiSelector().resourceId("email")').setValue(email)
        await $('android=new UiSelector().resourceId("password")').setValue(senha)
        await $('android=new UiSelector().resourceId("repassword")').setValue(senha)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("create"))')
        await $('android=new UiSelector().resourceId("create")').click()
    }
}

export default new CadastroPage()