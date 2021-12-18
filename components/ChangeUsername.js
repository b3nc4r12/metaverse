import { useRecoilState } from "recoil"
import { usernameModalState } from "../atoms/usernameModalAtom"

const ChangeUsername = () => {
    const [open, setOpen] = useRecoilState(usernameModalState);

    return (
        <div className="text-sm hover:text-gray-300">
            <button
                disabled={open}
                onClick={() => setOpen(true)}
            >
                Change your username
            </button>
        </div>
    )
}

export default ChangeUsername