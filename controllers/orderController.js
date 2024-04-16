
    import express from 'express';
    import mongoose from 'mongoose';
    const router = express.Router();
    var orderSchema= new mongoose.Schema({
        order:{type:String},
        total:{type:String},
    });
    const Order = mongoose.model('Order', orderSchema);
    
     
     //mongoose.set('useFindAndModify',false);
    
     router.get('/',(req,res)=>{
        res.render('menu');
     });
    
     
     router.get('/cart',(req,res)=>{
        res.render('cart');
     });
    
     router.get('/orders',(req,res)=>{
        res.render('orders');
     });
     router.get('/admin',(req,res)=>{
     Order.find((err,docs)=>{
      if (!err) {
        res.render("admin",{
            order:docs 
        });
      }else {
        console.log('Error in order:'+err);
      }
        
     });
     });
     router.get('/order/:id',(req,res)=> {
        Order.findById(req.params.id,(err,doc)=>{
            if (!err) {
                res.render("orders",{order:doc});
            } else{
                console.log('Error in findbyid:'+err); 
            }
        });
     });
    router.get('/order/delete/:id',(req,res)=>{
        Order.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(!err){
                res.redirect('/admin');
            }else{
               console.log('Error delete'+err); 
            }
        });
    });
    router.post('/cart',(req,res)=>{
        insertOrder(req,res);
    });
    
    router.post('/order',(req,res)=>{
        updateOrder(req,res);
    });
    
    function updateOrder(req,res) {
        Order.findOneAndUpdate({id: req.body._id},req.body,{new:true},(err,doc)=>{
            if (!err) {
               res.redirect('/admin');  
            } else{
                console.log('Error Update'+err);
            }
        });
    
    }
    function insertOrder(req,res) {
        var d=new Date();
        var t=d.getTime();
        var counter=t;
        counter+=1;
        var order=new Order();
        order.total=req.body.total;
        order.order=counter;
        order.save((err,result)=>{
            if (err) {
                console.log('order: '+order);
                res.redirect('/admin');
            }else {
                // const cart = new Cart(req.session.cart ? req.session.cart : {items:{}});
                console.log('err insertorder: '+err);
               
            }
        });
    
    }
  

    export default router;