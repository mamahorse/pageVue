import { PUBLIC_KEY, isDev, GATE_WAY_URL } from '@/config';
import { JSEncrypt } from 'jsencrypt';
import { encode, decode } from 'base64-ts';
export function isMobile(): boolean {
    const ua = navigator.userAgent.toLowerCase();
    const agents = ['iphone', 'ipad', 'ipod', 'android', 'linux', 'windows phone']; // 所有可能是移动端设备的字段
    return agents.some((item) => ua.indexOf(item) !== -1);
}

/**
 * 加密算法，拥有一些敏感的信息进行传输
 * @param text 
 * @returns 
 */
export function addSecret(text: string): string | boolean {
    const encrypt = new JSEncrypt({});
    encrypt.setPublicKey(PUBLIC_KEY)
    return encrypt.encrypt(text);
}

/**
 * base decode密码加密
 * @param text 
 * @returns 
 */
export function decodeBase64(text: string): Uint8Array {
    return decode(text);
}
/**
 * 实现base64的解密
 * @param text 
 * @returns 
 */
export function encodeBase64(text: Uint8Array): string {
    return encode(text);
}

// 获取gateWay地址
export function gateWayUrl(){
    if(isDev){
        return GATE_WAY_URL.devGateWay;
    }else{
        return GATE_WAY_URL.prodGateWay;
    }
}