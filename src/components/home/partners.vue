<template>
  <v-container fluid class="mb-0">
    <v-row justify="center" align="center">
        <v-col>
            <h1 class="google-font" style="color:#0005DF;">
            Sponsors
            </h1>
            <p class="google-font mb-2">
            Thanks to our Sponsors 
            <a
                href="https://twitter.com/DSCJogjakarta"
                rel="noreferrer"
                target="_blank"
                style="color:#0005DF;text-decoration:none"
            >#DSCJogFest2020</a>
            </p>
        </v-col>
    </v-row>
    <v-row>
        <v-col
          v-for="align in alignments"
          :key="align"
          :align-self="align"
        >
        </v-col>
    </v-row>
    <v-row no-gutters >
        <v-col
            md="4"
            offset-md="4"
        >
            <a href="https://www.mamikos.com/" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/img/mamikos.svg" width="375px" height="90px">
              </a>
        </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-12">
        <v-col>
            <v-divider></v-divider>
            <br>
            <h1 class="google-font" style="color:#0005DF;">
            Community Partners
            </h1>
            <p class="google-font mb-2">
            Thanks to our Community Partners 
            </p>
        </v-col>
    </v-row>
    <v-row class="mb-6" justify="center" no-gutters>
        <!-- GDG Jogjakarta -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://gdg.community.dev/gdg-jogjakarta/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/gdg-jogjakarta.svg">
            </a>
        </v-col>
        <!-- Innovative Academy -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://ia.ugm.ac.id/id/halaman-muka/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/ia-dark-logo.png" width="180px" height="50px">
            </a>
        </v-col>
        <!-- WTM Jogja -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://iamremarkable.withgoogle.com/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/logo_wtm.png" width="250px" height="40px">
            </a>
        </v-col>
    </v-row>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
  }
</script>