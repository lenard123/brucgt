import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Router from "./routes/Router";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

//Set the default indicator
Spin.setDefaultIndicator(<LoadingOutlined style={{ fontSize: '48px' }} />)

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
