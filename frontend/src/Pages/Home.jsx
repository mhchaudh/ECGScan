import { useRef } from "react";

function Home() {

  // Reference to file upload
  const fileInputRef = useRef(null); 

  // when we press upload-button, it clicks the reference to the hidden file upload button
  const handleUploadButtonClick = () => {
    fileInputRef.current.click()
  }

    return (<>
      <div>

      <button>Take Picture</button> 
      {/* not functional yet */}

        <button className="upload-button" onClick={handleUploadButtonClick}>
          Upload Image</button>

        <input type="file" 
        accept="image/*" 
        ref={fileInputRef} 
        style={{display:"none"}}></input>

      </div>

      </>);
  }

  export default Home; 