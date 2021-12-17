import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"

const ChangeUsername = () => {
    const [open, setOpen] = useRecoilState(modalState);

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