import axios from 'axios';
import config from '../config/config.json'

export async function apiGet(apiEndPoint, options = {}){
    const response = await axios.get(`${config.base_url}${apiEndPoint}`).catch(error => {
        console.log(error);
        if (error.code === 'ERR_NETWORK') {
            return { status: 400, message: "Network Error. Check internet connection." }
        } else if (error.code === 'ERR_BAD_REQUEST') {
            if (typeof(error.response.data.message) !== 'undefined')
                return { status: 400, message: error.response.data.message.toString() }
            else
                return { status: 400, message: "Unauthorized access or bad request." }
        } else
            return { status: 400, message: "Unable to connect server" }
    });

    if (response) {
        return response;
    }
    else {
        return { status: 400, message: "Ooops... No response. Try again!" };
    }
}