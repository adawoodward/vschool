import React from 'react';

const EditForm = ({ formData, setFormData, onCancel, onSave }) => {
  // Initialize defaultFormData with default values
  const defaultFormData = {
    title: '',
    description: '',
    imgUrl: '',
  };

  // Ensure formData is always defined
  if (!formData) {
    setFormData(defaultFormData);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // calls onSave function, passing the current formData as an argument
  const handleSave = () => {
    onSave(formData);
  };

  // calls onCancel function, resetting the formData state to default vaules
  const handleCancel = () => {
    onCancel();
    setFormData({
      title: '',
      description: '',
      imgUrl: '',
    });
  };
  

  return (
    <form>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleInputChange}
        />
      </label>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="button" onClick={handleSave}>
        Save Changes
      </button>
    </form>
  );
};

export default EditForm;
