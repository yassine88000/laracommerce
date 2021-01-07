<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <img :src="product.image" :alt="product.name">
                <h3 class="title" v-html="product.name"></h3>
                <p class="text-muted">{{product.description}}</p>
                <h4>
                    <span class="small-text text-muted float-left">$ {{product.price}}</span>
                    <span class="small-text float-right">Quantité restante: {{product.units}}</span>
                </h4>
                <br>
                <hr>
                <div class="col-md-4 btn btn-sm btn-primary float-right" @click="addToCart(invId)">Ajouter</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                product : []
            }
        },
      props: ['inCart'],

      beforeMount(){
            axios.get(`/api/products/${this.$route.params.id}`)
            .then(response => {
                this.product = response.data
            })
            .catch(error => {
                console.error(error);
            })       
        },
      methods: {
        addToCart(invId) {
          this.$store.dispatch('addToCart', invId);
        },
      },
    }
</script>
<style scoped>
    .small-text {
        font-size: 18px;
    }
    .title {
        font-size: 36px;
    }
</style>