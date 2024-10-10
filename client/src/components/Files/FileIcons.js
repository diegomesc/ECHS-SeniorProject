import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './FileIcons.css';
import './FilePreview.css';
import FolderIcon from '@mui/icons-material/Folder';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PhotoIcon from '@mui/icons-material/Photo';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';

function FileIcons() {
  // DYNAMIC FILE ICONS
  const [fileIcons, setFileIcons] = useState(null);
  const [folderIcons, setFolderIcons] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const ref = useRef({
    fileList: []
  })

  useEffect(() => {
    // PREVIEW OVERLAY
  
  const showPreview = (file) => {
    let fileType = file.split('.').pop().toLowerCase();
    let media;
    let icon;
    switch (fileType) {
      case "mp4":
      case "mov":
        icon = <VideoLibraryIcon className="file__icon video"/>
        media = 
        <video className="preview" controls muted="muted" loop autoPlay>
          <source src={"/media/" + file} type="video/mp4" />
        </video>
        break;
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
      case "webp":
        icon = <PhotoIcon className="file__icon photo preview__file__icon"/>
        media = <img className="preview" src={"/media/" + file} alt={file}/>
        break;
      default:
        switch (fileType) {
          case "pdf":
              icon = <PictureAsPdfIcon className="file__icon text"/>
              break;
          case "zip":
              icon = <FolderZipIcon  className="file__icon folder"/>
              break;
          default:
              icon = <FolderIcon className="file__icon folder"/>
        }
        media = (
          <div className="preview__unsupported">
            <div>This file type is not supported atm...</div>
            <div>But you can always download it if you want yk</div>
          </div>
        )
    }
    setSelectedFile(
      <div className="backdrop" onClick={closePreview}>
        <div className="overlay__header" onClick={(e) => preventClose(e)}>
          <ArrowBackIcon className="preview__icon" onClick={closePreview}/>
          <div className="preview__media__header">
            {icon}
            {file}
          </div>
          <DownloadIcon className="preview__icon download" onClick={() => downloadFile(file)}/>
        </div>
        <div onClick={(e) => preventClose(e)}>
        {media}
        </div>
      </div>
    )
  }

    fetch("/files")
      .then((res) => res.json())
      .then((data) => {
        let folderDivs = [];
        let fileDivs = [];
        let list = [];

        data.folders.forEach(element => {
          list.push(element);
          folderDivs.push(
            <div 
            key={element}
            id={element}
            className="icons__container"
            onClick={() => highlightIcons(element)}
            onDoubleClick={() => showPreview(element)}
            >
            <FolderIcon className="file__icon folder"/>
            <h1>{element}</h1>
          </div>
          );
        });
        data.files.forEach(element => {
          let fileType = element.split('.').pop().toLowerCase();
          let icon;
          switch (fileType) {
            case "mp4":
            case "mov":
              icon = <VideoLibraryIcon className="file__icon video"/>
              break;
            case "png":
            case "jpg":
            case "jpeg":
            case "gif":
            case "webp":
              icon = <PhotoIcon className="file__icon photo"/>
              break;
            case "pdf":
              icon = <PictureAsPdfIcon className="file__icon text"/>
              break;
            case "zip":
              icon = <FolderZipIcon  className="file__icon folder"/>
              break;
            default:
              icon = <QuestionMarkIcon className="file__icon unsupported"/>
          }
          list.push(element);
          fileDivs.push(
          <div 
            key={element}
            id={element}
            className="icons__container"
            onClick={() => highlightIcons(element)}
            onDoubleClick={() => showPreview(element)}
          >
            {icon}
            <h1>{element}</h1>
          </div>
          );
        });
        
        setFileIcons(fileDivs);
        setFolderIcons(folderDivs);
        ref.current.fileList = list;
      })
  }, []);

  // HIGHLIGHTING ICONS
  const highlightIcons = (element) => {
    let fileList = ref.current.fileList;
    fileList.forEach(id => {
      document.getElementById(id).style.backgroundColor = "white"
      document.getElementById(id).style.color = "#7A7A7A"
    });
    document.getElementById(element).style.backgroundColor = "#E8F0FE"
    document.getElementById(element).style.color = "#1967DA"
  }
  
  const preventClose = (e) => {
    e.stopPropagation();
  }

  const closePreview = () => {
    setSelectedFile(null);
  }

  const downloadFile = (file) => {
    const fileName = file;
    axios({
        method: 'get',
        url: '/download/'+fileName,
        responseType: 'blob',
        headers: {},
        })
        .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
        })
        .catch((error) => {
            alert(error);
        })
  }

  return (
    <div className="files__container">
      <div className="items__container__header">
      Folders
      </div>
      <div className="items__container">
        {!folderIcons ? "Loading..." : folderIcons}
      </div>
      <div className="items__container__header">
      Files
      </div>
      <div className="items__container">
        {!fileIcons ? "Loading..." : fileIcons}
      </div>
      {selectedFile}
    </div>
  );
}

export default FileIcons;