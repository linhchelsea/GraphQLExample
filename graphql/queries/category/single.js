import { 
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import { categoryType } from "../../types/category";
import CategoryModel from '../../../models/category';

export default {
    type : categoryType,
    args : {
        id : {
            name : 'ID',
            type : new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params){
        return CategoryModel.findById(params.id).exec();
    }
}