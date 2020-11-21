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

    <v-row class="mb-6" justify="center" no-gutters>
        <!-- Permikomnas -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://instagram.com/permikomnas.ri" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/logo_permikomnas.png" width="180px" height="50px">
            </a>
        </v-col>
        <!-- Labs247 -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://www.labs247.id/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/logo-labs247.png" width="180px" height="50px">
            </a>
        </v-col>
        <!-- Digital Inovasi Bangsa -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://dib.biz.id/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/dib.png" width="250px" height="40px">
            </a>
        </v-col>
    </v-row>

    <v-row class="mb-6" justify="center" no-gutters>
        <!-- Cloud Native Jogja -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://www.meetup.com/Kubernetes-and-Cloud-Native-Yogyakarta/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/Cloud native-logo.png" width="100px" height="100px">
            </a>
        </v-col>
        <!-- Andronity Solo -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://www.instagram.com/andronity_solo/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/Andronity.png" width="180px" height="50px">
            </a>
        </v-col>
        <!-- Niagahoster -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://niagahoster.co.id/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/logo-nh.svg">
            </a>
        </v-col>
    </v-row>

    <v-row class="mb-6" justify="center" no-gutters>
        <!-- UXID Jogja -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://uxid.org/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/UXID jogja.png" width="140px" height="80px">
            </a>
        </v-col>
        <!-- Block71 Jogja -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://yogyakarta.block71.co/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/logo_block71.png" width="100px" height="60px">
            </a>
        </v-col>
        <!-- Dilo Jogja -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://dilo.id/yogyakarta" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/Dilo.png" width="120px" height="50px">
            </a>
        </v-col>
    </v-row>

    <v-row class="mb-6" justify="center" no-gutters>
        <!-- AMCC -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://amcc.or.id/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/logo_amcc.png" width="200px" height="70px">
            </a>
        </v-col>
        <!-- Infinite -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://hello.infiniteuny.id/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/logo_infinite.png" width="250px" height="50px">
            </a>
        </v-col>
        <!-- Danke -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://www.instagram.com/danke_cc/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/Danke.jpg" width="100px" height="50px">
            </a>
        </v-col>
    </v-row>
    <v-row class="mb-6" justify="center" no-gutters>
        <!-- HIMASI UAD -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://instagram.com/himasi_uad" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/logo_himasi.png" width="250px" height="100px">
            </a>
        </v-col>
        <!-- HMSI -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://www.instagram.com/hmsi_unjaniyk/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/logo_hmsi.png" width="100px" height="100px">
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