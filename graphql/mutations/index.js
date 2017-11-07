import userMutation from './user';
import postMutation from './post';
import categoryMutation from './category';

export default {
    ...userMutation,
    ...postMutation,
    ...categoryMutation
};