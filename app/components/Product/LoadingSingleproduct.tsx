export const LoadingSingleproduct = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 md:px-8 py-10 px-2">
      {/* Image shimmer */}
      <div className="w-full h-80 bg-gray-200 rounded-md"></div>
      {/* Heading and rate */}
      <div>
        <div className="flex justify-between px-4 w-full">
          <div className="flex mt-2">
            <h1 className="w-2 h-2 bg-gray-200"></h1>
            <h1 className="w-2 h-2 bg-gray-200"></h1>
          </div>
          <div className="flex mt-2 gap-1">
            <h1 className="w-3 h-3 rounded-full bg-gray-200"></h1>
            <h1 className="w-3 h-3 rounded-full bg-gray-200"></h1>
            <h1 className="w-3 h-3 rounded-full bg-gray-200"></h1>
            <h1 className="w-3 h-3 rounded-full bg-gray-200"></h1>
          </div>
        </div>
        <div className="px-2 py-2 flex flex-col gap-2">
          <h1 className="w-full h-2 bg-gray-200"></h1>
          <h1 className="w-full h-2 bg-gray-200 mt-2"></h1>
          <h1 className="w-full h-2 bg-gray-200"></h1>
          <h1 className="w-full h-2 bg-gray-200"></h1>
        </div>
        <div className="flex justify-between items-center px-2 py-2 mt-4">
          <h1 className="w-20 h-2 bg-gray-200 rounded-md"></h1>
          <h1 className="w-20 h-2 bg-gray-200 rounded-md"></h1>
        </div>
        <div className="w-full flex justify-center items-center py-5">
            <div className="w-50 h-10 bg-gray-200 rounded-md "></div>
          </div>
      </div>
    </div>
  );
};
