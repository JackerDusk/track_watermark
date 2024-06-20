import dayjs from 'dayjs';
export const timeToDate=(time:string|number)=>{
    if(time.toString().length===10){
        time=time*1000
    }
    return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}

export const toDay=(time:string|number)=>{
    if(time.toString().length===10){
        time=time*1000
    }
    return dayjs(time).format('YYYY-MM-DD')
}
export const toTime=(time:string|number)=>{
    if(time.toString().length===10){
        time=time*1000
    }
    return dayjs(time).format('HH:mm:ss')
}