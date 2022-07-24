<template>
  <ion-page>
    <ion-menu
      side="start"
      menu-id="custom"
      class="Admin_Menu"
      content-id="main"
    >
      <ion-header>
        <ion-toolbar>
          <ion-title>Admin Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-button>Transports</ion-button>
          </ion-item>
          <ion-item>
            <ion-button>Passangers</ion-button>
          </ion-item>
          <ion-item>
            <ion-button>Drivers</ion-button>
          </ion-item>
          <ion-item>
            <ion-button>Routes</ion-button>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="main"></ion-router-outlet>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
          <ion-button @click="openMenu" size="default" fill="solid" color="transparant" >
            <ion-icon :icon="menu"></ion-icon>Menu
          </ion-button>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <strong>OVERALL VUE</strong>
        <hr>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButton,
  menuController,
  IonMenu,
  IonList,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { menu} from "ionicons/icons";
import "@ionic/vue";

export default defineComponent({
  name: "AdminPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonMenu,
    IonList,
    IonButton,
  },
  methods: {
    openMenu() {
      menuController.enable(true, "custom");
      menuController.open("custom");
    },
  },
  setup() {
    return { menu };
  },
});
</script>
<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>