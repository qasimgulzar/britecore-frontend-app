<template>
  <div id="table-component" class="container">
    <table class="table">
      <thead>
      <tr>
        <th v-for="field in fields" class="text-uppercase">
          {{field.field_name}}
        </th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="d in data">
          <td v-for="field in fields">
            {{d[field.field_name]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default{
    name:'table-component',
    props:['fields','data'],
    data(){
      return {
        }
      }
    }
</script>
<style lang="scss">

</style>
