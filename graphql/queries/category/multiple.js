import {
    GraphQLList
} from 'graphql';

import {categoryType} from "../../types/category";
import CategoryModel from '../../../models/category';

export default {
    type : new GraphQLList(categoryType),
    resolve(){
        const categories = CategoryModel.find().exec();
        if( !categories ){
            throw new Error('Error while fetching categories...');
        }
        return categories;
    }
}