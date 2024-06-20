import { defineStore } from "pinia";
export const useRouteStore = defineStore("route", {
  //定义状态
  state: () => {
    return {
      selectedMenu: true
    };
  },
  //定义提交函数
  actions: {
    updateRouteName(e: any = {}) {
        this.selectedMenu = ! this.selectedMenu
  
    },
  },
});
