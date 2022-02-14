export const DEBUG_CONSOLE = true;         // 是否开启调试模式，用于手机端
export const MICRO_URL = "";               // 微应用地址，暂时未开启，后期开启
export const isDev = true;                 // 是否是开发模式 
export const GATE_WAY_URL={                // 请求后端接口，dev和prod分别代表测试和正式
    "devGateWay":"http://159.75.86.8:8888/gateway",
    "prodGateWay":"http://159.75.86.8:8888/gateway"
}
// 加密算法公私，用于用户敏感信息加密
export const PUBLIC_KEY = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMLa/SIXZJA4mAHQIWKnF8+tUTWVwqiBBst92spVCipN9qfGO0eZO97rnxvtjBaJYeMfZAYh+Eq7ROkll1Qz7f2RY1WJSdIJDl8Yd6S25S4v4jxp8XCe/gf3S50FN8ljHjs9en/NSe7KfifCNIXcq1kf+uObpdR6c2wpxmH2D3AwIDAQAB`;

