<template>
  <div class="">
    <ul>
      <li>Home</li>
      <li>About</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{

}
ul{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
li{
  display: inline;
  margin: 10px;
}
</style>
