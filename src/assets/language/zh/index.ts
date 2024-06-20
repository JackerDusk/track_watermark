// import ExpList from './expList'
import Login from './login'
import Globle from './globle'
import Project from './project'
import Layers from './layers'
import Experiments from './experiments'
import Events from './events';
import Metrics from './metrics';
const zhLanguage:any={}
const addLanguage=(language:any)=>{
    Object.keys(language).forEach((item:string)=>{
        zhLanguage[`${item}`]=language[`${item}`]
    })
}

addLanguage(Login)
addLanguage(Globle)
addLanguage(Project)
addLanguage(Layers)
addLanguage(Experiments)
addLanguage(Events)
addLanguage(Metrics)
export default zhLanguage