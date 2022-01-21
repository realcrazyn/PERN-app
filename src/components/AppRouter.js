import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Context } from '..'
import { Shop } from '../pages/Shop'
import { authRoutes, publicRoutes } from '../routes'

export const AppRouter = () => {
  const { user } = useContext(Context)

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route path={path} key={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} key={path} element={<Component />} />
      ))}
      <Route path="*" element={<Shop />} />
    </Routes>
  )
}
