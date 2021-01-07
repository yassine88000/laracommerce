<template>
  <div class="row">
    <b-button variant="info" class="col-md-4 product-box d-flex align-content-center justify-content-center flex-wrap big-text"
              href="/admin/orders">Commande({{ orders.length }})
    </b-button>
    <b-button variant="info" class="col-md-4 product-box d-flex align-content-center justify-content-center flex-wrap big-text"
              href='/admin/products'>Produit ({{ products.length }})
    </b-button>
    <b-button variant="info" class="col-md-4 product-box d-flex align-content-center justify-content-center flex-wrap big-text"
              href='/admin/users'>Utilisateur ({{ users.length }})
    </b-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: null,
      orders: [],
      products: [],
      users: []
    }
  },
  mounted() {
    axios.get('/api/users/')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.error(error);
        })

    axios.get('/api/products/')
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          console.error(error);
        })

    axios.get('/api/orders/')
        .then(response => {
          this.orders = response.data
        })
        .catch(error => {
          console.error(error);
        })
  }
}
</script>
<style scoped>
.big-text {
  font-size: 28px;
}

.product-box {
  border: 1px solid #cccccc;
  padding: 10px 15px;
  height: 20vh
}
</style>