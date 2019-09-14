import React, { useState } from 'react'
import './Notes.css';
import firebase from '../../Backend/Firebase';
import protectedScreen from '../../Backend/Protector';
import { NOTESREF } from '../../Constants/constants';


const NotesUpload = (props) => {

    const [uploadPercentage, setUploadPercentage] = useState('0%');
    const [pStatus, setPStatus] = useState(null);
    const [areaStyle, setAreaStyle] = useState(null);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    const handleDragEnter = e => {
        setAreaStyle('highlight');
        preventDefaults(e);
    }

    const handleDragLeave = e => {
        setAreaStyle('highlight')
        preventDefaults(e)
    }

    const handleDragOver = e => {
        setAreaStyle('highlight')
        preventDefaults(e)
    }

    const handleDrop = e => {
        setAreaStyle('highlight');
        let dt = e.dataTransfer
        let files = dt.files

        handleFiles(files)
    }

    const handleFiles = (files) => {
        ([...files]).forEach(uploadFile);
    }



    function uploadFile(file) {
        console.log('UPLOAD FILE:', file.name);

        var storageRef = firebase.getStorage().ref(NOTESREF //+ file.name
            );
        var uploadTask = storageRef.put(file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', function (snapshot) {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, function (error) {
            // Handle unsuccessful uploads
            console.log('ERROR ON UPLOADTASK', error);
        }, function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);

                var fileName = "";

                fileName = file.name;

                firebase.getFirestore()
                    .collection(NOTESREF)
                    .doc("URLS")
                    .set({ [fileName]: downloadURL }, { merge: true })
                    .then(() => console.log("FIRESTORE UPLOAD SUCCESSFULL."))

            });
        });
    }

    return (
        <div className="notes">
            <div id="drop-area"
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={areaStyle}
            >
                <form className="my-form">
                    <p className="f1 fw9 black strong">Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</p>
                    <input type="file" id="fileElem" multiple onClick={(e) => {
                        e.preventDefault();
                        handleFiles(e.target.files)
                    }} />
                    <label className="button" htmlFor="fileElem">Select some files</label>
                </form>
            </div>
        </div>
    )
}
export default protectedScreen(NotesUpload);