<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{count}}</h2>
  </div>
</template>
<script>
import {state} from './../observable/store'
export default {
   data(){},
   computed:{
     count(){
       return state.count
     }
   }
}
</script>
