import axios from 'axios';

const states = async (country_id: any): Promise<any[]> => {
    try {
        const { data } = await axios.get<any[]>(
            process.env.API_URL + '/states/' + parseInt(country_id)
        );
        return data;
    } catch (error) {
        console.error('Error fetching states:', error);
        throw new Error('Failed to fetch states');
    }
};

export { states as default };