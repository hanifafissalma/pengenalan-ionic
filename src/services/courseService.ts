import axios from 'axios'

export const getCourses = async() => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    return res.data
}
