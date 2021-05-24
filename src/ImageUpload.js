import React, {useState} from 'react'
import {Button, Input} from '@material-ui/core';

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