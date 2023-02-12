<template>
  <div class="container">
    <!-- component for header -->
    <app-header></app-header>
    <div class="main-content">
      <div class="user-list">
        <div class="users">
          <div class="users__details">
            <div class="user-name">
              <img
                class="user-name__img"
                src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
                alt="hehe"
              />
              <h3 class="user-name__name">Karthik</h3>
            </div>
            <div class="users-details__email">Sincere@april.biz</div>
            <div class="users-details__city">Gwenborough</div>
          </div>

          <div class="status">Logo Acrtive</div>
        </div>
        <!-- dhdhd -->
        <div class="users">
          <div class="users__details">
            <div class="user-name">
              <img
                class="user-name__img"
                src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
                alt="hehe"
              />
              <h3 class="user-name__name">Karthik</h3>
            </div>
            <div class="users-details__email">Sincere@april.biz</div>
            <div class="users-details__city">Gwenborough</div>
          </div>

          <div class="status">Logo Acrtive</div>
        </div>
        <div class="users">
          <div class="users__details">
            <div class="user-name">
              <img
                class="user-name__img"
                src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
                alt="hehe"
              />
              <h3 class="user-name__name">Karthik</h3>
            </div>
            <div class="users-details__email">Sincere@april.biz</div>
            <div class="users-details__city">Gwenborough</div>
          </div>

          <div class="status">Logo Acrtive</div>
        </div>
        <div class="users">
          <div class="users__details">
            <div class="user-name">
              <img
                class="user-name__img"
                src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
                alt="hehe"
              />
              <h3 class="user-name__name">Karthik</h3>
            </div>
            <div class="users-details__email">Sincere@april.biz</div>
            <div class="users-details__city">Gwenborough</div>
          </div>

          <div class="status">Logo Acrtive</div>
        </div>
        <div class="users">
          <div class="users__details">
            <div class="user-name">
              <img
                class="user-name__img"
                src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
                alt="hehe"
              />
              <h3 class="user-name__name">Karthik</h3>
            </div>
            <div class="users-details__email">Sincere@april.biz</div>
            <div class="users-details__city">Gwenborough</div>
          </div>

          <div class="status">Logo Acrtive</div>
        </div>

        <!-- ksksk -->
        <div class="users">
          <div class="users__details">
            <div class="user-name">
              <img
                class="user-name__img"
                src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
                alt="hehe"
              />
              <h3 class="user-name__name">Karthik</h3>
            </div>
            <div class="users-details__email">Sincere@april.biz</div>
            <div class="users-details__city">Gwenborough</div>
          </div>

          <div class="status">Logo Acrtive</div>
        </div>
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
import AppHeader from './components/AppHeader.vue';
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
