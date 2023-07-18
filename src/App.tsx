import { FC, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/index.tsx'

const App: FC = () => {
  const element = useRoutes(routes)

  return (
    <div className="app">
      <Suspense fallback={'Loading...'}>{element}</Suspense>
    </div>
  )
}

export default App
