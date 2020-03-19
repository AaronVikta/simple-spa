import UserList from './UserList'
import UserDetail from './UserDetails'
export const userRoutes=[
  {
    path:'/',
    component:UserList
  },
  {
    path:'/:userId',
    component:UserDetail
  }
]
