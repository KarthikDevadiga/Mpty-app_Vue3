<template>
  <div class="container-2">
    <div class="sidebar">
      <div class="nav-link">
        <a href="#" class="nav-link__link">Profile</a>
        <a href="#" class="nav-link__link">Profile</a>
        <a href="#" class="nav-link__link">Profile</a>
        <a href="#" class="nav-link__link">Profile</a>
      </div>
    </div>
    <div class="profile-name">
      <h3 class="sub-h">Profile</h3>
      <div class="profile">
        <img class="profile__img" :src="user.profilepicture" alt="hehe" />
        <p class="profile__name">{{ user.name }}</p>
      </div>
    </div>
    <div class="main-content-user">
      <div class="profile-pic">
        <img class="profile-pic__img" :src="user.profilepicture" alt="hehe" />
        <h3>{{ user.name }}</h3>
      </div>
      <div class="profile-description">
        <!-- <div class="profile-description__key"> -->
        <p class="profile-description__key-p">
          Username <span class="semi">:</span>
        </p>
        <h3 class="profile-description__value-p">{{ user.username }}</h3>

        <p class="profile-description__key-p">
          e-mail <span class="semi">:</span>
        </p>
        <h3 class="profile-description__value-p">{{ user.email }}</h3>

        <p class="profile-description__key-p">
          Phone <span class="semi">:</span>
        </p>
        <h3 class="profile-description__value-p">{{ user.phone }}</h3>

        <p class="profile-description__key-p">
          Website <span class="semi">:</span>
        </p>
        <!-- </div> -->
        <!-- <div class="profile-description__value"> -->
        <h3 class="profile-description__value-p">{{ user.Website }}</h3>
        <!-- </div> -->
      </div>
      <div class="company-description">
        <p class="company-description__sub">Company</p>
        <div class="comp-det">
          <p class="company-description__key-p">
            Name <span class="semi">:</span>
          </p>
          <h3 class="company-description__value-p">{{ user.company.name }}</h3>

          <p class="company-description__key-p">
            catchPhrase <span class="semi">:</span>
          </p>
          <h3 class="company-description__value-p">
            {{ user.company.catchPhrase }}
          </h3>

          <p class="company-description__key-p">
            Phone <span class="semi">:</span>
          </p>
          <h3 class="company-description__value-p">{{ user.phone }}</h3>
        </div>
      </div>
    </div>

    <div class="location">
      <div class="location__details">
        <p class="address-sub">Address <span class="semi-adress">:</span></p>
        <div class="location-description">
          <!-- <div class="profile-description__key"> -->
          <p class="profile-description__key-p">
            Street <span class="semi">:</span>
          </p>
          <h3 class="profile-description__value-p">
            {{ user.address.street }}
          </h3>

          <p class="profile-description__key-p">
            suite <span class="semi">:</span>
          </p>
          <h3 class="profile-description__value-p">{{ user.address.suite }}</h3>

          <p class="profile-description__key-p">
            ZipCode <span class="semi">:</span>
          </p>
          <h3 class="profile-description__value-p">
            {{ user.address.zipcode }}
          </h3>
        </div>
      </div>
      <div id="map"></div>
    </div>

    <div v-show="!showChat" class="chat" @click="showChat = !showChat">
      <div class="chat__chating-div">Lo chat</div>
      <div class="chat__icon-u">LO</div>
    </div>

    <div
      v-show="showChat"
      class="chat-window"
      :class="{ growing: showChat, shrinking: !showChat }"
    >
      <div v-show="showChat" class="chat" @click="showChat = !showChat">
        <div class="chat__chating-div">Lo chat</div>
        <div class="chat__icon-u">LO</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import useModalStore from '../stores/modal';
// import { LMap, LTileLayer, LMarker } from 'vue3-leaflet';
// import L from 'leaflet';
// import L from 'vue2-leaflet';
export default {
  name: 'LandingPage',
  data() {
    return {
      user: {},
      showChat: false,
      // isActive: !showChat,
    };
  },
  computed: {
    ...mapState(useModalStore, ['users', 'current_user']),
  },
  methods: {
    fetchAllDetails() {
      const user = this.current_user;
      return this.users[user - 1];
    },
  },
  beforeMount() {
    // console.log(this.f);
    this.user = this.fetchAllDetails();
    console.log(this.user);
  },
  mounted() {
    const lat = this.user.address.geo.lat;
    const lng = this.user.address.geo.lat;

    const map = L.map('map').setView([lat, lng], 7); // map is the id here
    console.log(L);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup('Guess logitude and latitude are randoms')
      .openPopup();
  },
};
</script>
