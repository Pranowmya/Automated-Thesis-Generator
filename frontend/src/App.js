import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData);
      setMsg("Report Generated: " + res.data.file);
    } catch (err) {
      setMsg("Error uploading file");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Investment Thesis Generator</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br /><br />

      <button onClick={uploadFile}>Upload</button>

      <p>{msg}</p>
    </div>
  );
}

export default App;
