import { SessionLoginSchema, SessionRegisterSchema } from "../types";
import { ResourceInstance } from "./resource";

const sessionApi = new ResourceInstance({
    baseUrl: process.env.NEXT_PUBLIC_API_SESSION
})


const sessionResources = {
    postRegister (obj: SessionRegisterSchema) {
        return sessionApi.post({ url: "security/register", data: obj })
    },
    postLogin (obj: SessionLoginSchema) {
        return sessionApi.post({ url: "security/login", data: obj })
    },
    postLogout () {
        return sessionApi.post({ url: "security/logout" })
    },
    accessToken () {
        return sessionApi.post({ url: "security/access_token" })
    },
    refreshToken () {
        return sessionApi.post({ url: "security/refresh_token" })
    },
    getMe () {
        return sessionApi.get({ url: "users/me" })
    }
}
export default sessionResources