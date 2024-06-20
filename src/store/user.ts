import { defineStore } from 'pinia';
export const useUserStore = defineStore("user",{
    //定义状态
    state: () =>{
        return {
            userInfo:{
                name:'',
                is_admin:'',//0 为普通用户，1 为管理员
            },
            lang:'en'
        }
    },
    //定义计算属性
    getters:{
        getUserAdmin(state){
            return state.userInfo.is_admin;
        },
        getUserInfo(state){
            return state.userInfo;
        },
        getLang(state){
            return state.lang
        }
    },
    //定义提交函数
    actions:{
  
        updateLang(lang:string){
            this.lang=lang
        }
    }
})
