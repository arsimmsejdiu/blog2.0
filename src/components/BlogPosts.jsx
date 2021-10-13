import Pagination from "./Pagination";

function BlogPosts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
      <article>
        <h2 className="text-2xl font-extrabold text-gray-900">Recent Posts</h2>
        <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className="relative w-full h-80 md:h-64 lg:h-44">
              <img
                src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg"
                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="px-3 py-4">
              <h3 className="text-sm text-gray-500 pb-2">
                <a
                  className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                  href="d"
                >
                  <span className="absolute inset-0"></span>
                  Basic Level
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="py-3">
              <a href="/d" class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  class="hidden object-cover w-7 h-7 mx-3 rounded-full sm:block"
                />
                <h1 class="font-bold text-gray-700 hover:underline">
                  Alex John
                </h1>
              </a>
            </div>
          </article>
          <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className="relative w-full h-80 md:h-64 lg:h-44">
              <img
                src="https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg.jpg"
                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="px-3 py-4">
              <h3 className="text-sm text-gray-500 pb-2">
                <a
                  className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                  href="d"
                >
                  <span className="absolute inset-0"></span>
                  Basic Level
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="py-3">
              <a href="/d" class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  class="hidden object-cover w-7 h-7 mx-3 rounded-full sm:block"
                />
                <h1 class="font-bold text-gray-700 hover:underline">
                  Alex John
                </h1>
              </a>
            </div>
          </article>
          <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className="relative w-full h-80 md:h-64 lg:h-44">
              <img
                src="https://cdn.pixabay.com/photo/2021/08/03/11/01/stairs-6519085_960_720.jpg"
                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="px-3 py-4">
              <h3 className="text-sm text-gray-500 pb-2">
                <a
                  className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                  href="d"
                >
                  <span className="absolute inset-0"></span>
                  Intermediate Level
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="py-3">
              <a href="/d" class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  class="hidden object-cover w-7 h-7 mx-3 rounded-full sm:block"
                />
                <h1 class="font-bold text-gray-700 hover:underline">
                  Alex John
                </h1>
              </a>
            </div>
          </article>
          <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className="relative w-full h-80 md:h-64 lg:h-44">
              <img
                src="https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg"
                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="px-3 py-4">
              <h3 className="text-sm text-gray-500 pb-2">
                <a
                  className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                  href="d"
                >
                  <span className="absolute inset-0"></span>
                  Advanced Level
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="py-3">
              <a href="/d" class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  class="hidden object-cover w-7 h-7 mx-3 rounded-full sm:block"
                />
                <h1 class="font-bold text-gray-700 hover:underline">
                  Alex John
                </h1>
              </a>
            </div>
          </article>

          <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className="relative w-full h-80 md:h-64 lg:h-44">
              <img
                src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg"
                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="px-3 py-4">
              <h3 className="text-sm text-gray-500 pb-2">
                <a
                  className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                  href="d"
                >
                  <span className="absolute inset-0"></span>
                  Basic Level
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="py-3">
              <a href="/d" class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  class="hidden object-cover w-7 h-7 mx-3 rounded-full sm:block"
                />
                <h1 class="font-bold text-gray-700 hover:underline">
                  Alex John
                </h1>
              </a>
            </div>
          </article>
          <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className="relative w-full h-80 md:h-64 lg:h-44">
              <img
                src="https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg.jpg"
                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="px-3 py-4">
              <h3 className="text-sm text-gray-500 pb-2">
                <a
                  className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                  href="d"
                >
                  <span className="absolute inset-0"></span>
                  Basic Level
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="py-3">
              <a href="/d" class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  class="hidden object-cover w-7 h-7 mx-3 rounded-full sm:block"
                />
                <h1 class="font-bold text-gray-700 hover:underline">
                  Alex John
                </h1>
              </a>
            </div>
          </article>
          <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className="relative w-full h-80 md:h-64 lg:h-44">
              <img
                src="https://cdn.pixabay.com/photo/2021/08/03/11/01/stairs-6519085_960_720.jpg"
                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="px-3 py-4">
              <h3 className="text-sm text-gray-500 pb-2">
                <a
                  className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                  href="d"
                >
                  <span className="absolute inset-0"></span>
                  Intermediate Level
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="py-3">
              <a href="/d" class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  class="hidden object-cover w-7 h-7 mx-3 rounded-full sm:block"
                />
                <h1 class="font-bold text-gray-700 hover:underline">
                  Alex John
                </h1>
              </a>
            </div>
          </article>
          <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className="relative w-full h-80 md:h-64 lg:h-44">
              <img
                src="https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg"
                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="px-3 py-4">
              <h3 className="text-sm text-gray-500 pb-2">
                <a
                  className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
                  href="d"
                >
                  <span className="absolute inset-0"></span>
                  Advanced Level
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="py-3">
              <a href="/d" class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  class="hidden object-cover w-7 h-7 mx-3 rounded-full sm:block"
                />
                <h1 class="font-bold text-gray-700 hover:underline">
                  Alex John
                </h1>
              </a>
            </div>
          </article>
        </section>

        <Pagination />
      </article>
    </section>
  );
}

export default BlogPosts;
