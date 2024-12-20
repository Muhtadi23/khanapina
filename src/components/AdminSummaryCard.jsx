import { PiDotsThreeOutlineLight } from "react-icons/pi";
const AdminSummaryCard = ({ type }) => {
    return (
        <div className="rounded-2xl shadow-lg  p-4 gap-4 flex-1 min-w-[130px]">
            <div className="flex justify-between">
                <span className="text-sm px-2 py-1 rounded-full bg-orange-400">2024/25</span>
                <span><PiDotsThreeOutlineLight /></span>
            </div>
            <h1 className="text-2xl font-semibold my-4">$25235</h1>
            <h3 className="capitalize text-sm font-medium">{type}</h3>
        </div>
    );
};

export default AdminSummaryCard;