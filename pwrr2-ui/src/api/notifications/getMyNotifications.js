import Cookies from 'universal-cookie';

export default async (organizationId) => {
    const cookies = new Cookies();

    const res = await fetch('/api/notifications/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.get('accessToken')}`
        },
    }).then((data) => data.json());

    return res;
};