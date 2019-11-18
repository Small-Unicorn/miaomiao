export default {
    path:'/cinema',
    name:'cinema',
    component:() => import ('@/views/Cinema'),
    children:[
      {
       path:'cinemaList',
       component:() => import ('@/components/CinemaList')
      },
      {
        path:'brand',
        component:() => import ('@/views/Brand')
      },
      {
        path:'feature',
        component:() => import ('@/views/Feature')
      },
      {
        path:'/cinema',
        redirect:'/cinema/cinemaList'
      }
    ]
  }