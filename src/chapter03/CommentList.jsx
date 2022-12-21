import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"성이름"} comment={"안녕하세요 만나서 반갑습니다"} />
            <Comment name={"김이박"} comment={"처음 뵙겠습니다"} />
        </div>
    );
}

export default CommentList;