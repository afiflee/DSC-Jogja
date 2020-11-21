<template>
  <v-container fluid class="mb-0">
    
    <!-- Organized By -->
    <v-row justify="center" align="center" class="mt-12">
        <v-col>
            <v-divider></v-divider>
            <br>
            <h1 class="google-font" style="color:#0005DF;">
            Organized By
            </h1>
            <p class="google-font mb-2">
            Developer Student Clubs
            </p>
        </v-col>
    </v-row>

    <v-row class="mb-6" justify="center" no-gutters>
        <!-- DSC UNS-->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://dsc.community.dev/universitas-sebelas-maret-uns-surakarta/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/uns.png" width="270px">
            </a>
        </v-col>
        <!-- DSC UNY -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://dsc.community.dev/universitas-negeri-yogyakarta/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/uny.png" width="270px">
            </a>
        </v-col>
        <!-- DSC UNJANI -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://dsc.community.dev/universitas-jenderal-achmad-yani-yogyakarta/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/unjani.png" width="270px">
            </a>
        </v-col>
        <!-- DSC Amikom -->
        <v-col cols="12" md="3" sm="3" style="padding: 10px">
            <a href="https://dsc.community.dev/university-of-amikom-yogyakarta/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/partners/amikom.png" width="270px">
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