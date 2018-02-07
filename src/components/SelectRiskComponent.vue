<template>
  <div id="select-risk-component" class="container">
    <div class="form-group">
      <select name="insurer" class="form-control" required v-model="insurer" v-on:change="change">
        <option v-for="risk in insurers" v-bind:value="risk">{{risk.name}}</option>
      </select>
    </div>
  </div>
</template>
<script>
  import AxioInstance from '../services/risk.service.ts';
  export default{
    name:'select-risk-component',
    data(){
      return {
        insurers:[],
        insurer: undefined
      }
    },
    created(){
      this.populate();
    },
  methods:{
    change(){
      this.$emit('onRiskChange',this.insurer);
    },
    populate(){
      AxioInstance.get('/insurers/').then((response)=>{
        this.insurers=response.data;
      if(this.insurers){
        this.insurer=this.insurers[0];
        this.$emit('onRiskChange',this.insurer);
      }
    });
    }
  }
  }
</script>
<style lang="scss">

</style>
