import AdminSummaryCard from '@/components/AdminSummaryCard';
import CountCharts from '@/components/CountCharts';
import IncomeCharts from '@/components/IncomeCharts';
import SideCalender from '@/components/SideCalender';
import TopSellingItems from '@/components/TopSellingItems';


const AdminDashboard = () => {
    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row'>
            {/* left */}
            <div className='w-full lg:w-2/3'>

                <div className='flex gap-4 justify-between flex-wrap'>
                    <AdminSummaryCard type="Total Sale" />
                    <AdminSummaryCard type="Total Orders" />
                    <AdminSummaryCard type="Total Pending Order" />
                    <AdminSummaryCard type="Total Completed Order" />
                    <AdminSummaryCard type="Total User" />
                </div>

                <div className='flex gap-6 flex-col lg:flex-row'>
                    <div className='w-full lg:w-2/5 h-[450px]'>
                        <CountCharts></CountCharts>
                    </div>
                    <div className='w-full lg:w-3/5 h-[450px]'>
                        <IncomeCharts></IncomeCharts>
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row gap-4'>
                    <div className='w-full lg:w-1/2 h-[450px]'>
                        <TopSellingItems></TopSellingItems>
                    </div>
                    <div className='w-full lg:w-1/2 h-[450px]'>
                        <TopSellingItems></TopSellingItems>
                    </div>


                </div>

            </div>

            {/* right */}
            <div className='w-full lg:w-1/3 flex flex-col gap-8'>
                <SideCalender></SideCalender>
                <h1>Accordian</h1>
            </div>
        </div>
    );
};

export default AdminDashboard;