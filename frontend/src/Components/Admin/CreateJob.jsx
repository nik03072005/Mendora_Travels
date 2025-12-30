import React, { useState, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateJob = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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
            headers: { 
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
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

  // Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!title || !content) {
    toast.error('Please fill all fields');
    return;
  }

  setIsSubmitting(true);
  const toastId = toast.loading('Creating job...');
  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/job/create-job`,
      { title, content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    toast.update(toastId, {
      render: 'Job created successfully!',
      type: 'success',
      isLoading: false,
      autoClose: 3000,
    });
    setTitle('');
    setContent('');
    editorRef.current.root.innerHTML = '';
  } catch (error) {
    toast.update(toastId, {
      render: 'Error creating job: ' + error.message,
      type: 'error',
      isLoading: false,
      autoClose: 3000,
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Create a New Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Job Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter job title"
            required
          />
        </div>

        {/* Quill Editor */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Description</label>
          <div ref={quillRef} className="mt-1 h-64 sm:h-80 border rounded-md"></div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full sm:w-auto px-4 py-2 rounded text-white font-medium ${
            isSubmitting 
              ? 'bg-blue-300 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating...' : 'Create Job'}
        </button>
      </form>
    </div>
  );
};

export default CreateJob;