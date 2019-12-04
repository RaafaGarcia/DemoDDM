<template>
<div  class="col-sm-12">
  <ul>
    <li v-for="message in messages " style="background:whitesmoke;width:300px;border-radius:10px;" :key="message.id">
      <h3>{{message.tittle}}</h3>
      <p>{{message.text}}</p> 
    </li>
  </ul>
 
</div>
    
</template>
<script>
import { hostname } from '@/data/hostinger.js';
  import {all} from '@/data/messages';
 
 

  export default {
    subscriptions(){
      return{
      messages:all()
      }
    },
		

}
</script>
<style >
button.page-link {
	display: inline-block;
}
button.page-link {
    font-size: 20px;
    color: #29b3ed;
    font-weight: 500;
}
.offset{
  width: 500px !important;
  margin: 20px auto;  
}
</style>