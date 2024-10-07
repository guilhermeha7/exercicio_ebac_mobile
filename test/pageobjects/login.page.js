import { $ } from '@wdio/globals'

class LoginPage {
    async clicarEmSignUp() {
        await $('android=new UiSelector().text("Sign up")').click()
    }
}

export default new LoginPage()