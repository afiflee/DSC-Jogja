<template>
  <v-container fluid class="py-0">
    <!-- Desktop Screen -->
    <v-row justify="center" align="center" class="hidden-sm-and-down py-8">
      <v-col md="6" cols="12" class="text-center">
        <v-img
          class="white"
          transition="fade-transition"
          style="width:90%;margin-left:auto;margin-right:auto"
          :src="require('@/assets/img/cover.png')"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <p class="devfest-font mt-4 mb-3" style="font-size:120%">
          <v-icon class="mb-1">mdi-calendar-text</v-icon>&nbsp;November 2020 - January
          2021
          <span style="color:#0005DF">
            <b>|</b>
          </span>
          &nbsp;
          <v-icon class="mb-1">mdi-access-point</v-icon>&nbsp;Online
        </p>

        <p class="google-font mt-4 mb-5">
          <b style="color:#0005DF;font-size:120%">Jogja Festival 2020</b> - Create your future and grow together. <br />Separated
          by distance, united by passion.
        </p>

        <v-btn
          dark
          color="#0005DF"
          depressed
          style="text-transform: capitalize;border-radius:5px;padding:00% 10%;"
          to="/registration"
          class="google-font mr-3 mb-3"
          >Register</v-btn
        >

        <!-- <v-btn
          depressed
          v-if="maindata.badgeurl"
          style="text-transform: capitalize;border-radius:5px;border:1px solid #e0e0e0;color:#0005DF;background-color:white"
          :href="maindata.badgeurl"
          class="google-font mr-3 mb-3"
          target="_blank"
          >Get your Profile Badge</v-btn
        > -->

        <v-btn
          text
          style="text-transform: capitalize;border-radius:5px;color:#0005DF;background-color:white"
          v-if="maindata.mainhashtag"
          :href="'https://twitter.com/hashtag/'+maindata.mainhashtag"
          class="google-font mt-0 mb-3"
          target="_blank"
          >#JogFest2020</v-btn
        >
      </v-col>  
      <v-col md="6" cols="12" class="text-center">
        <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/H1F97SVL4sw"
  frameborder="0"></iframe>
      </v-col>
    </v-row>
    <!-- Desktop Screen -->
    <!-- Mobile Screen -->
    <v-row justify="center" align="center" class="hidden-md-and-up py-0 my-0">
      <v-col md="6" cols="12" class="text-center py-0 my-0">
        <v-img
          class="white"
          transition="fade-transition"
          style="width:90%;margin-left:auto;margin-right:auto"
          :src="require('@/assets/img/cover.png')"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <p class="devfest-font mt-4 mb-3" style="font-size:120%">
          <v-icon class="mb-1">mdi-calendar-text</v-icon>&nbsp;November 2020 - January
          2021
          <br />
          <v-icon class="mb-1">mdi-access-point</v-icon>&nbsp;Online
        </p>
        <!-- <Timer deadline="November 14, 2020" /> -->
        <v-col md="6" cols="12" class="mt-4 mb-3">
                <iframe id="ytplayer" type="text/html" 
          src="https://www.youtube.com/embed/H1F97SVL4sw"
          frameborder="0"></iframe>
        </v-col>
        <p class="google-font mt-4 mb-5">
          <b style="color:#0005DF;font-size:120%">Jogja Festival 2020</b> - Create your future and grow together.
          <br />Separated by distance, united by passion.
        </p>

        <v-btn
          dark
          color="#0005DF"
          depressed
          style="text-transform: capitalize;border-radius:5px;"
          to="/registration"
          class="google-font ma-1"
          >Register</v-btn
        >

        <!-- <v-btn
          depressed
          v-if="maindata.badgeurl"
          style="text-transform: capitalize;border-radius:5px;border:1px solid #e0e0e0;color:#0005DF;background-color:white"
          :href="maindata.badgeurl"
          class="google-font ma-1"
          target="_blank"
          >Get your Profile Badge</v-btn
        > -->
        <v-btn
          text
          style="text-transform: capitalize;border-radius:5px;color:#0005DF;background-color:white"
          v-if="maindata.mainhashtag"
          :href="'https://twitter.com/hashtag/#JogFest2020'"
          class="google-font ma-1"
          target="_blank"
          >#JogFest2020</v-btn
        >
      </v-col>
     
    </v-row>
  </v-container>
</template>

<script>
import maindata from '@/assets/data/main.json'
export default {
  name: "HomeScreen",
  data:()=>({
    maindata:maindata
  }),
  components: {
    // Timer: () => import("@/components/home/Timer"),
  },
};
</script>
