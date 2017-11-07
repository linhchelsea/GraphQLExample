import {
    GraphQLList
} from 'graphql';

import {postType} from "../../types/post";
import PostModel from '../../../models/post';

export default {
    type : new GraphQLList(postType),
    resolve(root, params){
        const posts = PostModel.find().exec();
        if(! posts ){
            throw new Error('Error while fetching list of post');
        }
        return posts;
    }
}