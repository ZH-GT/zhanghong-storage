// 问卷公共数据仓库
export const surveyData = {
	data: {
		id: 0, // 问卷id
		title: '美睫调查问卷', // 问卷标题
		classification_id: 1, // 所属类型
		question_id: '', // 包含题目id
		status: 1, // 1使用，2弃用
		create_time: new Date().toISOString(), // 创建时间
		update_time: new Date().toISOString() // 更新时间
	},
	questions: [
		// 第一页问卷
		{
			id: 1,
			type: 1, // 1单选
			title: '问题1',
			options: '',
			new_options: [],
			status_text: ''
		},
		{
			id: 2,
			type: 1, // 1单选
			title: '问题2',
			options: '',
			new_options: [],
			status_text: ''
		},
		{
			id: 3,
			type: 1, // 1单选
			title: '问题3',
			options: '',
			new_options: [],
			status_text: ''
		},
		{
			id: 4,
			type: 1, // 1单选
			title: '问题4',
			options: '',
			new_options: [],
			status_text: ''
		},
		{
			id: 5,
			type: 1, // 1单选
			title: '问题5',
			options: '',
			new_options: [],
			status_text: ''
		},
		// 第二页睫毛款式
		{
			id: 6,
			type: 2, // 2多选
			title: '睫毛卷度',
			options: '',
			new_options: [],
			status_text: ''
		},
		{
			id: 7,
			type: 4, // 4数字
			title: '睫毛长度',
			options: '',
			new_options: [],
			status_text: ''
		},
		{
			id: 8,
			type: 4, // 4数字
			title: '下睫毛长度',
			options: '',
			new_options: [],
			status_text: ''
		},
		// 第三页基本资料
		{
			id: 9,
			type: 3, // 3填空
			title: '姓名',
			options: '',
			new_options: [],
			status_text: ''
		},
		{
			id: 10,
			type: 4, // 4数字
			title: '电话',
			options: '',
			new_options: [],
			status_text: ''
		},
		{
			id: 11,
			type: 1, // 1单选
			title: '来店途径',
			options: '',
			new_options: [],
			status_text: ''
		}
	],
	// 存储用户答案
	answers: {
		q1: 0,
		q2: 0,
		q3: 0,
		q4: 0,
		q5: 0,
		q6: '', // 睫毛卷度 J/B/C...
		q7: 0, // 睫毛长度 8-20
		q8: 0, // 下睫毛长度 6-9
		q9: '', // 姓名
		q10: '', // 电话
		q11: 0 // 来店途径
	}
}