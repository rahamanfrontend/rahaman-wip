const Search = () => {
   return (
      <div className="flex items-start w-full h-10 relative  bg-gray-50 rounded-md">
         <input
            type="text"
            className="bg-gray-50 px-3 lg:w-[605px] pl-[38px] py-[10px] h-full w-full text-black placeholder:text-gray-500 font-inter lg:text-sm text-xs rounded-md outline-none border-none"
            name=""
            placeholder="Search here..."
            id=""
         />
         <div>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               viewBox="0 0 20 20"
               className="absolute left-5 top-1/2  -translate-x-1/2 -translate-y-1/2"
               fill="none"
            >
               <path
                  d="M17 17L12.3333 12.3333M13.8889 8.44444C13.8889 11.4513 11.4513 13.8889 8.44444 13.8889C5.43756 13.8889 3 11.4513 3 8.44444C3 5.43756 5.43756 3 8.44444 3C11.4513 3 13.8889 5.43756 13.8889 8.44444Z"
                  stroke="#475367"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
            </svg>
         </div>
      </div>
   );
};

export default Search;
