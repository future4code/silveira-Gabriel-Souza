import {createMuiTheme} from "@material-ui/core/styles"
import { primaryColor,secondColor , neutralColor , contrastText  } from "./colors"

const theme = createMuiTheme ({
    palette:{
        primary:{
            main : primaryColor,
            contrastText : contrastText
        } ,
        secondary : {
             main : secondColor,
            contrastText : contrastText,
        },
        text:{
            primary:neutralColor
        }
    }
})

export default theme