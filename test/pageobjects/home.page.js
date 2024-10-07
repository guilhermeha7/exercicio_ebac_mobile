import { $ } from '@wdio/globals'

class HomePage {
    async abrirAba(aba) {
        await $(`android=new UiSelector().resourceId("${aba}")`).click()
        
    }
}

export default new HomePage()