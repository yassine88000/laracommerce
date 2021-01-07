<template>
	<div>
    <div>
      <b-button>I am a Button</b-button>
      <b-button href="#">I am a Link</b-button>
    </div>
        <table class="table table-responsive table-striped">
            <thead>
                <tr>
                    <td></td>
                    <td>Nom</td>
                    <td>Email</td>
                    <td>Joined</td>
                    <td>Nombre total de commande</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,index) in users" @key="index">
                    <td>{{index+1}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.created_at}}</td>
                    <td>{{user.orders.length}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
	export default {
        data(){
            return {
                users : []
            }
        },
        beforeMount(){
            axios.get('/api/users/')
            .then(response => {
                this.users = response.data
            })
            .catch(error => {
                console.error(error);
            })     
        }
    }
</script>