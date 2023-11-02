<!-- 
<template>
    <v-app>
      <v-btn @click="fetchData"> Obtener datos de la API </v-btn>
      <v-container>
        <v-row>
          <v-col
            v-for="(item, index) in apiData"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card>
              <v-card-title>{{ item.name }}</v-card-title>
              <v-img :src="item.image"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  
  import axios from 'axios'
  
    export default {
  
      data() {
        return {
          apiData: [],
        };
      },
      methods: {
        async fetchData() {
          try {
            const response = await axios.get('https://hp-api.onrender.com/api/spells');
            this.apiData = response.data;
          } catch (error) {
            console.error('Error al obtener datos de la API:', error);
          }
        },
      },
    };
  </script>
  -->