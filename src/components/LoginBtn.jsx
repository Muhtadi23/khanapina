import { Button } from "@mui/material";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const LoginBtn = () => {
    return (
        <div className="max-w-[400px] mx-auto flex flex-col gap-2 p-4">
            <Button variant="outlined" className="flex items-center gap-2">
                <span className="text-xl"><FcGoogle /></span>
                <span className="text-black">Continue with Google</span>
            </Button>
            <Button variant="outlined" className="flex items-center gap-2">
                <span className="text-xl"> <BsFacebook /></span>
                <span className="text-black">Continue with Google</span>
            </Button>
            <Button variant="outlined" className="flex items-center gap-2">
                <span className="text-xl"><FaSquareXTwitter /></span>
                <span className="text-black">Continue with Google</span>
            </Button>
        </div>

    );
};

export default LoginBtn;