import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "ghpark",
        comment: "This is my first component.",
    },
    {
        name: "daljmj",
        comment: "Hello, React!",
    },
    {
        name: "React",
        comment: "Hello, daljmj!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;