import { CloudinaryContext } from 'cloudinary-react';

const cloudName = 'seaface';
const uploadPreset = 'YOUR_UPLOAD_PRESET';

export const CloudinaryConfig = () => (
  <CloudinaryContext
    cloudName={cloudName}
    uploadPreset={uploadPreset}
  />
);