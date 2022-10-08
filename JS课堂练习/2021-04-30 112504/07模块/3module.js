// 1.默认导出User类
export default class User {
	constructor(id) {
	  this.id= id;
	  this.password= '';
	}  
	changePassword(newPwd) {
		//模仿将当前id的用户密码改为新密码
		return this.password= newPwd;
	}
}