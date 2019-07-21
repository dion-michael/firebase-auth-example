<template>
  <div class="home">
    <div style="text-align: center; margin-bottom: 20px">
      <img class="round" :src="picture" alt />
      <p class="title">{{userData.displayName}}</p>
      <p class="subtitle">{{userData.email}}</p>
    </div>
    <div>
      <button class="button is-danger" @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import { mapMutations, mapState } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapState(["isLogin", "userData"]),
    picture() {
      if (this.userData.photoURL) {
        return this.userData.photoURL;
      } else {
        return "https://api.adorable.io/avatars/285/abott@adorable.png";
      }
    }
  },
  methods: {
    ...mapMutations(["setIsLogin"]),
    signOut() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.round {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
</style>
