<template>
  <div class="container" id="field-form-component">
    <form v-on:submit="createRiskField">
      <div class="form-group">
        <select name="insurer" v-model="field.insurres" class="form-control" required>
          <option v-for="risk in insurers" v-bind:value="risk.id">{{risk.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="risk-field-name" placeholder="Enter Risk Field Name ..." v-model="field.field_name" required>
      </div>
      <div class="form-group">
        <select v-model="field.dtype" class="form-control" required>
          <option>NUMBER</option>
          <option>TEXT</option>
          <option>DATE</option>
          <option>ENUM</option>
        </select>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="risk-field-default" placeholder="Enter field default value ..." v-model="field.default">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="risk-field-options" placeholder="Add options seprated with ," v-model="field.options" :disabled="field.dtype!=='ENUM'" :required="field.dtype=='ENUM'">
      </div>
      <div class="form-group">
        <button class="form-control btn btn-lg btn-success">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
  import AxioInstance from '../services/risk.service.ts';
  var defaultField={
    field_name:null,
    dtype:'Number',
    default:null,
    insurres:null,
    options:null
  };
  export default{
    name:'field-form-component',
    props:['risk'],
    data(){
      return {
        insurers:[],
        field:Object.create(defaultField)
      };
    },
    methods:{
      createRiskField(event){
        event.preventDefault();
        let _this=this;
        AxioInstance.post('/fields/',this.field)
          .then((response)=>{
          _this.field=Object.create(defaultField);
        })
        .catch((response)=>{
          console.log(response.data);
        })
      }
    },

    created(){
      AxioInstance.get('/insurers/').then((response)=>{
        this.insurers=response.data;
      });
    this.$watch('risk',(newVal)=>{
      this.field=Object.create(defaultField);
      this.field.insurres=newVal.id;
    });
    }
  }
</script>

<style lang="scss">

</style>
