import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Router from "./Router";

Spin.setDefaultIndicator(<LoadingOutlined style={{fontSize: '48px'}}/>)

function App() {  
  return (
    <Router/>
  )
}

export default App
