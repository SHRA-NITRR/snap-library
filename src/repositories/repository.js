import {basePath} from '../basePath';
import 'isomorphic-fetch';

export const getImages = async (imgType) => {
    const endPoint = `${basePath}/${imgType}`;

    const response = await global.fetch(endPoint);
    const payload = await response.json();

    return payload;
};