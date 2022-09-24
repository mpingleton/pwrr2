import Cookies from 'universal-cookie';

export default async (data) => {
    const cookies = new Cookies();

    const res = await fetch('/api/contacts', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.get('accessToken')}`
        },
        body: JSON.stringify(data),
    }).then((data) => data.json());

    return res;
};