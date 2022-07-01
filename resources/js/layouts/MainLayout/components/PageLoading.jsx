import { Spin } from "antd";


export default function PageLoading()
{
    return (
        <div className="flex justify-center items-center h-[75vh]">
            <Spin 
                tip='Please wait'
            />
        </div>
    )
}