import lodash from 'lodash';

export const getAvaregePrice = (data) =>
    lodash.round(data.reduce((acc, { price }) => (acc + price), 0) / data.length);