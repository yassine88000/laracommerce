<template>

<div>
  <!--? Popular Items Start -->
  <div class="popular-items section-padding30">
    <div class="container">
      <!-- Section tittle -->
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-10">
          <div class="section-tittle mb-70 text-center">
            <h2>Popular Items</h2>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
          </div>
        </div>
      </div>
      <div class="row">


        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" v-for="(product,index) in products" @key="index">
          <div class="single-popular-items mb-50 text-center">
            <div class="popular-img" @click="goToRoute( '/products/'+product.id)">
              <img :src="product.image" :alt="product.name">
              <div class="img-cap">
                <span>Voir plus</span>
              </div>
            </div>
            <div class="popular-caption">
              <h3><a>{{product.name}}</a></h3>
              <span>{{product.price}} €</span>
            </div>
          </div>
        </div>



      </div>
      <!-- Button -->
      <div class="row justify-content-center">
        <div class="room-btn pt-70">
          <a href="catagori.html" class="btn view-btn1">View More Products</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Popular Items End -->
  {{ inCart }}

</div>
</template>
<script>
    export default {
        data(){
            return {
              background: 'black',
                products : []
            }
        },
        mounted(){
            axios.get("api/products/")
            .then(response => {
                this.products = response.data
            })
            .catch(error => {
                console.error(error);
            })       
        },
      methods : {
        goToRoute: function (routePath){
          this.$root.$router.push({path:routePath});

        }
      }
    }
</script>
<style scoped>
    .small-text {
        font-size: 14px;
    }
    .product-box {
        border: 1px solid #cccccc;
        padding: 10px 15px;
    }
    .hero-section {
        height: 30vh;
        background: #ababab;
        align-items: center;
        margin-bottom: 20px;
        margin-top: -20px;
    }
    .title {
        font-size: 60px;
        color: #ffffff;
    }
</style>