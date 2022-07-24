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
            <ion-button @click="openMenu">
                <ion-icon :icon="menu" ></ion-icon>
            </ion-button>
           CATRANSPORT
        </ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
          <ion-toolbar>
              <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="containertext">
            <strong>Welcome to CATRANSPORT, a plateform for staff transport</strong>
            <ion-button color="primary" @click="getUsers">GetUsers</ion-button>
             <div v-for="user of users" :key="user.id">
              <table class="table">
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>CIN</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td>{{user.id}}</td>
                  <td>{{user.nom}}</td>
                  <td>{{user.cin}}</td>
                  <td><ion-button @click="deleteUser(user.id)">Delete</ion-button></td>
                </tr>
              </table>
              
              <hr>
            </div>
            <ion-progress-bar type="indeterminate"> Wait Please</ion-progress-bar>
        <hr>
      </div>
      <ion-button id="open-modal" expand="block">Open</ion-button>
    <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
      <ion-header>
        <ion-toolbar>
          <ion-buttons >
            <ion-button @click="cancel()">Cancel</ion-button>
          </ion-buttons>
          <ion-title>Welcome</ion-title>
          <ion-buttons >
            <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-label position="stacked">Enter your name</ion-label>
          <ion-input ref="input" type="text" placeholder="Your name"></ion-input>
        </ion-item>
      </ion-content>
    </ion-modal>
    </ion-content>
    <ion-segment value="all">
      <ion-segment-button value="all">
        All
      </ion-segment-button>
      <ion-segment-button value="favorites">
        Favorites
      </ion-segment-button>
    </ion-segment> 
  </ion-page>
</template>

<script>
import {IonButtons,IonSegment, IonSegmentButton, IonLabel, IonIcon, IonButton, IonModal, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, menuController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { menu } from 'ionicons/icons';
import  '@ionic/vue';
import axios from 'axios'


export default defineComponent({
  name: 'HomePage',
  components: {
    IonButtons,
    IonButton,
    IonModal,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    
},
data() {
      return {
        users : [],
        message: 'This modal example uses triggers to automatically open a modal when the button is clicked.',
        transport: [],
      };
    },
methods: {
  openMenu() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    },
    cancel() {
        this.$refs.modal.$el.dismiss(null, 'cancel');
      },
    confirm() {
        const name = this.$refs.input.$el.value;
        this.$refs.modal.$el.dismiss(name, 'confirm');
      },
    getUsers() {
      axios.get('http://localhost:8080/getAllUsers.php').then(response => {
      console.log(response.data);
      this.users = response.data;
      })
    },
    getTransports() {
      axios.get('http://localhost:8080/getAllTransports.php').then(response => {
      console.log(response.data);
      this.transport = response.data;
      })
    },
    getUserById() {
      axios.get('http://localhost:8080/getUserById.php?id={{id}}').then(response => {
      console.log(response.data);
      this.users = response.data;
      })
    }, 
    deleteUser(userId) {
      axios.get('http://localhost:8080/deleteUserById.php?id='+userId).then(response => {
      console.log(response.data);
      this.users = response.data;
      })
    },
    registerUser(data){
      axios.post('http://localhost:8080/registerUser.php', data).then(response => {
      console.log(response.data);
      this.users = response.data;
      })
    },
},

setup() {
    return { menu };
},
setup2() {
    const beforeTabChange = () => {
      // do something before tab change
    }
    const afterTabChange = () => {
      // do something after tab change
    }
    return {
      beforeTabChange,
      afterTabChange
    }
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
#containertext {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(70, 26, 117);
}
.table {
  width: 50%;
  border-collapse: collapse;
  margin: auto;
}

</style>
