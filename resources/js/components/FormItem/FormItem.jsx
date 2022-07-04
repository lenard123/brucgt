import { Form } from "antd"

export default function FormItem({error = {}, name, ...props})
{
    let errorMessage = error[name] || {}
    return <Form.Item name={name} {...props} {...errorMessage}/>
}