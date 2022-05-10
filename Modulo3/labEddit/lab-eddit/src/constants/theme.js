import {createMuiTheme} from "@material-ui/core/styles"
import { primaryColor , neutralColor , contrastText  } from "./colors"

const theme = createMuiTheme ({
    palette:{
        primary:{
            main : primaryColor,
            contrastText : contrastText
        } ,
        text:{
            primary:neutralColor
        }
    }
})

export default theme