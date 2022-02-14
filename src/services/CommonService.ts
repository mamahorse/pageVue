/*eslint-disable */
import RequestBase from "@/utils/request";
export default class CommonService {
    static LoginUrl = "/oauth/user/login";

    static async loginRequest(payload: any) {
        return await RequestBase.post(CommonService.LoginUrl, payload)
    }
}