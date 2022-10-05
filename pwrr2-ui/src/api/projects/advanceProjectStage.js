import Cookies from 'universal-cookie';

export default async (projectId) => {
    const cookies = new Cookies();

    const res = await fetch('/api/projects/id/' + projectId + '/advancestage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.get('accessToken')}`
        },
    }).then((data) => data.json());

    return res;
};