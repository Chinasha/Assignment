<template>
  <div class="employee-form">
    <div class="employee-heading">EMPLOYEE FORM</div>
    <form id="employee-form" v-if="showForm">
      <div class="employee-id form-input">
        <label class="width33 txtleft">Employee ID <span class="required">*</span></label>
        <input
          type="text"
          v-validate="{ required: true,numeric:true }"
          name="id"
          id="id"
          class="form-control width33"
          v-model="employeeForm.id"
        />
        <span class="width33 required txtleft">{{ errors.first('id') }}</span>
      </div>
      <div class="employee-name form-input">
        <label class="width33 txtleft">Employee Name <span class="required">*</span></label>
        <input
          type="text"
          v-validate="{ required: true }"
          name="name"
          id="name"
          class="form-control width33"
          v-model="employeeForm.name"
        />
        <span class="width33 required txtleft">{{ errors.first('name') }}</span>
      </div>
      <div class="employee-avatar form-input">
        <label class="width33 txtleft">Employee Avatar</label>
        <input
          type="text"
          name="avatar"
          id="avatar"
          class="form-control width33"
          v-model="employeeForm.avatar"
        />
      </div>
      <div class="employee-email form-input">
        <label class="width33 txtleft">Employee Email Address <span class="required">*</span></label>
        <input
          type="text"
          v-validate="{ required: true,email:true }"
          name="email"
          id="email"
          class="form-control width33"
          v-model="employeeForm.email"
        />
        <span class="width33 required txtleft">{{ errors.first('email') }}</span>
      </div>
      <div class="employee-mobile form-input">
        <label class="width33 txtleft">Employee Mobile No <span class="required">*</span></label>
        <input
          type="text"
          v-validate="{ required: true,max:10,numeric:true }"
          name="mobile"
          id="mobile"
          class="form-control width33"
          v-model="employeeForm.mobile"
        />
        <span class="width33 required txtleft">{{ errors.first('mobile') }}</span>
      </div>
      <div class="employee-responsibility form-input">
        <label class="width33 txtleft">Responsibility(skills,role)</label>
        <textarea
          maxlength="200"
          name="responsibility"
          id="responsibility"
          class="form-control width33"
          v-model="employeeForm.responsibility"
        ></textarea>
      </div>
      <button class="submit-button" @click.prevent="submitDetails()">SUBMIT DETAILS</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "EmployeeForm",
  data() {
    return {
      showForm:true,
      employeeForm: {
        id: "",
        name: "",
        avatar: "",
        email: "",
        mobile: "",
        responsibility: ""
      }
    };
  },
  methods: {
    submitDetails() {
      this.$validator.validate().then(valid => {
        if (valid) {
          let intialEmployeeData = this.$store.getters.getEmployeeData;
          intialEmployeeData.push(this.employeeForm);
          this.$store.commit("setEmployeeData", intialEmployeeData);
          localStorage.setItem(
            "setEmployeeData",
            JSON.stringify(intialEmployeeData)
          );
          this.showForm = false;
          this.employeeForm = {
            id: "",
            name: "",
            avatar: "",
            email: "",
            mobile: "",
            responsibility: ""
          };
          this.showForm = true;
        }
      });
    }
  }
};
</script>
<style scoped>
.employee-heading {
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 20px;
}
.employee-form {
  width: 50%;
  margin-left: 30%;
  padding: 20px;
}
</style>

