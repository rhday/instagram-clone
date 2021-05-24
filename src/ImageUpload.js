import React, {useState} from 'react'
import {Button, Input} from '@material-ui/core';
import {storage, db} from './firebase';

function ImageUpload() {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState('null');
    const [progress, setProgress] = useState('0');

    const handleChange = (e) => {
        {/* Select the first file that gets input */}
        if (e.target.files[0]) {
            {/* Set the image in state to that file */}
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = (e) => {
        {/* Access firebase and get a reference to this folder we are creating in the database */}
        {/* in this case it will be the image name or image.name */}
        {/* then "put" the image selected into the upload point.  */}
        const uploadTask = storage.ref('images/${image.name}').put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress bar logic. As the upload progresses keep giving the user a snapshot of that progress.
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                //Error function
                console.log(error);
                alert(error.message);
            },
            () => {
                //Complete function
                storage.ref("images").child(image.name).getDownloadURL()
                .then(url => {
                    // post image inside the db
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl: url
                    })
                })
            }
        )
    }
    
    return (
        <div>
            {/* Caption input */}
            {/* File Picker */}
            {/* Post Button */}
            <Input type="text" placeholder="Enter your caption:" onChange={event => setCaption(event.target.value)} value={caption}/>
            <Input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload