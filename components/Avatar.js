import Image from "next/image"
import { useMoralis } from "react-moralis"
import { useSetRecoilState } from "recoil"
import { pfpModalState } from "../atoms/pfpModalAtom"

const Avatar = ({ username, changePfpOnPress }) => {
    const { user } = useMoralis();
    const setOpen = useSetRecoilState(pfpModalState);

    return (
        <Image
            onClick={() => changePfpOnPress && setOpen(true)}
            src={changePfpOnPress && user.get("profilePicture") ? user.get("profilePicture") : `https://avatars.dicebear.com/api/pixel-art/${username || user.getUsername()}.svg`}
            layout="fill"
            className="rounded-full bg-black cursor-pointer hover:opacity-75"
        />
    )
}

export default Avatar