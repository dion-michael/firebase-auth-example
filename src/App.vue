<template>
  <div id="app">
    <div class="container">
      <div class="main-container">
        <Login v-if="!isLogin" />
        <Home v-if="isLogin" />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./views/Login";
import Home from "./views/Home";
import { mapState, mapMutations } from "vuex";
import firebase from "firebase";
export default {
  components: {
    Login,
    Home
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin
    })
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setIsLogin(true);
        this.setUserData(user);
      } else {
        this.setIsLogin(false);
        this.setUserData(null);
      }
    });
  },
  methods: {
    ...mapMutations(["setIsLogin", "setUserData"])
  }
};
</script>

<style scoped>
.container .main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
