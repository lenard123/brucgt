

export default function UploadButton({ children, className, ...props })
{
    return (
        <label className={`flex rounded border border-gray-300 cursor-pointer ${className}`} {...props}>
            <div className="py-2 px-3 text-gray-600 font-semibold bg-gray-200 text-sm border-r border-gray-300">Browse</div>
            <div className="py-2 px-3 text-gray-600 text-sm font-semibold w-full">
                {children}
            </div>
        </label>
    )
}