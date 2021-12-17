import Image from "next/image"
import { useMoralis } from "react-moralis"

const Avatar = ({ username, logoutOnPress }) => {
    const { user, logout } = useMoralis();

    return (
        <Image
            onClick={() => logoutOnPress && logout()}
            src={`https://avatars.dicebear.com/api/pixel-art/${username || user.getUsername()}.svg`}
            layout="fill"
            className="rounded-full bg-black cursor-pointer hover:opacity-75"
        />
    )
}

export default Avatar
