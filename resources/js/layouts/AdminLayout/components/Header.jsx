import { Avatar } from "antd";

export default function Header() {

    return (

        <div className="h-16 bg-white shadow flex-shrink-0 z-10">
            <div className="flex items-center justify-between h-full">
                <div>
                </div>
                <div className="px-4">
                    <Avatar size="large" src="https://avatars.dicebear.com/api/initials/juan+dela+cruz.svg" />
                </div>
            </div>
        </div>
    )
}