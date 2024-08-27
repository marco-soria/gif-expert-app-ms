//import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch';
import { getEnvironments } from './src/helpers/getEnvironments';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();


require('dotenv').config({
    path: '.env.test'
})

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments: () => ({...process.env})
}))