import React from 'react';

const BlogPost = () => {
  return (
    <div className="max-w-7xl  mx-auto px-4 py-16 my-20">
      <h1 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-8">
        The Ultimate Guide to Choosing the Right Sports Equipment for Every Athlete
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Blog Card 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/5hB5sRDc/basketball1.jpg"
            alt="Sports Equipment"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Understanding Your Sport and Its Equipment Needs
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Each sport has its own specific requirements when it comes to the type of equipment needed...
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700">
              See More
            </a>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/KcP1wYff/42103.jpg"
            alt="Sports Equipment"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Factors to Consider When Choosing Sports Equipment
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Choosing sports equipment isn’t just about picking the most expensive or most popular option...
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700">
              See More
            </a>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/84DF2CYm/football-background-with-frame.jpg"
            alt="Sports Equipment"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How to Maintain Your Sports Equipment
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Clean your gear after every use. Whether it’s a helmet, a racquet, or running shoes, dirt and sweat can degrade the materials...
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700">
              See More
            </a>
          </div>
        </div>

        {/* Blog Card 4 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/wZXDH0gp/sprots-banner.jpg"
            alt="Sports Equipment"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              The Latest Trends in Sports Equipment
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Wearable technology, lightweight materials, and customization are changing the sports equipment industry...
            </p>
            <a href="#!" className="text-blue-500 hover:text-blue-700">
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
