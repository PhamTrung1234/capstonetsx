
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'flowbite';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter} from "react-router-dom"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import  {store}  from './store/index.tsx'
import {Provider} from "react-redux"

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
)
