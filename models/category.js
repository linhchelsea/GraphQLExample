import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
}, { collection : 'category', timestamps : true});

export default mongoose.model('categogy', categorySchema);