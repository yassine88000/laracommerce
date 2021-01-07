<template>
	<div>
        <table class="table table-responsive table-striped">
            <thead>
                <tr>
                    <td></td>
                    <td>Produit</td>
                    <td>Quantité</td>
                    <td>Prix</td>
                    <td>Delivery Address</td>
                    <td>is Delivered?</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody class="txt">
                <tr v-for="(order,index) in orders" @key="index">
                    <td>{{index+1}}</td>
                    <td v-html="order.product.name"></td>
                    <td>{{order.quantity}}</td>
                    <td>{{order.quantity * order.product.price}}</td>
                    <td>{{order.address}}</td>
                    <td>{{order.is_delivered == 1? "Yes" : "No"}}</td>
                    <td v-if="order.is_delivered == 0"><button class="btn btn-success" @click="deliver(index)">Deliver</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
	export default {
        data(){
            return {
                orders : []
            }
        },
        beforeMount(){
            axios.get('/api/orders/')
            .then(response => {
                this.orders = response.data
            })
            .catch(error => {
                console.error(error);
            })     
        },
        methods : {
            deliver(index){
                let order = this.orders[index]
                axios.patch(`/api/orders/${order.id}/deliver`)
                .then(response => {
                    this.orders[index].is_delivered = 1
                    this.$forceUpdate()
                })
                .catch(error => {
                    console.error(error);
                })   
            }
        }
    }
</script>
<style>
.table table-responsive table-striped {
  color:'red';

}


.txt {
  font-family: 'Domine', sans-serif;

}
</style>