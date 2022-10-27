import Cookies from 'universal-cookie';

export default async (groupId) => {
    const cookies = new Cookies();

    const res = await fetch('/api/tasks/in/group/' + groupId + '/active', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.get('accessToken')}`
        },
    }).then((data) => data.json());

    return res;
};