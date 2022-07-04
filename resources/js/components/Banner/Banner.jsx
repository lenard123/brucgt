
export default function Banner({ title }) {
    return (
        <div
            className="bg-cover bg-gray-700 bg-center text-center py-10"
            style={{ backgroundImage: 'url(/images/banner-ave.jpg)' }}
        >
            <span className="text-white text-3xl font-semibold">{ title }</span>
        </div>
    )
}