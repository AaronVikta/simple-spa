<template>
  <ul>
    <li v-for="user in users" :key="user">
      {{user.name}}
    </li>
  </ul>
</template>

<script>
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
  }
}
</script>

<style lang="css" scoped>
</style>
