import Cookies from 'universal-cookie';

export default async (groupId) => {
    const cookies = new Cookies();

    const res = await fetch('/api/projects/in/group/' + groupId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.get('accessToken')}`
        },
    }).then((data) => data.json());

    return res;
};