<template>
  <div id="risk-form-component" class="container">
    <form v-on:submit="createRisk">
      <div class="form-group">
        <input type="text" class="form-control" id="risk-name" placeholder="Enter Risk Name ..." v-model="riskName" required>
      </div>
      <div class="form-group">
        <button class="form-control btn btn-lg btn-success">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
  import AxioInstance from '../services/risk.service.ts'

  export default{
    name: 'risk-form-component',
    data(){
      return {
        riskName: null
      };
    },
    methods:{
      createRisk(event){
        event.preventDefault();
        let  payload={
          name:this.riskName
        }
      AxioInstance.post('/insurers/',payload).then((response)=>{
        console.log(response);
      }).catch((response)=>{
          console.log(response);
        });
      }
    },

    created(){

    }

  }
</script>

<style lang="scss">

</style>
