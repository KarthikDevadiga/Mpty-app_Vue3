<template>
  <div class="container">
    <!-- component for header -->
    <app-header></app-header>
    <div class="main-content">
      <div class="user-list">
        <!-- dhdhd -->
        <app-user v-for="user in users" :key="user" :user="user"></app-user>
        <!-- ksksk -->
      </div>
    </div>
    <div class="pagination">
      <div class="page">1-5 of 23</div>
      <div class="page-navigation">
        <button class="page-navigation__prev">
          <svg class="page-icon">
            <use xlink:href="images/sprite.svg#icon-chevron-thin-left"></use>
          </svg>
        </button>
        <button class="page-navigation__prev" @click.prevent="debug">
          <svg class="page-icon">
            <use xlink:href="images/sprite.svg#icon-chevron-thin-right"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <!-- <div v-for="us"></div> -->
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppUser from './components/AppUser.vue';

import { mapState, mapActions } from 'pinia';
import useModalStore from './stores/modal';
// import { onMounted } from 'vue';

export default {
  name: 'App',
  data() {
    return {
      f: 'js',
    };
  },

  components: {
    AppHeader,
    AppUser,
  },
  computed: {
    ...mapState(useModalStore, ['users']),
  },
  methods: {
    ...mapActions(useModalStore, ['fetchAllUsers']),
    debug() {
      console.log(this.users);
    },
  },
  mounted() {
    // console.log(this.f);
    this.fetchAllUsers();
  },
  // }
};
</script>
