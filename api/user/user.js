import http from '../http.js'

const API = {
	CAPTCHA: "/captcha.jpg",
	LOGIN: "/app/login"
}

export function loginApi(userForm) {
	return http.POST(API.LOGIN, userForm)
} 

export async function getCaptchaApi(uuid) {
	return http.GET(API.CAPTCHA, {uuid: uuid})
}