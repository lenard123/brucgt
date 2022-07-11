import { Typography } from "antd";


export default function AdminHeader({ children, title, className = '', ...props })
{
    return (
        <div className={`bg-white py-4 px-6 rounded shadow flex flex-col sm:flex-row justify-between ${className}`} {...props}>
            <Typography.Title className="uppercase" level={4}>{title}</Typography.Title>
            {children}
        </div>
    )
}