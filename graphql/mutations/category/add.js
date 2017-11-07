import {
    GraphQLNonNull
} from 'graphql';

import { categoryType, categoryInputType} from "../../types/category";
import CategoryModel from '../../../models/category';

export default {
    type: categoryType,
    args : {
        data : {
            name: 'data',
            type: new GraphQLNonNull(categoryInputType)
        }
    },
    resolve(root, params){
        const mCat = new CategoryModel(params.data);
        const category = mCat.save();

        if( !category ){
            throw new Error('Error adding new category...');
        }
        return category;
    }
}