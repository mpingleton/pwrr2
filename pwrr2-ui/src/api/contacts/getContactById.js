import Cookies from 'universal-cookie';

export default async (contactId) => {
    const cookies = new Cookies();

    const res = await fetch('/api/contacts/id/' + contactId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.get('accessToken')}`
        },
    }).then((data) => data.json());

    return res;
};