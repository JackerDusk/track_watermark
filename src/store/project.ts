import { defineStore } from 'pinia';

export const useProjectStore = defineStore("project",{
    //定义状态
    state: () =>{
        return {
          selectedProject:'',
          projectLists:[],
          selectedProjectId:localStorage.getItem('projectId') ? localStorage.getItem('projectId') : undefined,
          tableLoading:false
        }
    },
    //定义计算属性
    getters:{
      
    },
    //定义提交函数
    actions:{
       updateSelected(project:string){
        this.selectedProject=project
       },
       updateProjectList(projects:any){
        this.projectLists=projects
       },
       updateProjectId(id:any){
        this.selectedProjectId=id
        localStorage.setItem('projectId',id)
       },
       updateTableLoad(flag:boolean){
         this.tableLoading=flag
       }
    }
})
