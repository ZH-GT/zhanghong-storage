// 接口请求封装

export const request = (url, method, data, callback, contentype) => {
	let token = uni.getStorageSync('token') ? uni.getStorageSync('token') : '9d95cee9-b87a-47f0-8fc5-cba1ab26bd56';
	// 打印请求数据
	console.log('请求URL:', 'https://api.fanersaimeijia.com/' + url);
	console.log('请求方法:', method);
	console.log('请求数据:', data);
	console.log('请求头:', {
		'authorization': 'Bearer ' + token,
		'content-type': contentype ? contentype : 'application/json',
		token: token
	});
	
	uni.showLoading({
		mask: true,
		title: '加载中...'
	})
	uni.request({
		url: 'https://api.fanersaimeijia.com/' + url,
		data: data,
		method: method,
		header: {
			'authorization': 'Bearer ' + token,
			'content-type': contentype ? contentype : 'application/json',
			token: tokenyijia
		},
		success: (response) => {
			uni.hideLoading();
			const result = response.data;
			// 打印响应数据
			console.log('响应数据:', result);
			if (result.code == 401) { //token校验失败
				uni.showModal({
					title: '提示',
					content: '登录已过期，请重新登录',
					success: (res) => {
						if (res.confirm) {
							uni.removeStorageSync('token');
							setTimeout(() => {
								uni.reLaunch({
									url: '/pages/login/login'
								});
							}, 1500);
						}
					}
				});
				return;
			} else if (result.code == 500) { //接口错误
				uni.showToast({
					title: result.msg,
					icon: 'none'
				})
				return;
			} else { //1接口正常
				if (result.code != 1) {
					uni.showToast({
						title: result.msg,
						icon: 'none'
					})
					return;
				}
				if (result.code == 100) {
					uni.showToast({
						title: result.msg,
						icon: 'none'
					})
					return;
				}
				callback(result);
			}
		},
		complete: () => {
			uni.hideLoading();
		},
		fail: (error) => {
			uni.hideLoading()
			// 打印错误信息
			console.log('请求失败:', error);
		}
	})
}

// 上传文件封装
export const uploadFile = (url, filePath, name, formData, callback) => {
	let token = uni.getStorageSync('token') ? uni.getStorageSync('token') : '9d95cee9-b87a-47f0-8fc5-cba1ab26bd56';
	// 打印上传数据
	console.log('上传URL:', 'https://api.fanersaimeijia.com/' + url);
	console.log('上传文件路径:', filePath);
	console.log('上传文件名称:', name);
	console.log('上传表单数据:', formData);
	
	// 检查文件路径是否为空
	if (!filePath || filePath === '') {
		// 如果没有文件，使用普通的 request 请求
		uni.showLoading({
			mask: true,
			title: '提交中...'
		});
		uni.request({
			url: 'https://api.fanersaimeijia.com/' + url,
			method: 'POST',
			header: {
				'authorization': 'Bearer ' + token,
				'content-type': 'application/json',
				token: token
			},
			data: formData,
			success: (res) => {
				uni.hideLoading();
				const result = res.data;
				// 打印响应数据
				console.log('响应数据:', result);
				callback(result);
			},
			fail: (error) => {
				uni.hideLoading();
				// 打印错误信息
				console.log('请求失败:', error);
				uni.showToast({
					title: '网络错误，请稍后重试',
					icon: 'none'
				});
			}
		});
		return;
	}
	
	uni.showLoading({
		mask: true,
		title: '上传中...'
	});
	uni.uploadFile({
		url: 'https://api.fanersaimeijia.com/' + url,
		filePath: filePath,
		name: name,
		formData: formData,
		header: {
			"token": token
		},
		success: (res) => {
			uni.hideLoading();
			const result = JSON.parse(res.data);
			// 打印上传响应数据
			console.log('上传响应数据:', result);
			callback(result);
		},
		fail: (error) => {
			uni.hideLoading();
			// 打印上传错误信息
			console.log('上传失败:', error);
			uni.showToast({
				title: '网络错误，请稍后重试',
				icon: 'none'
			});
		}
	});
}

// 调用方法
// this.$api.request('', 'POST',{}, res => {
// 	if (res.code === 200) {

// 	} else {
// 		this.toast(res.message)
// 	}
// });