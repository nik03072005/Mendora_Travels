import React, { useState, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [banner, setBanner] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const quillRef = useRef(null);
  const editorRef = useRef(null);
  const token = localStorage.getItem('token');

  // Initialize Quill editor and handle image uploads
  React.useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new Quill(quillRef.current, {
        theme: 'snow',
        modules: {
          toolbar: {
            container: [
              [{ header: [1, 2, 3, false] }],
              ['bold', 'italic', 'underline'],
              ['image', 'code-block'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link'],
              ['clean'],
            ],
            handlers: {
              image: handleImageUpload,
            },
          },
        },
      });

      // Update content state when editor content changes
      editorRef.current.on('text-change', () => {
        setContent(editorRef.current.root.innerHTML);
      });
    }
  }, []);

  // Handle image uploads in Quill editor
  const handleImageUpload = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const toastId = toast.loading('Uploading image...');
        try {
          const formData = new FormData();
          formData.append('image', file);

          const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/blog/upload-image`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });

          const imageUrl = response.data.imageUrl;
          const range = editorRef.current.getSelection();
          editorRef.current.insertEmbed(range.index, 'image', imageUrl);
          toast.update(toastId, { 
            render: 'Image uploaded successfully!', 
            type: 'success', 
            isLoading: false,
            autoClose: 3000 
          });
        } catch (error) {
          toast.update(toastId, { 
            render: 'Error uploading image: ' + error.message, 
            type: 'error', 
            isLoading: false,
            autoClose: 3000 
          });
        }
      }
    };
  };

  // Handle file drop for banner image
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
    onDrop: (acceptedFiles) => {
      setBanner(acceptedFiles[0]);
    },
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !banner) {
      toast.error('Please fill all fields and upload a banner image');
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Creating blog...');
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('banner', banner);

      await axios.post(`${import.meta.env.VITE_API_URL}/api/blog/create-blogs`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });

      toast.update(toastId, {
        render: 'Blog created successfully!',
        type: 'success',
        isLoading: false,
        autoClose: 3000
      });
      // Reset form
      setTitle('');
      setContent('');
      setBanner(null);
      editorRef.current.root.innerHTML = '';
    } catch (error) {
      toast.update(toastId, {
        render: 'Error creating blog: ' + error.message,
        type: 'error',
        isLoading: false,
        autoClose: 3000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Blog Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Banner Image Upload */}
        <div>
          <label className="block text-sm font-medium">Banner Image</label>
          <div
            {...getRootProps()}
            className={`mt-1 p-4 border-dashed border-2 rounded ${
              isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
          >
            <input {...getInputProps()} />
            {banner ? (
              <div>
                <p>Selected: {banner.name}</p>
                <img
                  src={URL.createObjectURL(banner)}
                  alt="Banner Preview"
                  className="mt-2 h-48 object-cover rounded"
                />
              </div>
            ) : (
              <p>Drag & drop an image here, or click to select one</p>
            )}
          </div>
        </div>

        {/* Quill Editor */}
        <div>
          <label className="block text-sm font-medium">Blog Content</label>
          <div ref={quillRef} className="mt-1 h-64"></div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`px-4 py-2 rounded text-white ${
            isSubmitting 
              ? 'bg-blue-300 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating...' : 'Create Blog'}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;