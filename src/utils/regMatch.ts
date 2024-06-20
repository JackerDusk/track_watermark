// export function emailRule(rule:any, value:any, callback:Function) {
// 	if (!rule.required && !value) {
// 			return callback();
// 	}
// 	if (!value) {
// 			return callback(new Error('请输入电子邮箱'))
// 	} else {
// 			const reg =  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
// 			if (reg.test(value)) {
// 					callback()
// 			} else {
// 					return callback(new Error('请输入正确的电子邮箱'))
// 			}
// 	}
// }
// export function passwordRule(rule:any, value:any, callback:Function) {
// 	if (!rule.required && !value) {
// 			return callback();
// 	}
// 	if (!value) {
// 			return callback(new Error('请输入密码'))
// 	} else {

// 			const reg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\\W_!@#$%^&*`~()-+=]+$)(?![0-9\\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\\W_!@#$%^&*`~()-+=]{8,30}$/
			
// 			if (reg.test(value)) {
// 					callback()
// 			} else {
// 					return callback(new Error('请输入正确的密码'))
// 			}
// 	}
// }
