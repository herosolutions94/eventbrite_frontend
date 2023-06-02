import axios from 'axios';

const countries = async (): Promise<any[]> => {
  try {
    const { data } = await axios.get<any[]>(
        process.env.API_URL + '/countries'
    );
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw new Error('Failed to fetch countries');
  }
};

export { countries as default };