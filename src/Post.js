import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
    return (
        <div className="post">
            <Avatar className="post__avatar" alt="Ruari" src="/static/images/avatar/1.jpg" />
            <h3>Username</h3>
            {/* Header --> avatar + username */}

            <img className="post__image" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
            {/* Image */}

            <h4 className="post__text"><strong>rhday</strong> Building instaclone</h4>
            {/* Username + Caption */}


        </div>
    )
}

export default Post
