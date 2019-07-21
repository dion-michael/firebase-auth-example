<template>
  <div class="login-container">
    <div>
      <img src="/firebase-auth.png" />
      <form @submit.prevent="onSubmit">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input type="email" v-model="email" class="input" placeholder="Email" />
          </div>
        </div>
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input type="password" v-model="password" class="input" placeholder="Username" />
          </div>
        </div>
        <div class="field">
          <div class="buttons is-centered">
            <button class="button is-link is-fullwidth" style="margin-top: 20px">
              <span v-if="!regis">Sign In</span>
              <span v-if="regis">Register</span>
            </button>
          </div>
        </div>
      </form>
      <div class="field has-text-centered">
        <p v-if="regis">
          Already have an account?
          <a
            href="javascript:void(0)"
            @click="regis = false; empty()"
          >Sign in</a>
        </p>
        <p v-if="!regis">
          First timer?
          <a href="javascript:void(0)" @click="regis = true; empty()">register here</a>
        </p>
      </div>
      <div class="field has-text-centered">
        <p>or sign with</p>
        <div>
          <ul class="third-party-container">
            <li @click="googleSignIn">
              <a href="javascript:void(0)">
                <img src="/google.png" width="50px" height="50px" alt />
              </a>
            </li>
            <li @click="facebookSignIn">
              <a href="javascript:void(0)">
                <img src="/facebook.png" width="50px" height="50px" alt />
              </a>
            </li>
            <li @click="githubSignIn">
              <a href="javascript:void(0)">
                <img src="/github.png" width="50px" height="50px" alt />
              </a>
            </li>
            <li @click="twitterSignIn">
              <a href="javascript:void(0)">
                <img src="/twitter.png" width="50px" height="50px" alt />
              </a>
            </li>
          </ul>
        </div>
        <p>&copy; Dion Michael 2019</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      regis: false
    };
  },
  methods: {
    ...mapActions([
      "emailSignIn",
      "googleSignIn",
      "facebookSignIn",
      "twitterSignIn",
      "githubSignIn",
      "register"
    ]),
    onSubmit() {
      let data = {
        email: this.email,
        password: this.password
      };
      this.empty();
      if (this.regis) {
        this.register(data);
      } else {
        this.emailSignIn(data);
      }
    },
    empty() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  min-height: 300px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
}

ul li {
  display: inline;
}

ul {
  list-style: none;
}

.third-party-container {
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
}
</style>
