<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useStore } from 'vuex';
import { addSecret } from '@/utils/sysUtils';

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  created(){
   const store =  useStore();
   store.dispatch("common/loginRequest",{userName:"Admin",password:addSecret("Admin")}).then(res=>{
     console.log(res)
   })
  }
}
</script>
