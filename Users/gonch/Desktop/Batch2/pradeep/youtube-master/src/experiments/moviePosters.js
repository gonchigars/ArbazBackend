
import { Button, Grid, Stack,Box } from '@mui/material';

export const MovieTrailer =() =>{
    return (
        <div>
            <Box>
     <Grid container spacing={0.1} >
     <Stack direction={'column'} spacing={2}>
        < Stack direction={'row'} spacing={1}> 
       {/* movie1 */}
          <Box >
          <Stack spacing={0.01} direction={'column'}>
            <Button href='https://www.youtube.com/watch?v=BZefBM0Bwdc'>     
                <img src={"/mrbachhan.png"} alt="raviteja poster" style={{ width: '450px', height: '300px' ,color:'yellow'}} />
            </Button>
            <Button href='https://www.youtube.com/watch?v=BZefBM0Bwdc' color='secondary' variant='contained'>
            raviteja's new telugu movie mr. bachhan
            </Button>
            </Stack>
            </Box> 
            {/* movie 2 */}
           <Box >
          <Stack spacing={0.01} direction={'column'}>
            <Button href='https://www.youtube.com/watch?v=ym0upoayqJg'>     
                <img src={"/ismartjpeg.png"} alt="raviteja poster" style={{ width: '450px', height: '300px' ,color:'yellow'}} />
            </Button>
            <Button href='https://www.youtube.com/watch?v=BZefBM0Bwdc' color='secondary' variant='contained'>
            Double ISMART Trailer  Ram Pothineni 
            </Button>
            </Stack>
            </Box> 

            {/* movie 3 */}
          <Stack spacing={0.1} direction={'column'}>
            <Box >
            <Button href='https://www.youtube.com/watch?v=dkx07ZvjKE4'>  
                   <img src={"/nani.png"} alt="nani poster" style={{ width: '450px', height: '300px' ,color:'yellow'}} />
            </Button>
            </Box>
            <Button variant='contained' color='secondary'> SARIPODHAA SANIVAARAM Trailer - Nani</Button>
            </Stack>

        </Stack>  
        <Stack direction={'row'} spacing={1}>
           {/* movie1 */}
          <Box >
          <Stack spacing={0.01} direction={'column'}>
            <Button href='https://www.youtube.com/watch?v=BZefBM0Bwdc'>     
                <img src={"/mrbachhan.png"} alt="raviteja poster" style={{ width: '450px', height: '300px' ,color:'yellow'}} />
            </Button>
            <Button href='https://www.youtube.com/watch?v=BZefBM0Bwdc' color='secondary' variant='contained'>
            raviteja's new telugu movie mr. bachhan
            </Button>
            </Stack>
            </Box> 
            {/* movie 2 */}
           <Box >
          <Stack spacing={0.01} direction={'column'}>
            <Button href='https://www.youtube.com/watch?v=ym0upoayqJg'>     
                <img src={"/ismartjpeg.png"} alt="raviteja poster" style={{ width: '450px', height: '300px' ,color:'yellow'}} />
            </Button>
            <Button href='https://www.youtube.com/watch?v=BZefBM0Bwdc' color='secondary' variant='contained'>
            Double ISMART Trailer  Ram Pothineni 
            </Button>
            </Stack>
            </Box> 

            {/* movie 3 */}
          <Stack spacing={0.1} direction={'column'}>
            <Box >
            <Button href='https://www.youtube.com/watch?v=dkx07ZvjKE4'>  
                   <img src={"/nani.png"} alt="nani poster" style={{ width: '450px', height: '300px' ,color:'yellow'}} />
            </Button>
            </Box>
            <Button variant='contained' color='secondary'> SARIPODHAA SANIVAARAM Trailer - Nani</Button>
            </Stack>

            </Stack>


           
            
            </Stack>
        </Grid>
        
    
     </Box>
        </div>
    );
}