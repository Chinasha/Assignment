<template>
  <div class="employee-form-edit">
    <div id="overlay"></div>
   <form id="employee-form">
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
  name: "EmployeeFormEdit",
  props: ["editedIndex"],
  data() {
    return {
      selectedIndex: -1,
      employeeForm: {}
    };
  },
  created() {
    this.selectedIndex = this.editedIndex;
    this.employeeForm = {
      ...this.$store.getters.getEmployeeData[this.selectedIndex]
    };
  },
  methods: {
    submitDetails() {
      this.$validator.validate().then(valid => {
        if (valid) {
          let intialEmployeeData = this.$store.getters.getEmployeeData;
          intialEmployeeData[this.selectedIndex] = this.employeeForm;
          this.$store.commit("setEmployeeData", intialEmployeeData);
          localStorage.setItem(
            "setEmployeeData",
            JSON.stringify(intialEmployeeData)
          );
          this.$emit("closeOverLay", false);
        }
      });
    }
  }
};
</script>
<style scoped>
#overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0%;
  background: black;
  opacity: 0.6;
}
#employee-form{
    width: 40%;
    background: white;
    z-index: 99999;
    position: fixed;
    top:10%;
    left: 33%;
    padding: 30px;

}
</style>


