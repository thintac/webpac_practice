<template>
  <p>{{ message }}</p>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  data: () => {
    console.log('Vue.js is installed');
    return{
      message:'Hey,this is Vue!',
    };
  },
};
</script>

<style scoped>
p {
  color:green;
}
</style>
