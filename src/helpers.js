import { ENVIRONMENT } from './constants.js';

const isLocalDevelopment = () => {
    try {
        if (typeof window === 'undefined') {
            return ENVIRONMENT !== 'staging' && ENVIRONMENT !== 'production';
        }
        const { hostname } = window.location;
        return hostname === 'localhost' || new RegExp('([a-z-0-9]{2,63}).([a-z.]{2,5})$').exec(hostname) === null;
    } catch (error) {
        return false;
    }
};

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

const clone = (object) => JSON.parse(JSON.stringify(object));

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


export {
    isValidEmail,
    isLocalDevelopment,
    clone,
    sleep
};