import userQuery from './user';
import categoryQuery from './category';
import postQuery from './post';

export default {
    ...userQuery,
    ...categoryQuery,
    ...postQuery
};