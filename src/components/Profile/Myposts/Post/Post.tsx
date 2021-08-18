import React from "react";
import s from "./Post.module.css"

type  messageType = {
    message: string;
    value:number;
}
const Post: React.FC<messageType> = (props) => {
    return (

        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src="data:image/jpeg;base64,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"
                    alt="Avatar"/>
                {props.message}
                <div>
                    <span>Likes </span>{props.value}
                </div>

            </div>
        </div>

    )
}
export default Post;