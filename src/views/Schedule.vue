<template>
  <v-main class="ma-0">
    <v-container
      fluid
      class="pb-0"
      :class="$vuetify.theme.dark ? 'row-border-dark' : 'row-border-white'"
    >
      <v-row justify="center" align="center">
        <v-col md="10" class="py-0 my-0">
          <v-toolbar flat 
          class="py-0 mt-0 my-0" 
          tabs 
          height="120%" 
          :class="$vuetify.theme.dark==true?'grey darken-4':'white'">
            <v-toolbar-title
              class="google-font my-5"
              style="font-weight: 900;font-size:180%;color:#0005DF"
              >Schedules
            </v-toolbar-title>
            <template v-slot:extension>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus atque dolorum sequi ex cumque praesentium, quaerat
                molestias? Earum quod libero sit veniam. Dolorem provident
                quibusdam, necessitatibus laborum perspiciatis ipsam laudantium.
              </p>
            </template>

            <template v-slot:extension>
              <v-tabs
                v-model="model"
                :grow="getMobileTab()"
                :centered="getMobileTab()"
                color="#0005DF"
                slider-color="#0005DF"
              >
                <v-tab href="#day1">
                  November 14
                </v-tab>
                <v-tab href="#day2">
                  November 21
                </v-tab>
                <v-tab href="#day3">
                  November 22
                </v-tab>
                <v-tab href="#day4">
                  November 28
                </v-tab>
                <v-tab href="#day5">
                  November 29
                </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col md="10">
          <v-tabs-items v-model="model">
            <!-- Introduce Section -->
            <v-tab-item
              value="day1" :class="$vuetify.theme.dark ? 'black' : 'white'">
              <v-container>
                <v-row>
                  <v-col>
                    <h3 class="google-font">Introduce to DSC Jogja Festival</h3>
                    <p class="google-font" style="text-align:justify;">
                      DSC Jogja Festival is an initiation from DSC which is active in the Jogjakarta area. In this session, we will be introduced to a series of activities held at the DSC Jogja Festival. Then it will be continued on how we build and the importance of personal branding.
                    </p>
                    <ScheduleDetails :data="ScheduleData[0]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <!-- End of Introduce Section -->
            <!-- Web Dev and Git Section -->
            <v-tab-item value="day2" :class="$vuetify.theme.dark ? 'black' : 'white'">
              <v-container>
                <v-row>
                  <v-col>
                    <h3 class="google-font">Web Development & Version Control</h3>
                    <p class="google-font" style="text-align:justify;">
                      Web development is an activity to develop a web which is then present on the internet. Later we will learn and chat to know about the frontend of a web and how to solve problems on the backend. The Web Development session will take place in parallel.
                    <br>
                      Version control is a management system for various revisions or changes to a unit of information, which is usually a document, source code, or other information that will be stored in computer storage media. For those of you who want to become programmers, mastering version control is mandatory.
                    </p>  
                    <ScheduleDetails :data="ScheduleData[1]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <!-- End of Web Dev and Git Section -->
            <!-- DevOps & Firebase Section -->
            <v-tab-item value="day3" :class="$vuetify.theme.dark ? 'black' : 'white'">
              <v-container>
                <v-row>
                  <v-col>
                    <h3 class="google-font">DevOps & Firebase</h3>
                    <p class="google-font" style="text-align:justify;">
                     DevOps is a set of practices that automate the process between application development and development teams so they can build, test and release software faster and more reliably. But is it true? Don't miss this session, because later we will delve deeper into what DevOps is.
                     <br>
                     Firebase is a service from Google which will be used to make it easier for application developers to develop applications. With the firebase, it makes it very easy for developers to focus on developing applications that are being created. Then is it possible? You have to see for yourself!
                    </p>
                    <ScheduleDetails :data="ScheduleData[2]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <!-- End of DevOps & Firebase Section -->
            <!-- Android & Flutter Section -->
            <v-tab-item value="day4" :class="$vuetify.theme.dark ? 'black' : 'white'">
              <v-container>
                <v-row>
                  <v-col>
                    <h3 class="google-font">Android & Flutter</h3>
                    <p class="google-font" style="text-align:justify;">
                      The use of Android is getting more and more. This proves that existing mobile applications are growing and along with this growth, Android developers are increasingly in demand. Kotlin is a modern, statically typed programming language. More than 50% of professional android developers who use Kotlin can even help increase productivity, developer satisfaction and code security. Later we are invited to find out more about the ins and outs of Android Kotlin and your career decisions to become an Android developer.
                    <br>
                    Flutter is an SDK for mobile application development developed by Google. Flutter is used to create or even develop mobile applications that can run on devices with the Android or iOS operating systems. Later, after knowing Flutter, we will be faced with whether Flutter is a suitable choice for learning to create Android applications for the first time? So stay tune on this event!
                    </p>
                    <ScheduleDetails :data="ScheduleData[3]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <!-- End of Android & Flutter Section -->
            <!-- UI/UX Section -->
            <v-tab-item value="day5" :class="$vuetify.theme.dark ? 'black' : 'white'">
              <v-container>
                <v-row>
                  <v-col>
                    <h3 class="google-font">UI & UX</h3>
                    <p class="google-font" style="text-align:justify;">
                      UI (User Interface) is about how the product is laid out. UX (User Experience) is about how the product feels. UI & UX are different but related things. In this session, we will learn "Become UI/UX Designer from scratch" and "Beginner's Guide to UI/UX Research". So prepare yourself, Hipster!
                    </p>
                    <ScheduleDetails :data="ScheduleData[4]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <!-- End of UI/UX Section -->
          </v-tabs-items>
        </v-col>
      </v-row>
    <!-- <v-row justify="center" align="center">
      <v-col md="8" xl="7">
        <SocialShare/>
      </v-col>
    </v-row> -->
    </v-container>
  </v-main>
</template>

<script>
import ScheduleDetails from "@/components/schedule/ScheduleDetails";
import ScheduleData from "@/assets/data/schedule.json";
export default {
  name: "",
  components: {
    ScheduleDetails,
    // ComingSoon:()=>import('@/components/common/ComingSoon'),
    // SocialShare: () => import("@/components/common/SocialShare")
  },
  data: () => ({
    model: "day1",
    ScheduleData: [],
  }),
  mounted() {
    this.ScheduleData = ScheduleData
  },
  methods: {
    getMobileTab() {
      if (window.innerWidth < 500) return true;
      else return false;
    },
  },
};
</script>

<style >
.row-border-white {
  border-bottom: 1px solid #e0e0e0;
}
.row-border-dark {
  border-bottom: 1px solid #292929;
  background: #212121;
}
</style>