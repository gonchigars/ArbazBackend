import { Button, ButtonGroup, Stack } from "@mui/material";

export const DifferentButtons =() =>{
    return (
        <div>
            <ButtonGroup>
            <Stack spacing={30} direction="row">
                <Stack spacing={20} direction={"row"}/>
            <button >login</button>
            <Stack spacing={30} direction={"row"}>
            <Button variant = "contained" href="https://www.programiz.com/java-programming/online-compiler/" target="blank"  size ="small" color="success">  ONLINE COMPILER</Button>
            <Button size="large" variant = "contained" href="https://www.youtube.com/"  target="blank" color="error"> YOU TUBE</Button>
            <Button variant="contained" href="https://www.facebook.com/" size="large" target="pradeep" color="info">FACE BOOK</Button>
            </Stack></Stack>
            </ButtonGroup>
        </div>
    );
}