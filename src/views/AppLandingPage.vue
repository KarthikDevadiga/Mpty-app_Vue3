<template>
  <div class="container">
    <app-header></app-header>
    <div class="main-content">
      <div class="user-list">
        <!-- dhdhd -->

        <!-- <router-link ></router-link> -->
        <app-user
          v-for="user in users"
          :key="user"
          :user="user"
          @click.prevent="userSelected(user.id)"
        ></app-user>
        <!-- <router-link :to="{ name: 'user' }">
          
        </router-link> -->

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
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppUser from '../components/AppUser.vue';
import { mapState, mapActions } from 'pinia';
import useModalStore from '../stores/modal';
import router from '../router/indexRouter';

export default {
  name: 'LandingPage',

  components: {
    AppHeader,
    AppUser,
  },
  computed: {
    ...mapState(useModalStore, ['users']),
  },
  methods: {
    userSelected(id) {
      router.push('/user');
    },
  },
};
</script>
