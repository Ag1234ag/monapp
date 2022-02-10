const Order = require('../model/order');
const Cart = require('../model/Cart');
const User = require('../model/User');

module.exports.get_orders = async (req,res) => {
    const userId = req.params.id;
    Order.find({userId}).sort({date:-1}).then(orders => res.json(orders));
}

module.exports.checkout = async (req,res) => {
    try{
        const userId = req.params.id;
        const {source} = req.body;
        let cart = await Cart.findOne({userId});
        console.log(cart)
        let user = await User.findOne({_id: userId});
        const email = user.email;
       
            
          
            
                const order = await Order.create({
                    userId,
                    items: cart.items,
                    bill: cart.bill
                });
                const data = await Cart.findByIdAndDelete({_id:cart.id});
                return res.status(201).send(order);
            
        
        
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}