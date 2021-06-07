const API_ENDPOINT = 'https://60bbb2ff42e1d00017620ff6.mockapi.io/';

export const submitForm = (payload) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(payload),
    };

    return fetch(API_ENDPOINT + "user", requestOptions)
        .then((response) => response.json())
        .catch(error => console.log('error', error));
};
