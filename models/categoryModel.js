const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    title:{
        type:String,
        require:[true,'title is required']
    },
    imageUrl:{
        type:String,
        default:"https://t3.ftcdn.net/jpg/08/29/90/88/360_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg"
    }
})

module.exports=mongoose.model('Category',categorySchema);