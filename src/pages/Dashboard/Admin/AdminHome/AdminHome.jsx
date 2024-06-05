const AdminHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-green-600">Admin Home</h1>

      <div className="p-6 py-12 dark:bg-indigo-600 dark:text-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">MAMBA</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
