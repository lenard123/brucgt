import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useEffect, useMemo } from "react";


function App() {

  const queryClient = useMemo(() => new QueryClient(), [])

  useEffect(() => {
    //Set the default indicator
    Spin.setDefaultIndicator(<LoadingOutlined style={{ fontSize: '48px' }} />)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
