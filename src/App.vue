<template>
  <div id="app" class="container-fluid">
    <div class="page-header">
      <h1>BriteCore</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div>
            <h5>Add Risk</h5>
            <risk-form></risk-form>
          </div>
          <div>
            <h5>Add Field</h5>
            <field-form :risk="risk"></field-form>
          </div>
          <div>
            <h5>Add New Risk</h5>
            <risk-value-form :insurer="risk"></risk-value-form>
          </div>
        </div>
        <div class="col-sm-9">
          <select-risk-component @onRiskChange="onRiskChange"></select-risk-component>
          <table-component :fields="fields" :data="data"></table-component>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import RiskFormComponent from './components/RiskFormComponent.vue';
  import FieldFormComponent from './components/FieldFormComponent.vue'
  import AddValueRiskFormComponent from './components/AddValueRiskFormComponent.vue'
  import TableComponent from './components/TableComponent.vue'
  import SelectRiskComponent from './components/SelectRiskComponent.vue';
  import AxioInstance from './services/risk.service.ts';
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        fields:[],
        data:[],
        risk:undefined
      }
    },
    methods:{
      onRiskChange(risk){
        this.risk=risk;
        this.fields=risk.fields;
        AxioInstance.get('/risks/',{params:{risk:risk.id}}).then((response)=>{
          this.data=[];
          this.data=response.data;
        });
      }
    },
    components:{
      'risk-form':RiskFormComponent,
        'field-form':FieldFormComponent,
        'risk-value-form':AddValueRiskFormComponent,
        'table-component':TableComponent,
        'select-risk-component':SelectRiskComponent,
    },
    created(){

    }
  }
</script>

<style lang="scss">

</style>
