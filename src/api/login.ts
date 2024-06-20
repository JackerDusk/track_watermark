import request from "@/utils/request";

// 创建验证码
export const getCaptcha = (id?:string) => {
  if(id){
    return request({
      url:'/captcha/'+id,
      method: "GET",
    });
  }
  return request({
    url:'/captcha',
    method: "GET",
  });
};
//登录
export const login = (data: object) => {
  return request({
    url: "/login",
    method: "POST",
    data,
  });
};


