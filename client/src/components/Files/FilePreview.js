import './FilePreview.css';
import { useSelector } from 'react-redux';
import { setPreviewMedia, selectPreviewMedia } from '../features/previewSlice';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function FilePreview() {
  const previewMedia = useSelector(selectPreviewMedia);

  function closePreview() {
    setPreviewMedia(null);
  }

  return ( 
    <div className="overlay">
      <div className="overlay__header">
        <div className="preview__close" onClick={closePreview}>
          <ArrowBackIcon className="preview__close-icon"/>
        </div>
      </div>
      {previewMedia}
    </div>
   );
}

export default FilePreview;