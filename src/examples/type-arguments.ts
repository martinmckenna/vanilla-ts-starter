import Axios, { AxiosResponse } from 'axios';

const requestPI = <T>(): Promise<AxiosResponse<T>> => {
  return Axios.get('https://someapi/v4')
    .then((r) => r)
    .catch(Promise.reject);
};

interface Profile {
  username: string;
  userId: number;
  lastLogin: string;
}

export const getProfile = () =>
  requestPI<Profile>().then((r) => r.data.username);
