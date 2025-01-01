import axios from 'axios'
const singleUseUrl = import.meta.env.VITE_SINGLE_USE_URL;

const singleUseInstance = axios.create({
    baseURL: singleUseUrl
})

export default singleUseInstance