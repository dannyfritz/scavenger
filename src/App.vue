<template>
  <div class="scavenger">
    <nav class="nav-wrapper">
      <a href="#" class="brand-logo center">
        <i class="material-icons">search</i>
        Scavenger Hunt
      </a>
    </nav>
    <main class="container scavenger__content">
      <section v-if="isLoading" class="card-panel">
        <p class="flow-text">Loading...</p>
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      </section>
      <section v-if="!isLoading" class="item card card-panel">
        <div class="card-content">
          <p class="flow-text">{{item.flavor}}</p>
        </div>
        <div class="card-action">
          <p class="flow-text"><em>Next Hint: </em>{{item.hint}}</p>
          <form class="row" v-on:submit.prevent>
            <div class="input-field col s3">
              <input v-model="password" id="password" type="text" class="validate">
              <label for="password">Password</label>
            </div>
            <div class="input-field col s6">
              <button v-on:click="checkPassword" class="btn waves-effect waves-light">Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Scavenger Hunt</h5>
            <p class="grey-text text-lighten-4">An application to assist in hosting scavenger hunts.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          Made with ❤ by Danny Fritz
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { getItem, getReady } from "./store"
export default {
  name: "app",
  data () {
    return {
      item: {},
      isLoading: true,
      password: "",
    }
  },
  created () {
    getReady
      .then(() => {
        this.item = getItem()
        this.isLoading = false
      })
      .catch((reason) => {
        console.error(reason)
      })
  },
  methods: {
    checkPassword () {
      this.item = getItem(this.password)
      this.password = ""
    },
  },
}
</script>

<style>
.scavenger {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.scavenger__content {
  flex-grow: 1;
  padding-top: 2em;
  padding-bottom: 2em;
}
</style>
