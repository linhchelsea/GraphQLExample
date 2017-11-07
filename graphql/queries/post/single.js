import{
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import PostModel from '../../../models/post';
import { postType} from "../../types/post";

export default {
    type : postType,
    args : {
        id : {
            name : 'ID',
            type : new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params){
        const post = PostModel.findById(params.id).exec();
        if( !post ){
            throw new Error('Error while fetching post...');
        }
        return post;
    }
}