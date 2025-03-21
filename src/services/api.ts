import axios from 'axios'

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_VERSION}`,
    headers: {
        'x-api-authorization': `Basic ${process.env.NEXT_PUBLIC_API_AUTHORIZATION}`,
        'Content-Type': 'application/json'
    }
})

export default api
