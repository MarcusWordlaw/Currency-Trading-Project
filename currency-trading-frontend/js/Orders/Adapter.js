class Adapter{

    static getOrders(){
        return fetch("http://localhost:3000/api/v1/user_orders")
        .then(response => response.json())
    }

    static postOrder( option ){
        return fetch(`http://localhost:3000/api/v1/user_orders` , option)
        .then(response => response.json())
        .then(result => console.log(result))
    }

    static deleteOrder(orderObj){
        return fetch(`http://localhost:3000/api/v1/user_orders/${orderObj.id}`, {
            method: 'delete'
        })
        .then(response => response.json())
    }


    
}