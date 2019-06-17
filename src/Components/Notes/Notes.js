import React,{useState} from 'react'
import './Notes.css';
import firebase from '../../Backend/Firebase';
import protectedScreen from '../../Backend/Protector';


const Notes = (props) => {

    const [uploadPercentage , setUploadPercentage ] = useState('0%');
    const [pStatus, setPStatus] = useState(null);

    const handleChange = event => {
        try{
        //  GET A FILE
        var file = event.target.files[0];
        //  CREATE A STORAGE REFERENCE (Firebase.storage.ref(FOLDER_NAME , FILE_NAME))
        var StorageReference = firebase.getStorage().ref('academic_notes/' + file.name);


        //  UPLOAD FILE
        var task = StorageReference.put(file);
        //  UPDATE PROGRESS BAR.
        task.on('state_changed' , 
            function progress(snapshot){
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
                setUploadPercentage(percentage);
                setPStatus("UPLOADING...");
            },
            function error(err){
                console.log(err);
                setPStatus("SOMETHING WENT WRONG.RETRY?");
            },
            function complete(){
                console.log('TRANSFER COMPLETED.');
                setPStatus("COMPLETED.");

            }
        )
    }catch(e){
        console.log(e);
    }
}

    return ( 
        <div className="notes">
            <h1 className="f1 tc fw9 underline">NOTES</h1>
            <p className="f1 tc black underline">UPLOADING:{uploadPercentage}</p>
            <p className="f1 tc black underline">{pStatus}</p>
            <progress id="uploader" value={`${uploadPercentage}`} max="100">0%</progress>
            <input type="file" id="fileButton" onChange={handleChange}/>
        </div>
    )
}
export default protectedScreen(Notes);