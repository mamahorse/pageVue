/*eslint-disable */
import CommonService from "@/services/CommonService"

export const CommonModel = {
    namespaced: true,
    state: {
        
    },
    actions: {    // action 为需要执行的操作 _ 代表忽略这个参数的使用
        async loginRequest(_context: any, payload: any) {
            const res: any = await CommonService.loginRequest(payload);
            if (res) {
                const { token, ...otherData } = res;
                localStorage.setItem("access_token", token);
                const userInfo = JSON.stringify(otherData);
                localStorage.setItem("userInfo", userInfo);
                return true;
            } else {
                return false;
            }
        }
    },
    mutations: {
        // 用于更新state

    }
}