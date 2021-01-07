<template>
    <div  :style="{backgroundColor : background}" class="transit">

            <h2 class="title">Espace Admin</h2>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <ul style="list-style-type:none">
                      <li class="active"><b-button variant="primary" class="btn" @click="setComponent('main')">Tableau de bord</b-button></li>
                      <li><b-button class="btn" variant="outline-primary" @click="setComponent('orders')">Commandes</b-button></li>
                      <li><b-button class="btn" variant="outline-primary"  @click="setComponent('products')">Produits</b-button></li>
                      <li><b-button class="btn" variant="outline-primary" @click="setComponent('users')">Utilisateurs</b-button></li>
                    </ul>
                </div>
                <div class="col-md-9">
                    <component :is="activeComponent"></component>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Main from '../components/admin/Main'
    import Users from '../components/admin/Users'
    import Products from '../components/admin/Products'
    import Orders from '../components/admin/Orders'
    
    export default {
        data(){
            return {
              background: 'grey',
                user : null,
                activeComponent : null
            }
        },
        components : {
            Main, Users, Products, Orders
        },
        beforeMount(){
            this.setComponent(this.$route.params.page)
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.defaults.headers.common['Content-Type'] = 'application/json'
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')
        },
        methods : {
            setComponent(value){
                switch(value) {
                    case "users":
                        this.activeComponent = Users
                        this.$router.push({name : 'admin-pages', params : {page: 'users'}})
                        break;
                    case "orders":
                        this.activeComponent = Orders
                        this.$router.push({name : 'admin-pages', params : {page: 'orders'}})
                        break;
                    case "products":
                        this.activeComponent = Products
                        this.$router.push({name : 'admin-pages', params : {page: 'products'}})
                        break;
                    default:
                        this.activeComponent = Main
                        this.$router.push({name : 'admin'})
                        break;
                }
            }
        }
    }
</script>
<style scoped>
    .hero-section {
        height: 20vh;
        background: #ababab;
        align-items: center;

    }
    .title {
        font-size: 60px;
        color: #ffffff;
    }
</style>