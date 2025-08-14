const NotFoundPage = () => (
  <div className="flex min-h-[70vh] flex-col items-center justify-center p-4 text-center">
    <Truck size={120} className="mb-6 text-orange-500" />
    <h1 className="mb-2 text-4xl font-bold">404 - Page Not Found</h1>
    <p className="text-lg text-gray-600 dark:text-gray-400">
      Oops! Looks like the tow truck couldn't find this page.
    </p>
  </div>
);

export default NotFoundPage;
