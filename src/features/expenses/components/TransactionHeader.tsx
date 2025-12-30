export default function TransactionHeader({ onAddClick }: { onAddClick: () => void })
{
  return(
  <div className="p-5 border-b border-gray-200 flex flex-col xl:flex-row gap-4 justify-between items-center bg-white">
    <div className="flex items-center gap-3 w-full xl:w-auto">
      <h3 className="text-lg font-bold text-slate-900  whitespace-nowrap">
        Recent Transactions
      </h3>
    </div>

    <div className="flex flex-wrap gap-3 w-full xl:w-auto justify-end items-center">
      
      <div className="relative group grow xl:grow-0">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-gray-400 text-[20px]!">search</span>
        </div>
        <input 
          className="block w-full xl:w-64 pl-10 pr-3 py-2 border border-gray-300  rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition duration-150 ease-in-out text-slate-700" 
          placeholder="Search by title..." 
          type="text"
        />  
      </div>

      <div className="relative flex items-center grow sm:grow-0">
        <select className="appearance-none w-full bg-white text-slate-700  text-sm border border-gray-300 rounded-lg pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
          <option value="">All Categories</option>
          <option value="housing">Housing</option>
          <option value="food">Food</option>
        </select>
        <span className="material-symbols-outlined absolute right-2 pointer-events-none text-gray-400 text-[20px]!">
          keyboard_arrow_down
        </span>
      </div>

      <div className='relative flex items-center grow sm:grow-0'>
        <input 
          className="block w-full px-3 py-2 border border-gray-300  rounded-lg text-sm bg-white text-slate-700  focus:outline-none focus:ring-2 focus:ring-blue-500" 
          type="date"
        />
      </div>

      <button onClick={onAddClick} className="flex cursor-pointer items-center justify-center rounded-lg h-10.5 px-4 bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white gap-2 text-sm font-bold shadow-md shadow-blue-500/30 whitespace-nowrap w-full sm:w-auto">
        <span className="material-symbols-outlined text-[20px]!">add</span>
        <span>Add Expense</span>
      </button>
      
    </div>
  </div>
);
}
