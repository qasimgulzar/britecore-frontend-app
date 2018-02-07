<template>
  <div id="add-value-risk-form" class="container">
      <div class="form-group">
        <select name="insurer" class="form-control" v-model="insurer" required v-on:change="insurerChanged">
          <option v-for="risk in insurers" v-bind:value="risk">{{risk.name}}</option>
        </select>
      </div>
    <form v-on:submit="saveRiskValue" v-if="insurer!=undefined">
      <div class="form-group">
        <div class="form-group" v-for="field in insurer.fields">
          <input class="form-control"  v-if="field.dtype!=='ENUM'" v-bind:type="field.dtype" v-bind:placeholder="field.field_name" v-model="payload[field.field_name]">
          <select class="form-control"  v-if="field.dtype==='ENUM'" v-model="payload[field.field_name]">
            <option v-for="option in (''+field.options).split(',')" v-bind:value="option">{{option}}</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <button class="form-control btn btn-lg btn-success">Save</button>
      </div>
    </form>
  </div>
</template>
<script>
  import AxioInstance from '../services/risk.service.ts';
  export default{
    name:"add-value-risk-form-component",
    props:['insurer'],
    data(){
      return {
        insurers:[],
        fields: [],
        payload:{}
      };
    },
    methods:{
      saveRiskValue(event){
        event.preventDefault();
        this.payload.insurer=this.insurer.id;
        AxioInstance.post('/risks/',this.payload).then((response)=>{
          this.payload={};
          this.$emit("onSubmit",this.insurer);
      });
      },
      insurerChanged(){
        this.payload={insurer:this.insurer.id};
        this.insurer.fields.forEach((field, index) =>{
          this.payload[field.field_name]=field.default;
        });
      }
    },
    created(){
      this.$watch('insurer',(newVal)=>{
        AxioInstance.get('/insurers/').then((response)=>{
          this.insurers=response.data;
        });
      });
    }
  }
</script>
<style lang="scss">

</style>
