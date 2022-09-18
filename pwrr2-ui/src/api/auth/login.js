import Cookies from 'universal-cookie';

export default async (username, passphrase) => {
    const cookies = new Cookies();
    
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            passphrase: passphrase,
        }),
    }).then((data) => data.json());
    cookies.set('accessToken', res.accessToken, { path: '/' });

    return res;
};