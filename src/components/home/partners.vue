<template>
  <v-container fluid class="mb-0">
    <v-row justify="center" align="center">
      <v-col>
        <h1 class="google-font" style="color:#0005DF;">
          Sponsors
        </h1>
        <p class="google-font mb-2">
          Terima kasih untuk Sponsors 
          <a
            href="https://twitter.com/DevFestIndia"
            rel="noreferrer"
            target="_blank"
            style="color:#0005DF;text-decoration:none"
          >#JogFest2020</a>
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
        <v-col>
            <v-divider></v-divider>
            <br>
            <h1 class="google-font" style="color:#0005DF;">
            Community Partners
            </h1>
            <p class="google-font mb-2">
            Thanks to our community partners
            </p>
        </v-col>
    </v-row>
    <v-row>
        <v-col
            v-for="n in 3"
            :key="n"
                >
            <v-card
                class="pa-2"
                outlined
                tile
            >
                One of three columns
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>
