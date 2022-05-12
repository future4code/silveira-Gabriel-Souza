import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import styled from "./styled"

const PostPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>PostPage</h1>
        </div>
    )

}

export default PostPage