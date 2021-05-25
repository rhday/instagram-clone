import React, {useState, useEffect} from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl}) {

    const [comments, setComments] = useState([]);

    return(

        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt="Ruari" src="/static/images/avatar/1.jpg" />
                <h3>{username}</h3>
            </div>
            
            {/* Header --> avatar + username */}

            <img className="post__image" src={imageUrl} />
            {/* Image */}

            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
            {/* Username + Caption */}


        </div>
    )
}

export default Post
