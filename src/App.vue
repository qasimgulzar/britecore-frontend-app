<template>
  <div id="app">
    <risk-form></risk-form>
    <field-form></field-form>
    <risk-value-form></risk-value-form>
  </div>
</template>

<script>
  import RiskFormComponent from './components/RiskFormComponent.vue';
  import FieldFormComponent from './components/FieldFormComponent.vue'
  import AddValueRiskFormComponent from './components/AddValueRiskFormComponent.vue'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      'risk-form':RiskFormComponent,
        'field-form':FieldFormComponent,
        'risk-value-form':AddValueRiskFormComponent
    }
  }
</script>

<style lang="scss">

</style>
