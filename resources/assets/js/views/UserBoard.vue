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


            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" v-for="(order,index) in orders" @key="index" >
              <div class="single-popular-items mb-50 text-center" style="border: 1px solid #eee;border-radius: 10px;">
                <div class="popular-img">
                  <img :src="order.product.image" :alt="order.product.name">
                </div>
                <div class="popular-caption">
                  <h3><a>{{order.product.name}}</a></h3>
                  <span>{{order.product.price}} €</span>
                </div>
              <div class="footer">
                    <span>

                             <span class="small-text text-muted">Quantité: {{order.quantity}}
                                <span class="float-right">{{order.is_delivered == 1? "shipped!" : "not shipped"}}</span>
                            </span>
                            <br><br>
                            <p><strong>Adresse postale :</strong> <br>{{order.address}}</p>
                    </span>
              </div>
              </div>

            </div>



          </div>

        </div>
      </div>
      <!-- Popular Items End -->

    </div>
</template>
<script>
    export default {
        data(){
            return {
                user : null,
                orders : []
            }
        },
        beforeMount(){
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.defaults.headers.common['Content-Type'] = 'application/json'
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')

            axios.get(`api/users/${this.user.id}/orders`)
            .then(response => {
                this.orders = response.data
            })
            .catch(error => {
                console.error(error);
            })       
        },

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
        height: 20vh;
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