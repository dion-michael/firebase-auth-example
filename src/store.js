import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import auth from './config/firebase-config'
import Swal from 'sweetalert2'

Vue.use(Vuex)

const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();
const github = new firebase.auth.GithubAuthProvider()

export default new Vuex.Store({
  state: {
    isLogin: false,
    userData: null
  },
  mutations: {
    setIsLogin(state, status) {
      state.isLogin = status
    },
    setUserData(state, data) {
      state.userData = data
    }
  },
  actions: {
    googleSignIn({
      commit
    }) {
      auth.signInWithPopup(google)
        .then(({
          user
        }) => {
          console.log(user) // DEVELOPMENT ONLY, YOU CAN DELETE IT IF U DONT NEED IT
        }).catch(err => Swal.fire(err.code, err.message, 'error'))
    },
    facebookSignIn({
      commit
    }) {
      auth.signInWithPopup(facebook)
        .catch(err => Swal.fire(err.code, err.message, 'error'))
    },
    githubSignIn({
      commit
    }) {
      auth.signInWithPopup(github)
        .catch(err => Swal.fire(err.code, err.message, 'error'))
    },
    twitterSignIn() {
      Swal.fire(
        `Well, that's unfortunate`,
        `i don't have a twitter account :< but the method of integrating twitter oauth is the same as the others`,
        'warning'
      )
      console.warn("i don't have a twitter account :< but the method of integrating twitter oauth is the same as the others")
    },
    emailSignIn({
      commit
    }, data) {
      console.log(data);
      auth.signInWithEmailAndPassword(data.email, data.password)
        .catch(err => Swal.fire(err.code, err.message, 'error'))
    },
    register({
      commit
    }, data) {
      auth.createUserWithEmailAndPassword(data.email, data.password)
        .catch(err => {
          Swal.fire(err.code, err.message, 'error')
        })
    }
  }
})
