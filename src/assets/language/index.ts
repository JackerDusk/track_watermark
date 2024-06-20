import { createI18n } from "vue-i18n"
 
import zh from './zh/index'
 import en from './en/index'
// 默认语言 - 
const i18n = createI18n({
    locale: 'en',
    globalInjection: true,
    messages:{
        zh,en
    }
   
})
 
export default i18n
