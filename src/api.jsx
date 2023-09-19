import axios from "axios";

axios.defaults.baseURL =  'https://pixabay.com/api/?q=cat&page=1&key=39516513-b2de4558649c1d6b4380e040e&image_type=photo&orientation=horizontal&per_page=12';

export const addPhoto = async (values) => {
    const response = await axios.post('/api', values);
    return response.data;
}