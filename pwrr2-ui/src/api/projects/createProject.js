import Cookies from 'universal-cookie';

export default async (data) => {
    const cookies = new Cookies();

    const res = await fetch('/api/projects', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.get('accessToken')}`
        },
        body: JSON.stringify(data),
    }).then((dat) => data.json());

    return res;
};