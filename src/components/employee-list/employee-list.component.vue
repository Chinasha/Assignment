<template>
  <div class="employee-list" v-if="employeeListData.length  > 0">
    <div class="employee-heading">ADDED EMPLOYEE DETAILS</div>
    <table class="added-employee-table">
      <tr>
        <th>Employee Name</th>
        <th>Employee Avatar</th>
        <th>Employee Responsibility</th>
        <th>Actions</th>
      </tr>
      <tr v-for="(employee,index) in employeeListData" :key="index">
        <th class="fw400">{{employee.name}}</th>
        <th class="fw400">
          <img class="employee-avatar" v-if="employee.avatar.length>0 " :src=" employee.avatar" />
          <img
            class="employee-avatar"
            v-if="!employee.avatar ||employee.avatar.length ==0"
            src="../../assets/default-avatar.png"
          />
        </th>
        <th class="fw400">{{employee.responsibility}}</th>
        <th>
          <button class="edit-button" @click="editEmployee(index)">Edit</button>
          <button class="edit-button" @click="deleteEmployee(index)">Delete</button>
        </th>
      </tr>
    </table>
    <employee-form-edit
      v-if="editFormShow"
      :editedIndex="editedIndex"
      @closeOverLay="editFormShow=false;editedIndex=-1"
    ></employee-form-edit>
  </div>
</template>
<script>
import EmployeeFormEdit from "../employee-form-edit.component/employee-form-edit.component";
export default {
  name: "EmployeeList",
  components: {
    EmployeeFormEdit
  },
  data() {
    return {
      editFormShow: false,
      editedIndex: 0
    };
  },
  computed: {
    employeeListData() {
      return this.$store.getters.getEmployeeData;
    }
  },
  methods: {
    deleteEmployee(index) {
      this.employeeListData.splice(index, 1);
      this.$store.commit("setEmployeeData", this.employeeListData);
      localStorage.setItem(
        "setEmployeeData",
        JSON.stringify(this.employeeListData)
      );
    },
    editEmployee(index) {
      this.editedIndex = index;
      this.editFormShow = true;
    }
  }
};
</script>
<style scoped>
.added-employee-table {
  width: 60%;
  margin-left: 20%;
  padding: 20px;
}
.edit-button {
  width: 100px;
  height: 30px;
  background: #0000ff80;
  color: white;
  font-weight: bold;
  border: 0pc;
}
.fw400 {
  font-weight: 400;
}
.employee-avatar {
  width: 40px;
  height: 40px;
}
</style>
