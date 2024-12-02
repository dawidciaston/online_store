const get = async (url, options) => {
    const response = await fetch(url, {
        headers: {
            Accept: 'application/json',
            ...options.headers
        }
    });

    if (!response.ok) {
        throw new Error('Response not successful');
    }

    return (await response.json());
};

const post = async (url, options, body)=> {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...options.headers
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const jsonResponse = await response.json();
        const error = jsonResponse.error;

        throw new Error(error);
    }

    return response.json();
};

const put = async (url, options, body) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...options.headers
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error('Response not successful');
    }

    return response.json();
};

export const httpClient = {
    get,
    post,
    put
};
