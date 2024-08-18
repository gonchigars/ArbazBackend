import { Password } from "@mui/icons-material";
import { Stack, TextField } from "@mui/material";

export const LoginID = () =>{
    return(
        <><Stack direction={'column'} spacing={2}>
        <TextField label='Login' size="medium"></TextField>
        <TextField label ="Password" size ="small"></TextField></Stack>
        </>
    );
}