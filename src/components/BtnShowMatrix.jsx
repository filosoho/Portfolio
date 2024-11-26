const BtnShowMatrix = ({ isHeaderVisible, setIsHeaderVisible }) => (
  <button
    className="relative bg-black bg-opacity-70 mt-0 left-0 text-xs text-white w-[110px] p-2.5 rounded cursor-pointer border border-white z-50 
  md:left-[2.5rem] md:mt-[-6.5rem] sm:text-sm sm:w-[100px] sm:p-2 
  xs:text-[10px] xs:w-[80px] xs:p-1"
    onClick={() => setIsHeaderVisible((prev) => !prev)}
  >
    {isHeaderVisible ? "Show Matrix" : "Hide Matrix"}
  </button>
);
export default BtnShowMatrix;
