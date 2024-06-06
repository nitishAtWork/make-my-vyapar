import { lazy, useState, Suspense } from 'react'
import './App.css'
const Sitelayout = lazy(() => import('./layouts/Sitelayout'));
import { BrowserRouter } from 'react-router-dom';
const Preloader = lazy(() => import('./components/common/Preloader'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        {/* <Suspense
          fallback={<Preloader />}>
        </Suspense> */}
          <Sitelayout />
      </BrowserRouter>
    </>
  )
}

export default App
