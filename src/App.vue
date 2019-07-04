<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form-input {
  display: inline-flex;
  width: 100%;
  padding: 10px;
}
.width33 {
  width: 33%;
}
.txtleft {
  text-align: left;
}
.submit-button {
  width: 200px;
  height: 40px;
  background: #0000ff80;
  color: white;
  font-weight: bold;
  border: 0pc;
}
.required {
  font-size: 14px;
  font-weight: bold;
  color: red;
}
.employee-heading {
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 20px;
}
th,
td {
  border: 1px solid black;
  padding: 5px;
}
</style>
