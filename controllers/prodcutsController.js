const productModel = require('../models/productModel.js');

const getAllProducts = async (req,res)=> {
    const {
        sort = 'price', 
        page = 1, 
        pageSize = 3,
        fields = '-images', 
        ...q} =  req.query;
    const sortStr = sort.split(',').join(' ');
    const fieldStr = fields.split(',').join(' ');

    let query = productModel.find(q);
        query = query.sort(sortStr);

    const skip = pageSize * (page - 1);

    query  = query.skip(skip).limit(pageSize);

    query = query.select(fieldStr);
    const totalResults =  await productModel.countDocuments();

    const data =  await query;
    res.json({
        status: 'success',
        totalResults,
        // totalResults: totalResults,
        pageSize,
        // pageSize: pageSize,
        page,
        // page: page,
        result : data.length,
        data : {
            products : data,
        }
    })
};

const addProduct = async(req,res)=>{
    try{
        const {_id, ...mydata} = req.body;
        const data = await productModel.create(mydata);
        res.json({
            status: 'success',
            result : 1,
            data : {
                products : data,
            }
        });
    }
    catch(err){
        res.json({
            status: 'false',
            message: JSON.stringify(err),
        });
    }
};

const replaceProduct = async(req,res)=>{
    try{
        const reqId = req.params.id;
        const data =  {...req.body, _id: reqId};
        const result = await productModel.findOneAndReplace({_id: reqId}, data);
        res.json({
            status : 'success',
            data : {
                products : result,
            }
        })
    }
    catch(err){
        res.json({
            staus: 'fail',
            message : JSON.stringify(err)
        })
    }
};

const deleteProduct = async(req,res)=>{
    try{
        const reqId = req.params.id;
        const data =  {...req.body, _id: reqId};
        const result = await productModel.findOneAndDelete(data);
        if(!result) throw new Error("Invalid product Id");
        res.status(204);
        res.json({
            status : 'success',
            message : 'deleted successfully',
            data : {
                products : result,
            }
        })
    }
    catch(err){
        res.status(404);
        res.json({
            staus: 'fail',
            message : err
        })
    }

};

module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
    deleteProduct
};