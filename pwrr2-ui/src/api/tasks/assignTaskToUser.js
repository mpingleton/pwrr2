import Cookies from 'universal-cookie';

export default async (taskId, userId) => {
    const cookies = new Cookies();

    const res = await fetch('/api/tasks/id/' + taskId + '/assign/user/' + userId, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.get('accessToken')}`
        },
    }).then((data) => data.json());

    return res;
};