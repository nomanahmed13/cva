import api from '../config/axiosConfig';

export const getDashboardData = async (data) => {
    const response = await api.post('/SuperAdmin/dashboard',data);
    return response.data;
};
