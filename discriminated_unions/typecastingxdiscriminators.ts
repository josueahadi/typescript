type Success = {
    status: 'success';
    data: unknown;
}

type Failure = {
    status: 'failure';
    error: string;
}

type APIResponse = Success | Failure; 

function handleResponse(response: APIResponse) {
    if (response.status === 'success') {
        console.log(response.data);
    } else {
        console.log(response.error)
    }
}

const successResponse: APIResponse = {
    status: 'success',
    data: 'Some data'
}

const failureResponse: APIResponse = {
    status: 'failure',
    error: 'An error occured'
}

handleResponse(successResponse) 
handleResponse(failureResponse)