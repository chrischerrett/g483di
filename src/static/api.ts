import fetch from "cross-fetch";
import queryString from "query-string";

export async function api(method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE", path: string, params?: {}, data?: any) {
    return fetch(`http://gilmond-tfst3:44358/${path}${params ? "?" + queryString.stringify(params) : ""}`, {
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Tenant: "Test",
        },
        method,
    });
}
