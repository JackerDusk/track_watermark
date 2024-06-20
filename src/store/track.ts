import { defineStore } from 'pinia';

interface State {
    user: UserInfo | null
    video: VideoInfo | null
    lang: LanguageInfo | null
}

interface UserInfo {
    name: string
    phone: string
    email: string
    type: string
    credit: int
    token: string
}

interface VideoInfo {
    name: string | null
    uploadOSSURL: string | null
    downloadOSSURL: string | null
}

interface UploadInfo {
    fileName: string
    isUpload: boolean
    isInpainted: boolean
    uploadOSSURL: string | null
}

interface dowloadInfo {
    fileName: string
    needCredit: boolean
    downloadOSSURL: string
}

interface LanguageInfo {
    lng: string
}


export const useTrackStore = defineStore("track", {
    //定义状态
    state: () =>{
        return {
            user:{
                name:'',
                phone:'',
                email:'',
                type:'',
                credit: 0,
                token:''
            },
            lang:{
                lng:'en'
            },
            video: {
                name:'',
                uploadOSSURL: null,
                downloadOSSURL: null
            },
            uploadInfo: {
                fineName:'',
                isUpload: false,
                isInpainted: false,
                uploadOSSURL: null
            }
        }
    },
    //定义计算属性
    getters:{
        getUserInfo(state){
            return state.userInfo;
        },
        getLang(state){
            return state.lang.lng
        },
        getUploadInfo(state) {
            return state.uploadInfo
        }
    },
    //定义提交函数
    actions:{
        updateLang(lang:string){
            this.lang=lang
        },
        updateVideoUpload(video: VideoInfo) {
            this.video.uploadOSSURL = video.uploadOSSURL
        },
        updateDownload(video: VideoInfo) {
            this.video.downloadOSSURL = video.downloadOSSURL
        },
        updateUploadInfo(uploadInfo: UploadInfo) {
            this.uploadInfo.isUpload = uploadInfo.isUpload
        },
        updateInpainted(uploadInfo: UploadInfo) {
            this.uploadInfo.isInpainted = uploadInfo.isInpainted
        }
    }
})
