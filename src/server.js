import express from 'express'
import axios from 'axios'
import {uri} from './uri'
import * as config from '../config/default'

const server = express();
const httpService = axios.create({
    baseURL: config.resourceApi,
});

server.get('/', (req, res) => {
    try {
        httpService.get(uri[req.params.method]);
        res.send('Hello, World!!!')
    }
    catch (error) {
        console.error(error);
    }

});

server.listen(3000, () => console.log('API started!'));