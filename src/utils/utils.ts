export function getToken(): string | null {
    if (localStorage.getItem("access_token")) {
        return localStorage.getItem("access_token");
    } else {
        return "";
    }
}