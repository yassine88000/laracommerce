
<template>
  <!--================login_part Area =================-->
  <section class="login_part section_padding ">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
          <div class="login_part_text text-center">
            <div class="login_part_text_iner">
              <h2>New to our Shop?</h2>
              <p>There are advances being made in science and technology
                everyday, and a good example of this is the</p>
              <a @click="goToRoute('Register')" class="btn_3">Create an Account</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="login_part_form">
            <div class="login_part_form_iner">
              <h3>Welcome Back ! <br>
                Please Sign in now</h3>
              <form class="row contact_form" novalidate="novalidate">
                <div class="col-md-12 form-group p_star">
                  <input type="text" class="form-control" id="name" name="name" value="" v-model="name" required placeholder="Nom">
                </div>
                <div class="col-md-12 form-group p_star">
                  <input type="email" class="form-control" id="email" name="email" value="" v-model="email" required placeholder="Email">
                </div>
                <div class="col-md-12 form-group p_star">
                  <input type="password" class="form-control" id="password" name="password" value=""
                         placeholder="Password" v-model="password" required>
                </div>
                <div class="col-md-12 form-group p_star">
                  <input id="password-confirm" name="password" type="password" class="form-control" v-model="password_confirmation" required placeholder="Confirmez le mot de passe">
                </div>
                <div class="col-md-12 form-group">

                  <button type="submit" value="submit" class="btn_3" @click="handleSubmit">
                    s'inscrire
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================login_part end =================-->

</template>

<script>
    export default {
        props : ['nextUrl'],
        data(){
            return {
                name : "",
                email : "",
                password : "",
                password_confirmation : ""
            }
        },
        methods : {
            handleSubmit(e) {
                e.preventDefault()
                
                if (this.password === this.password_confirmation && this.password.length > 0)
                {
                    axios.post('api/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        c_password : this.password_confirmation
                      })
                      .then(response => {
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)
                        
                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else{
                                this.$router.push('/')
                            }
                        }
                      })
                      .catch(error => {
                        console.error(error);
                      });
                } else {
                    this.password = ""
                    this.passwordConfirm = ""
                    
                    return alert('Passwords do not match')
                }
            }
        }
    }
</script>