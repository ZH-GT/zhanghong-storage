// 反馈数据结构
export const feedbackData = {
	data: {
		user_id: '', // 用户id，空着就行
		content: '', // 内容
		image: '', // 图片
		mobile: '', // 手机号，空着就行
		status: 1, // 1处理中，2已处理，3已驳回
		remark: null, // 后台处理说明
		create_time: new Date().toISOString(), // 创建时间
		remark_time: null, // 处理时间
		new_image: '', // 图片
		status_text: ''
	}
}