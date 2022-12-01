import { request } from "./api";

export function postmymsg(data){
    return request({
        url:'user/changeinfo',
        method:'post',
        data:data
    })
}

export function getmymsg(){
    return request({
        url:'user/findById',
        method:'get'
    })
}

export function photoI(){
    return request({
        url:'user/changeAvatar',
        // method:'get'
    })
}