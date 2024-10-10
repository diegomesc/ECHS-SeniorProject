import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FileUpload.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';

function FileUpload() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {    
    const form = new FormData();
    form.append('file', e.target.files[0]);
    e.target.value=null;

    axios.post('/upload', form)
      .then(res => {
        console.log(res);
        console.log(res.data);
        navigate(0);
      })
      .catch((err) => alert("File Upload Error"))
    }

  const submitAlert = () => {
    alert("Files uploaded may not be deleted through the webpage and must be deleted directly from the laptop because the developer is wayyyy too sleep-deprived to implement that function...")
  }
  
  return (
    <div className="upload__body">
      <label className="upload__container">
        <input type="file" onClick={submitAlert} onChange={handleSubmit}/>
        <FileUploadIcon className="upload_icon"/>
        Upload
      </label>
    </div>
  )
}

export default FileUpload;