import {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';

import { postType } from "./post";
import PostModel from '../../models/post';
export const categoryType = new GraphQLObjectType({
    name : 'Category',
    description : 'List Categories',
    fields : () => ({
        _id : {
            type : new GraphQLNonNull(GraphQLID)
        },
        name : {
            type : GraphQLString 
        },
        description : {
            type : GraphQLString
        },
        posts : {
            type : new GraphQLList(postType),
            resolve(category){
                const posts = PostModel.find({ cid : category._id}).exec();
                if( !posts ){
                    throw new Error('Error while fetching list of posts');
                }
                return posts;
            }
        }
    })
});

export const categoryInputType = new GraphQLInputObjectType({
    name : 'CategoryInput',
    description : 'Insert Category',
    fields : () => ({
        name : {
            type : GraphQLString
        },
        description : {
            type : GraphQLString
        }
    })
});