<template>
        <ion-toolbar>
            <ion-router-outlet id="main"></ion-router-outlet>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
          <ion-icon  :icon="menu" @click="openMenu"></ion-icon>
           S'inscrire
        </ion-title>
      </ion-toolbar>
    </ion-header>
        </ion-toolbar>
    <ion-menu side="start" menu-id="custom" class="menu" content-id="main" max-edge-start="1500">
    <ion-header>
      <ion-toolbar color="blue">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item><a href="/login"><ion-button class="button_Menu" color="success">Se Connecter</ion-button></a></ion-item>
        <ion-item><a href="/home"><ion-button class="button_Menu" color="secondary">Home</ion-button></a></ion-item>
                <ion-item><a href="/about"><ion-button class="button" color="tertiary">About</ion-button></a></ion-item>

      </ion-list>
    </ion-content>
  </ion-menu>
  
    <ion-content class="container">
        <form id="form" @submit.prevent="register">
            <ion-item lines="full">
                <ion-label class="texts" position="floating">Nom</ion-label>
                <ion-input type="text" v-model="nom" required></ion-input>
            </ion-item>
            <ion-item lines="full">
                <ion-label class="texts" position="floating">Prenom</ion-label>
                <ion-input type="text" v-model="prenom" required></ion-input>
            </ion-item>
            <ion-item lines="full">
                <ion-label class="texts" position="floating">Email</ion-label>
                <ion-input type="email" v-model="email" required></ion-input>
            </ion-item>
            <ion-item lines="full">
                <ion-label class="texts" position="floating">CIN</ion-label>
                <ion-input type="text" v-model="cin" required></ion-input>
            </ion-item>
            <ion-item lines="full">
                <ion-label class="texts" position="floating">Mot de Passe</ion-label>
                <ion-input type="password" v-model="mdp" required></ion-input>
            </ion-item>
            <ion-item lines="full">
                <ion-label class="texts" position="floating">Confirmation du Mot de Passe</ion-label>
                <ion-input type="password" v-model="passwordConfirmation" required></ion-input>
            </ion-item>
            <ion-row>
                <ion-col>
                    <ion-button class="button" type="submit" color="primary" expand="block">S'inscrire</ion-button>
                </ion-col>
            </ion-row>
        </form>
    </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, menuController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { menu } from 'ionicons/icons';
import axios from 'axios';


export default defineComponent({
  props: {
  },
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton
  },
  data() {
    return {
      nom: 'cvdf',
      prenom: 'sdfsdf',
      email: 'sdfsd@sdfs.com',
      cin: 'sdfsd',
      mdp: 'aze',
      passwordConfirmation: 'aze',
    }
  },
    methods: {
    openMenu() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    },
    register() {
      var bodyFormData = new FormData();
      bodyFormData.set('nom', this.nom);
      bodyFormData.set('prenom', this.prenom);
      bodyFormData.set('email', this.email);
      bodyFormData.set('cin', this.cin);
      bodyFormData.set('mdp', this.mdp);

      axios.post('http://localhost:8080/registerUser.php', bodyFormData).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
    }
},
setup() {
      return { menu };
}
});
</script>
<style scoped>

#form {
  text-align: right;
  width: 80%;
  margin : auto;
  margin-top : 20px;
}
.container {
  background: url('https://img.wallpapersafari.com/desktop/1920/1080/3/86/WaRyiB.jpg');
}
.button {
  width: 80%;
    margin : auto;
    margin-top : 25px;
}
.texts {
    font-size: 15px;
    line-height: 30px;
    color: #8c8c8c;
    margin: 0;
    margin-bottom: 10px;
}
.menu {
  --width: 250px;
  --background: #064223;
}
</style>