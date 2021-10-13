function Pagination() {
  return (
    <div>
      <ul className="flex items-center justify-center mt-10">
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
          <a className="flex items-center font-bold" href="d">
            <span className="mx-1">previous</span>
          </a>
        </li>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
          <a className="font-bold" href="d">
            1
          </a>
        </li>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
          <a className="font-bold" href="d">
            2
          </a>
        </li>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
          <a className="font-bold" href="d">
            3
          </a>
        </li>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
          <a className="flex items-center font-bold" href="d">
            <span className="mx-1">Next</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
