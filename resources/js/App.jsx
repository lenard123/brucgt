import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from "./services/Auth";

const queryClient = new QueryClient()

//Set the default indicator
Spin.setDefaultIndicator(<LoadingOutlined style={{ fontSize: '48px' }} />)

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
