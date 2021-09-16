import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
const axios = require('axios').default;

function App() {
  const [status, setstaus] = useState("");

const UPLOAD_URL="http://localhost:3000/api/fileupload";


const fileuploadhandler = (e) =>{
let formData = new FormData();
//formData.append('myfield',"uuidv4()");
formData.append('file_upload', e.target.files[0]);
axios.post(UPLOAD_URL, formData, {
}).then(res => {
   console.log('Res::::::::>',res.data.resp)
    setstaus(res.data.message)
})



}
console.log('status::::>',status)

  return (
    <div className="App">
   <div className="container">
   <div className="row">
       <div className="col-md-6">
       <div class="form-group mx-sm-3 mb-2">  
         <input type="file" class="form-control" name="file_upload"  onChange={(e) => fileuploadhandler(e)} placeholder="Password"/>
         <h3>{status}</h3>
       </div>
       </div>
     </div>
   </div>
    </div>
  );
}

export default App;
