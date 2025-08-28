import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoIosCreate, IoIosSend, IoIosImages, IoIosLink } from "react-icons/io";
import { RiDraftLine, RiDeleteBinLine } from "react-icons/ri";
import Swal from 'sweetalert2';
import { FaEdit } from 'react-icons/fa';

const NewsApiFetch = () => {
  const API_URL = 'https://schoolapplication-btwi.onrender.com/api/news/';

  const [newsData, setNewsData] = useState({
    title: '',
    content: '',
    category: 'General',
    imageUrl: '',
    tags: '',
    isPublished: false
  });
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [savedNews, setSavedNews] = useState([]);

  // Fetch existing news on mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setSavedNews(data.slice(0, 3)); // only recent 3
      } catch (error) {
        Swal.fire('Error', 'Failed to fetch news', 'error');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsData({ ...newsData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newsData.title.trim() || !newsData.content.trim()) {
      Swal.fire('Missing fields', 'Title and content are required.', 'warning');
      return;
    }
    setIsLoading(true);

    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `${API_URL}${editingId}/` : API_URL;

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newsData,
          tags: newsData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server returned ${response.status}`);
      }

      const updatedNews = await response.json();

      Swal.fire(
        'Success',
        editingId ? 'News updated successfully!' : 'News published successfully!',
        'success'
      );

      // Reset form
      setNewsData({ title: '', content: '', category: 'General', imageUrl: '', tags: '', isPublished: false });
      setEditingId(null);

      // Update state instantly
      if (editingId) {
        setSavedNews(prev => prev.map(n => n.id === editingId ? updatedNews : n));
      } else {
        setSavedNews(prev => [updatedNews, ...prev.slice(0, 2)]);
      }
    } catch (error) {
      Swal.fire('Error', error.message || 'Failed to save news', 'error');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (item) => {
    setNewsData({
      title: item.title || '',
      content: item.content || '',
      category: item.category || 'General',
      imageUrl: item.imageUrl || '',
      tags: item.tags ? item.tags.join(', ') : '',
      isPublished: item.isPublished || false
    });
    setEditingId(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    Swal.fire('Edit Mode', 'You are now editing this news post.', 'info');
  };

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: 'Are you sure?',
      text: "This news will be permanently deleted!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (!confirmDelete.isConfirmed) return;

    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}${id}/`, { method: 'DELETE' });
      if (!response.ok) throw new Error(`Delete failed with status: ${response.status}`);
      setSavedNews(prev => prev.filter(n => n.id !== id));

      if (editingId === id) {
        setEditingId(null);
        setNewsData({ title: '', content: '', category: 'General', imageUrl: '', tags: '', isPublished: false });
      }

      Swal.fire('Deleted!', 'News deleted successfully.', 'success');
    } catch (error) {
      Swal.fire('Error', 'Failed to delete news', 'error');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveDraft = () => {
    setNewsData({ ...newsData, isPublished: false });
    Swal.fire('Draft Saved', 'This news is saved as draft (not published).', 'info');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewsData({ title: '', content: '', category: 'General', imageUrl: '', tags: '', isPublished: false });
    Swal.fire('Edit Cancelled', 'You have exited edit mode.', 'info');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-medium text-gray-700 mb-2 text-center">
          {editingId ? 'Edit News Post' : 'Create News Post'}
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-600 text-center mb-8">
          {editingId ? 'Edit your news content below' : 'Publish school news easily using our editor'}
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* News Form */}
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="w-full lg:w-2/3">
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <form onSubmit={handleSubmit} className="p-6">

                <div className="mb-6">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <motion.input whileFocus={{ scale: 1.01 }} type="text" id="title" name="title" value={newsData.title} onChange={handleInputChange}
                    placeholder="Headline for your news..." className="w-full px-4 py-3 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent transition" required />
                </div>

                <div className="mb-6">
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <motion.textarea whileFocus={{ scale: 1.01 }} id="content" name="content" value={newsData.content} onChange={handleInputChange}
                    rows="10" placeholder="Write the full news content here..." className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-transparent transition" required />
                </div>

                <div className="mb-8">
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">Featured Image URL</label>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500"><IoIosLink /></span>
                    <input type="text" id="imageUrl" name="imageUrl" value={newsData.imageUrl} onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg" className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    type="submit" disabled={isLoading}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md font-medium disabled:opacity-50 cursor-pointer">
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
                        {editingId ? 'Update News' : 'Publish News'}
                      </>
                    )}
                  </motion.button>

                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    type="button" onClick={handleSaveDraft}
                    className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium cursor-pointer">
                    <RiDraftLine className="mr-2" /> Save Draft
                  </motion.button>

                  {editingId && (
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      type="button" onClick={cancelEdit}
                      className="flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg font-medium">
                      Cancel Edit
                    </motion.button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Recent News Sidebar */}
          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <IoIosCreate className="mr-2 text-blue-500" /> Recent News
              </h3>
              {isLoading && savedNews.length === 0 ? (
                <div className="flex justify-center py-8">
                  <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : savedNews.length > 0 ? (
                <div className="space-y-4">
                  {savedNews.map(item => (
                    <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition">
                      <h4 className="font-medium text-gray-800 truncate">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.category} • {new Date(item.createdAt || item.date).toLocaleDateString()}
                      </p>
                      <div className="flex items-center mt-3 gap-6">
                        <button onClick={() => handleEdit(item)}
                          className="text text-blue-600 hover:text-blue-800 font-light flex items-center cursor-pointer">
                            <FaEdit className="mr-1" />Edit</button>
                        <span className="text-gray-300">|</span>
                        <button onClick={() => handleDelete(item.id)}
                          className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center cursor-pointer">
                          <RiDeleteBinLine className="mr-1" /> Delete
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No news yet. Create your first post!</p>
              )}

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <IoIosImages className="mr-2 text-blue-500" /> Tips for School News
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Keep headlines short and clear</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Use images for important events</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Add relevant tags for search</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Highlight event dates or deadlines</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsApiFetch;
