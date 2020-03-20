import * as config from '../config/default'

export const uri = {
    'getCountries': '/countries',
};

export const getUri = (method) => config.resourceApi + uri[method];