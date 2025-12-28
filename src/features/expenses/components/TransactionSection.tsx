import Card from '../../../components/Card';
import TransactionHeader from './TransactionHeader';

export default function SummaryCard()
{
  return (
    <Card className="p-0! overflow-hidden">
      <TransactionHeader />
      <div className="overflow-x-auto">
        <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Category</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Amount</th>
                    <th className="relative px-6 py-3" scope="col">
                    <span className="sr-only">Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-surface-light dark:bg-surface-dark divide-y divide-gray-200 dark:divide-gray-800">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Oct 24, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                            <span className="material-symbols-outlined">restaurant</span>
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-slate-900 dark:text-white">Starbucks Coffee</div>
                                <div className="text-xs text-gray-500">
                                Coffee &amp; Breakfast
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                            Food &amp; Dining
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold text-slate-900 dark:text-white">
                        Rs. 14.50
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="relative flex items-center justify-center group">
                            <span className="absolute bottom-full mb-2 hidden group-hover:flex items-center 
                            bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            Click for options
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                            </span>
                            <button className="text-gray-400 hover:text-blue-600 hover:bg-blue-50  rounded-full transition-colors">
                                <span className="material-symbols-outlined text-xl block cursor-pointer">more_vert</span>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </Card>
  );
};