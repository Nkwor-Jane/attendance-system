import React, { useContext } from 'react';
import AppContext from '../../context/app/appContext';

const ImageUpload = () => {
  const appContext = useContext(AppContext);
  const { uploadUrl, uploading, setUploading, uploadImage } = appContext;

  const imageUpload = (image) => {
    setUploading();
    uploadImage(image);
  };
  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}>
      {uploading ? 'uploading image...' : <img src={uploadUrl} alt="profile" width="100px" />}
      <br />
      <input type="file" onChange={(e) => imageUpload(e.target.files[0])} required />
      <br />
    </div>
  );
};

export default ImageUpload;
