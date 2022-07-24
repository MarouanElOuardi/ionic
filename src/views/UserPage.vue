<template>
<ion-page>
  <ion-menu side="start" menu-id="custom" class="menu" content-id="main" max-edge-start="1500">
    <ion-header>
      <ion-toolbar color="blue">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item><a href="/login"><ion-button class="button" color="success">Se Connecter</ion-button></a></ion-item>
        <ion-item><a href="/register"><ion-button class="button" color="primary">S'inscrire</ion-button></a></ion-item>
        <ion-item><a href="/home"><ion-button class="button" color="secondary">Home</ion-button></a></ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-router-outlet id="main"></ion-router-outlet>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
          <ion-icon  :icon="menu" @click="openMenu"></ion-icon>
           USERPAGE
        </ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <strong>CATRANSPORT</strong>
        <hr>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, menuController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { menu } from 'ionicons/icons';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
},
methods: {
  openMenu() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    },

},
setup() {
      return { menu };
}
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

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
.menu {
  --width: 250px;
  --background: #064223;
}
.button {
  margin: auto;
  width: 10%;
}

</style>
