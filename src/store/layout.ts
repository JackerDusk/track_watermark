import { defineStore } from 'pinia';

export const useLayoutStore = defineStore("layout",{
    //定义状态
    state: () =>{
        return {
            collapsed:false,//左边菜单栏是否展开数据
        }
    },
    //定义计算属性
    getters:{
        getCollapsed(state){
            return state.collapsed;
        }
    },
    //定义提交函数
    actions:{
        updateCollapsed(){
            this.collapsed = !this.collapsed;
        }
    }
})
