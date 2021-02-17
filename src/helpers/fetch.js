export const fetchData = async (data) => {
    const baseURL = 'https://systec-puzzle.herokuapp.com/lightbeam';
    const req = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    return await req.json();
}