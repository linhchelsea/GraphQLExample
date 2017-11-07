import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
} from 'graphql';

export const postType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post api',
    fields: () => ({
        _id : {
            type : new GraphQLNonNull(GraphQLID)
        },
        uid : {
            type : GraphQLString
        },
        cid : {
            type : GraphQLString
        },
        title : {
            type : GraphQLString
        },
        body : {
            type : GraphQLString
        }
    })
});

export const postInputType = new GraphQLInputObjectType({
    name : 'PostInput',
    description : 'Insert Post',
    fields : () => ({
        uid : {
            type : GraphQLString
        },
        cid: {
          type : GraphQLString
        },
        title : {
            type: GraphQLString
        },
        body : {
            type: GraphQLString
        }
    })
});