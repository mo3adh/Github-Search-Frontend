export default async function GetData(url: string) {
    try {
        const result = await fetch((url), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
        });

        const data = await result.json();
        return data;
    } catch (error) {
        throw error;
    }
};