import React from "react";
import Button from "@material-ui/core/Button"
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>FeedPage</h1>
            {/* <Button variant="contained" color="secondary">
             AAAAAAAAAAA
            </Button> */}
           
        </div>
    )

}

export default FeedPage