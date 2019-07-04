import Vue from 'vue'
import Router from 'vue-router'
import Employee from '@/components/employee.component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employee',
      component: Employee
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
