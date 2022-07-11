

export default function AdminContainer({ children, className = '', ...props })
{
    return (
        <div className={`py-4 sm:p-4 sm:mt-4 max-w-screen-lg mx-auto ${className}`} {...props}>
            {children}
        </div>
    )
}