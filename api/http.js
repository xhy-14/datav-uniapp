const http = {
	baseUrl: "http://112.124.59.107:8080/renren-fast/",

	request(config) {
		beforeRequest(config)
		config.url = this.baseUrl + config.url
		return new Promise((resolve, reject) => {
			uni.request(config)
				.then(res => {
					const response = beforeResponse(res)
					resolve(res)
				})
				.catch(err => {
					errorHandle()
					reject(err)
				})
		})
	},

	GET(url, params) {
		return this.request({
			url: url,
			data: params,
			methods: 'GET'
		})
	},

	POST(url, data) {
		return this.request({
			url: url,
			data: data,
			methods: 'POST'
		})
	}
}

// 请求拦截
const beforeRequest = (config) => {
	return config
}

// 响应拦截
const beforeResponse = (res) => {
	return res.data
}

const errorHandle = () => {
	console.log("异常")
}
export default http