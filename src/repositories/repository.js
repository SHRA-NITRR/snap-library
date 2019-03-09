import {basePath} from '../basePath';
import 'isomorphic-fetch';

export const getImages = async (imgType) => {
    const endPoint = `${basePath}/${imgType}`;

    return global.fetch(endPoint)
        .then((response) => {
            return response.json();
        });
};