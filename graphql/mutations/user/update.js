import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {userInputType, userType} from "../../types/user";
import userModel from '../../../models/user';

export default {
    type : userType,
    args : {
        id : {
            name: 'ID',
            type : new GraphQLNonNull(GraphQLID)
        },
        data : {
            name : 'data',
            type : new GraphQLNonNull(userInputType)
        }
    },
    resolve(root, params){
        return userModel.findByIdAndUpdate(params.id,{ $set: {...params.data } })
            .then(data => userModel.findById(data.id).exec())
            .catch(err => new Error('Couldn\'t update user data', err));
    }
}