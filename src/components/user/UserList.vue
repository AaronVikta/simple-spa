<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <router-link :to="{path:`/${user.id}`}">
        {{user.name}}
      </router-link>
    </li>
  </ul>
</template>

<script>
import {API} from '../../utils/api'
export default {
  data(){
    return{
      users:[
        {
          id:1,
          name:'Aryan Vikta'
        },
        {
          id:2,
          name:'Chibuzor Ngele'
        },
        {
          id:3,
          name:'Kimberly May'
        }
      ]
    }
  },
  beforeRouteEnter(to,from, next){
    API.get(`users`)
    .then(response=>next(
      vm=> (vm.users= response.data)))
      .catch(error=>next(error));
  }
}
</script>

<style lang="css" scoped>
</style>
