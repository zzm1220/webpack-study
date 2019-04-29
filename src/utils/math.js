import _ from 'lodash';

export const add = (a, b) => {
    return _.join([a,b],"*");
};

export const minus = (a, b) => {
    return a - b;
}