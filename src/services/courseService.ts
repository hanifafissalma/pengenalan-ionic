import axios from 'axios'
const API_URL = 'https://jsonplaceholder.typicode.com'

export const getCourses = async() => {
    const res = await axios.get(`${API_URL}/posts?_limit=6`)
    return res.data
}
