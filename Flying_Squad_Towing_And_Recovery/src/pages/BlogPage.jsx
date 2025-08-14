import React from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner.jsx";
import ErrorMessage from "../components/ui/ErrorMessage.jsx";

const BlogPage = () => {
  const { data: blogPosts, isLoading, error } = useFetchStrapi(fetchBlogPosts);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={`Error: ${error.message}`} />;
  if (!blogPosts || blogPosts.length === 0)
    return <ErrorMessage message="No blog posts found." />;

  return (
    <section className="bg-gray-100 py-12 dark:bg-gray-800 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold md:text-4xl">Our Blog</h2>
        <p className="mx-auto max-w-4xl text-base text-gray-600 dark:text-gray-400 md:text-lg">
          Stay up-to-date with our latest tips and news.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="w-full rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800 sm:w-80"
            >
              <img
                src={`https://placehold.co/400x250/e2e8f0/64748b?text=${post.attributes.title.replace(
                  /\s/g,
                  "+"
                )}`}
                alt={`Image for blog post about ${post.attributes.title}`}
                className="mb-4 w-full rounded-md"
              />
              <h3 className="mb-2 text-xl font-bold">
                {post.attributes.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {post.attributes.content.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
