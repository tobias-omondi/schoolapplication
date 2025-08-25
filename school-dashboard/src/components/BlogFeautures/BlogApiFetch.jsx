import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoIosCreate, IoIosSend, IoIosImages, IoIosLink } from "react-icons/io";
import { RiDraftLine, RiDeleteBinLine } from "react-icons/ri";

const BlogApiFetch = () => {
  const API_URL = 'https://schoolapplication-btwi.onrender.com/api/blogs/';

  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    category: 'Technology',
    imageUrl: '',
    tags: '',
    isPublished: false
  });
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [savedBlogs, setSavedBlogs] = useState([]);

  // Fetch existing blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setSavedBlogs(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setMessage({ text: 'Failed to fetch existing blogs', type: 'error' });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!blogData.title.trim() || !blogData.content.trim()) {
      setMessage({ text: 'Title and content are required', type: 'error' });
      return;
    }

    setIsLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const method = editingId ? 'PUT' : 'POST';
      // Check if your API uses a different endpoint pattern for updates
      const url = editingId ? `${API_URL}/${editingId}/` : API_URL;

      const response = await fetch(url, {
        method,
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...blogData,
          tags: blogData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server returned ${response.status}`);
      }

      const updatedBlog = await response.json();

      setMessage({ 
        text: editingId ? 'Blog updated successfully!' : 'Blog published successfully!', 
        type: 'success' 
      });

      // Reset form
      setBlogData({
        title: '',
        content: '',
        category: 'Technology',
        imageUrl: '',
        tags: '',
        isPublished: false
      });
      setEditingId(null);

      // Update blog list
      if (editingId) {
        setSavedBlogs(prev => prev.map(blog => blog.id === editingId ? updatedBlog : blog));
      } else {
        setSavedBlogs(prev => [updatedBlog, ...prev.slice(0, 2)]);
      }

    } catch (error) {
      console.error('Error saving blog:', error);
      setMessage({ text: error.message || 'Failed to save blog. Please try again.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (blog) => {
    setBlogData({
      title: blog.title || '',
      content: blog.content || '',
      category: blog.category || 'Technology',
      imageUrl: blog.imageUrl || '',
      tags: blog.tags ? blog.tags.join(', ') : '',
      isPublished: blog.isPublished || false
    });
    setEditingId(blog.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/${id}/`, { 
        method: 'DELETE' 
      });

      if (!response.ok) {
        throw new Error(`Delete failed with status: ${response.status}`);
      }

      setSavedBlogs(prev => prev.filter(blog => blog.id !== id));
      setMessage({ text: 'Blog deleted successfully', type: 'success' });

      if (editingId === id) {
        setEditingId(null);
        setBlogData({
          title: '',
          content: '',
          category: 'Technology',
          imageUrl: '',
          tags: '',
          isPublished: false
        });
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      setMessage({ text: 'Failed to delete blog. Please try again.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveDraft = () => {
    setBlogData({...blogData, isPublished: false});
    setMessage({ text: 'Blog saved as draft (not published)', type: 'info' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setBlogData({
      title: '',
      content: '',
      category: 'Technology',
      imageUrl: '',
      tags: '',
      isPublished: false
    });
    setMessage({ text: 'Edit cancelled', type: 'info' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-2 text-center"
        >
          {editingId ? 'Edit Blog Post' : 'Create New Blog Post'}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center mb-8"
        >
          {editingId ? 'Edit your blog content below' : 'Craft your next engaging blog post with our intuitive editor'}
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Form */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-2/3"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              
              <form onSubmit={handleSubmit} className="p-6">
                {message.text && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg mb-6 ${
                      message.type === 'error' 
                        ? 'bg-red-100 text-red-700' 
                        : message.type === 'success'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {message.text}
                  </motion.div>
                )}
                
                <div className="mb-6">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Blog Title
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="title"
                    name="title"
                    value={blogData.title}
                    onChange={handleInputChange}
                    placeholder="Catchy blog title here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                    Content
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="content"
                    name="content"
                    value={blogData.content}
                    onChange={handleInputChange}
                    rows="10"
                    placeholder="Write your engaging content here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={blogData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Technology">Technology</option>
                      <option value="Lifestyle">Lifestyle</option>
                      <option value="Travel">Travel</option>
                      <option value="Food">Food</option>
                      <option value="Health">Health</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      value={blogData.tags}
                      onChange={handleInputChange}
                      placeholder="tech, web, design"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    Featured Image URL
                  </label>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                      <IoIosLink />
                    </span>
                    <input
                      type="url"
                      id="imageUrl"
                      name="imageUrl"
                      value={blogData.imageUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md font-medium disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {editingId ? 'Updating...' : 'Publishing...'}
                      </>
                    ) : (
                      <>
                        <IoIosSend className="mr-2" />
                        {editingId ? 'Update Blog' : 'Publish Blog'}
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={handleSaveDraft}
                    className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium"
                  >
                    <RiDraftLine className="mr-2" />
                    Save Draft
                  </motion.button>

                  {editingId && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={cancelEdit}
                      className="flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg font-medium"
                    >
                      Cancel Edit
                    </motion.button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Recent Blogs Sidebar */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full lg:w-1/3"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <IoIosCreate className="mr-2 text-blue-500" />
                Recent Blog Posts
              </h3>
              
              {isLoading && savedBlogs.length === 0 ? (
                <div className="flex justify-center py-8">
                  <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : savedBlogs.length > 0 ? (
                <div className="space-y-4">
                  {savedBlogs.map((blog) => (
                    <motion.div 
                      key={blog.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition"
                    >
                      <h4 className="font-medium text-gray-800 truncate">{blog.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {blog.category} • {new Date(blog.createdAt || blog.date).toLocaleDateString()}
                      </p>
                      <div className="flex items-center mt-3 gap-2">
                        <button 
                          onClick={() => handleEdit(blog)}
                          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Edit
                        </button>
                        <span className="text-gray-300">|</span>
                        <button 
                          onClick={() => handleDelete(blog.id)}
                          className="text-sm text-red-600 hover:text-red-800 font-medium flex items-center"
                        >
                          <RiDeleteBinLine className="mr-1" />
                          Delete
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No blog posts yet. Create your first one!</p>
              )}
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <IoIosImages className="mr-2 text-blue-500" />
                  Tips for Great Blog Posts
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Use a catchy and descriptive title
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Add images to make your post more engaging
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Break up content with subheadings
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Use relevant tags to improve discoverability
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogApiFetch;