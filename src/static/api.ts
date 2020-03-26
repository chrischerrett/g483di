import fetch from "cross-fetch";
import queryString from "query-string";

export async function api(method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE", path: string, params?: {}, data?: any) {
    return fetch(`https://myt3.gilmond.com:44305/SHP_Prototype/${path}${params ? "?" + queryString.stringify(params) : ""}`, {
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Tenant: "Test",
        },
        method,
    });
}
