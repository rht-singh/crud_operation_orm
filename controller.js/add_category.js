
const { category, sequelize } = require('../models');

class addCategory{

    async add_category(req,res){

        try{

            let { category_name , category_type  }= req.body;

            let find = await category.findAll({
                raw:true,
                attributes:[[sequelize.fn('max',sequelize.col('appearance_order')),'appearance_order']]
            });
          
            let appearance_order = find[0].appearance_order+1;
            console.log(5787877 + " " +appearance_order)
            let make = await category.create({
                category_name , category_type , appearance_order
            })
           
            await res.json({
                status:'success',
                CretedCategory:make
            })
        }
        catch(err){
            console.log(err);
            await res.json({
                status:"fail",
                Error:err
            })
        }

       

    }

    async delete_category(req,res){
        try{

            let {category_id} = req.query;

            let find = await category.findOne({
                where:{
                    category_id
                }
            })
            let del = await category.destroy({
                where:{
                    category_id
                }
            });
            await res.json({
                status:"success",
                Data:find
            })

        }
        catch(err){
            console.log(err);
            await res.json({
                status:"fail",
                Error :err
                
            })
        }

            
    }

    async update_category(req,res){

        try{

            let {
                category_id ,category_name,category_type
            } = req.body;

            let find = await category.findOne({
                where:{
                    category_id
                }
            })

            find.category_name = category_name;
            find.category_type = category_type;
            find.save();
            await res.json({
                status:"success",
                UpdatedData : find
            })



        }
        catch(err){
            console.log(err)
            await res.json({
                status:"fail",
                Error:err
            })
        }

    }

}

module.exports= new addCategory();
