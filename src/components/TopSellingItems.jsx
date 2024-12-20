import React from 'react';

const TopSellingItems = () => {
    return (
        <div className=''>
            <h1 className='p-4'>Top Selling Items</h1>
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">#</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Item Name</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Price</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white hover:bg-gray-50">
                        <td className="px-4 py-2 text-sm text-gray-700">1</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Apple</td>
                        <td className="px-4 py-2 text-sm text-gray-700">$1.50</td>
                        <td className="px-4 py-2 text-sm text-green-600">Available</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="px-4 py-2 text-sm text-gray-700">5</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Watermelon</td>
                        <td className="px-4 py-2 text-sm text-gray-700">$3.00</td>
                        <td className="px-4 py-2 text-sm text-red-500">Unavailable</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="px-4 py-2 text-sm text-gray-700">5</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Watermelon</td>
                        <td className="px-4 py-2 text-sm text-gray-700">$3.00</td>
                        <td className="px-4 py-2 text-sm text-red-500">Unavailable</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="px-4 py-2 text-sm text-gray-700">5</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Watermelon</td>
                        <td className="px-4 py-2 text-sm text-gray-700">$3.00</td>

                        <td className="px-4 py-2 text-sm text-green-600">Available</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="px-4 py-2 text-sm text-gray-700">5</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Watermelon</td>
                        <td className="px-4 py-2 text-sm text-gray-700">$3.00</td>

                        <td className="px-4 py-2 text-sm text-red-500">Unavailable</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TopSellingItems;