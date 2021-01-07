<template>
    <div>



      <header>
        <!-- Header Start -->
        <div class="header-area">
          <div class="main-header header-sticky">
            <div class="container-fluid">
              <div class="menu-wrapper">
                <!-- Logo -->
                <div class="logo">
                  <a href="/"><img src="assets/img/logo/logo.png" alt=""></a>
                </div>
                <!-- Main-menu -->
                <div class="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><a v-if="!isLoggedIn" @click="goToRoute('login')">Je me connecte</a></li>
                      <li><a v-if="!isLoggedIn" @click="goToRoute('register')">Je m'inscris</a></li>
                      <li><a v-if="isLoggedIn" @click="logout">Se déconnecter</a></li>
                    </ul>
                  </nav>
                </div>
                <!-- Header Right -->
                <div class="header-right">
                  <ul v-if="isLoggedIn">
                    <li> <a v-if="user_type == 0" @click="goToRoute('userboard')">Salut!, {{name}}</a></li>
                    <li> <a v-if="user_type == 1" @click="goToRoute('admin')">Salut!, {{name}}</a></li>
                  </ul>
                  <ul>
                    <li><a href="cart.html"><span class="flaticon-shopping-cart"></span></a> </li>
                  </ul>
                </div>
              </div>
              <!-- Mobile Menu -->
              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- Header End -->
      </header>

        <main class="py-4">
            <router-view @loggedIn="change"></router-view>
        </main>


    </div>
</template>
<script>
    export default {
      data(){
          return {
            name        : null,
            user_type   : 0,
            isLoggedIn  : localStorage.getItem('jwt') != null
          }
      },
      props: ['invId'],

      mounted() {
        this.setDefaults()
      },
      computed: {
        inCart() { return this.$store.getters.inCart; },
      },
      methods : {
        setDefaults(){
          if(this.isLoggedIn){
            let user        = JSON.parse(localStorage.getItem('user'))
            this.name       = user.name
            this.user_type  = user.is_admin
          }
        },
        change(){
            this.isLoggedIn = localStorage.getItem('jwt') != null
            this.setDefaults()

        },
        logout(){
            localStorage.removeItem('jwt')
            localStorage.removeItem('user')
            this.change()
            this.$router.push('/')
        },
        goToRoute: function (routeName){
          this.$root.$router.push({name:routeName});

        }
      }
    }
</script>