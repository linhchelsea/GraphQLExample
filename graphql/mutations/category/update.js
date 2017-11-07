import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import { categoryType, categoryInputType} from "../../types/category";
import CategoryModel from '../../../models/category';

export default {
    type : categoryType,
    args : {
        id : {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data : {
            name : 'data',
            type: new GraphQLNonNull(categoryInputType)
        }
    },
    resolve(root, params){
        return CategoryModel.findByIdAndUpdate(params.id, { $set: {...params.data}})
            .then(data => CategoryModel.findById(params.id).exec())
            .catch(err => new Error('Error while updating category',err));
    }
}