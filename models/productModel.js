const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
                        title : {
                            type: String, 
                            required: true,
                            unique: true
                        },
                        price : {
                            type: Number,
                            required: true,
                            min: 10000, 
                            max: 55000
                        },
                        description: String,
                        images: [String],
                        createdAt: {
                            type: Date,
                            default: new Date(),
                        },
                        upDatedAt: {
                            type: Date,
                            default: new Date(),
                        },
                        info : {
                            catogory: String
                        }
                    });


const productModel = mongoose.model('products',productSchema);


module.exports = productModel


















//diff between spread and rest operator
// const testProduct = new productModel({
//     title : 'Realme Narzo',
//     price : 20000
// });

// testProduct.save()
//             .then((res)=>console.log(res));




// {https://www.amazon.in/SIMPARTE-Borosilicate-Container-320ML-Lock-Lid-jar-set/dp/B08V8BXSDL/ref=sr_1_25_sspa?

// _encoding=UTF8&content-id=amzn1.sym.e9336160-77d6-43d3-aad2-e37b2d28ce25&dib=eyJ2IjoiMSJ9.

// 7dXUF59gfX77GwWrfPe2PIFXo0_9UIvV3e4qkKmJZ4SbYAYTIBiH1WStAhrhEwlhXCVkh4DTDUiuqEJGWurP5rt4PEStX3bXZUpA1xkZY9xXrjgRn_R5

// e0uCUnep-YyfAB_u2-3A-iW2LZhMEre7HBJ-HKZfXW6qTnxwYl48q1bkAwziW0lmvuHkdBLVZYXW_Hl9kG9sO6wZQYccK2aDcMkHrc67xFtP7GLtr8Z6

// iSVzwLrRLXqWcRwAi6PgLw4HuBuMEfEAr13jUuW4IWiWVuPAF7Q0uA92IzxBoC92aww.QsCgrprGZ3GU8db2m0riDY0gg7yLV4wuxC5E0UNV-sM&

// dib_tag=se&pd_rd_r=df17429e-b927-4912-9f65-5b494aa61452&pd_rd_w=8dD61&pd_rd_wg=LUFik&

// pf_rd_p=e9336160-77d6-43d3-aad2-e37b2d28ce25&pf_rd_r=0Y3N4PBS9KPGPEF8NWZQ&qid=1713521336&

// refinements=p_n_format_browse-bin%3A19560801031&s=kitchen&sr=1-25-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&th=1}