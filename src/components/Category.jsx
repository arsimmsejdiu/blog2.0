function Category() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4 mt-12 mb-12">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Categories</h2>
      <div className="hidden lg:inline-flex items-center justify-center mb-10 space-x-3 text-gray-800 whitespace-nowrap">
        <p
          className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
        active:bg-red-50 transition transform duration-100 ease-out"
        >
          Config Manager
        </p>
        <p
          className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
        active:bg-red-50 transition transform duration-100 ease-out"
        >
          Windows
        </p>
        <p
          className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
        active:bg-red-50 transition transform duration-100 ease-out"
        >
          Azure Portal
        </p>
        <p
          className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
        active:bg-red-50 transition transform duration-100 ease-out"
        >
          Automation
        </p>
        <p
          className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
        active:bg-red-50 transition transform duration-100 ease-out"
        >
          Admin Service
        </p>
        <p
          className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
        active:bg-red-50 transition transform duration-100 ease-out"
        >
          Azure Active Directory
        </p>
        <p
          className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
        active:bg-red-50 transition transform duration-100 ease-out"
        >
          Azure Services
        </p>
        <p
          className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 
        active:bg-red-50 transition transform duration-100 ease-out"
        >
          Cloud Management Gateway
        </p>
      </div>
    </div>
  );
}

export default Category;
