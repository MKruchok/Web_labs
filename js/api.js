const BASE_URL = "http://localhost:5000/api";
const RESOURCE_URL = `${BASE_URL}/insects`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};


export const getAllInsects = async () => {
    const rawResponse = await baseRequest({ method: "GET" })
    return rawResponse.json();
};

export const postInsect = (body) => baseRequest({ method: "POST", body });

export const updateInsect = (id, body) => baseRequest({ urlPath: `/${id}`, method: "PATCH", body });

export const deleteInsect = (id) => baseRequest({ urlPath: `/${id}`, method: "DELETE" });