<template >
<ion-toolbar>
            <ion-router-outlet id="main"></ion-router-outlet>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
          <ion-icon  :icon="menu" @click="openMenu"></ion-icon>
           Se Connecter
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
        <ion-item><a href="/register"><ion-button class="button_Menu" color="primary">S'inscrire</ion-button></a></ion-item>
        <ion-item><a href="/home"><ion-button class="button_Menu" color="secondary">Home</ion-button></a></ion-item>
                <ion-item><a href="/about"><ion-button class="button" color="tertiary">About</ion-button></a></ion-item>

      </ion-list>
    </ion-content>
  </ion-menu>
    <ion-content>
        <form id="form" @submit.prevent="connect">
            <ion-item lines="full">
                <ion-label class="texts" position="floating">Email</ion-label>
                <ion-input type="text" v-model="email" required></ion-input>
            </ion-item>
            <ion-item lines="full">
                <ion-label class="texts" position="floating">Password</ion-label>
                <ion-input type="password" v-model="password" required></ion-input>
            </ion-item>
            <ion-row>
                <ion-col>
                    <ion-button class="button" type="submit" color="success" expand="block">Sign In</ion-button>
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
  props:{

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
  data () {
    return {
      email: '',
      password: '',
      error: 'impo',
      role: ''
    }
  },
    methods: {
  openMenu() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    },
    connect(){
      var bodyFormData = new FormData();
      bodyFormData.set('email', this.email);
      bodyFormData.set('password', this.password);
      axios.post('http://localhost:8080/loginUser.php', bodyFormData).then(response => { console.log(response.data);
        if(response.data.role == 'Admin'){
          this.$router.push('/admin');
        }
        if (response.data.role == 'User') {
          this.$router.push('/user');
        } else {
          console.log('error');
        }
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
  text-align: center;
  width: 80%;
  margin : auto;
  margin-top : 50px;
}
.button {
  width: 80%;
    margin : auto;
    margin-top : 25px;
}
.button_Menu {
  width: 100%;
    margin : auto;
    margin-top : 25px;
    margin-bottom : 10px;
}
.menu {
  --width: 250px;
  --background: #064223;
}
</style>