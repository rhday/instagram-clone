import React, {useState} from 'react'
import {Button, Input} from '@material-ui/core';

function ImageUpload() {
    const [caption, setCaption] = useState('');
    return (
        <div>
            {/* Caption input */}
            {/* File Picker */}
            {/* Post Button */}
            <Input type="text" placeholder="Enter you caption:" onChange={event => setCaption(event.target.value)} value={caption}/>
            <Input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload