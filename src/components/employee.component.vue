<template>
  <div class="employee">
    <employee-form></employee-form>
    <employee-list></employee-list>
  </div>
</template>

<script>
import EmployeeForm from './employee-form/employee-form.component';
import EmployeeList from './employee-list/employee-list.component';
export default {
  name: 'Employee',
  components:{
    EmployeeForm,
    EmployeeList
  },
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
