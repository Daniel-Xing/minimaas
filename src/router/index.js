import Vue from 'vue'
import Router from 'vue-router'
import ModelTraining from '@/views/ModelTraining'
import ModelEvaluation from '@/views/ModelEvaluation'
import ModelDeployment from '@/views/ModelDeployment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/training',
      name: 'Training',
      component: ModelTraining
    },
    {
      path: '/evaluation',
      name: 'Evaluation',
      component: ModelEvaluation
    },
    {
      path: '/deployment',
      name: 'Deployment',
      component: ModelDeployment
    }
  ]
})
