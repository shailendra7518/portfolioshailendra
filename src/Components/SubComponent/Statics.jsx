import { Heading, Stack, Grid, Box, Spacer } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContextProvider';
import GitHubCalendar from 'react-github-calendar';
function Statics() {
  const { Theme } = useContext(AppContext);
  return (
    <Stack p={[1,8,8]} mt={4} bg={Theme.about.backgroundColor}>
      <Heading
        borderRadius={6}
        textAlign={'center'}
        bg={Theme.about.cardBgColor}
      >
        Statics
      </Heading>
      <Spacer />
      <Grid
        gap={6}
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(5, 1fr)']}
      >
        <Box borderRadius={10} p={5} bg={Theme.about.cardBgColor}>
          <Heading textAlign={'center'} fontSize={'3xl'}>
            1200+
          </Heading>
          <Heading textAlign={'center'} fontSize={'2xl'}>
            {' '}
            hours of coding
          </Heading>
        </Box>

        <Box borderRadius={10} p={5} bg={Theme.about.cardBgColor}>
          <Heading textAlign={'center'} fontSize={'3xl'}>
            500+
          </Heading>
          <Heading textAlign={'center'} fontSize={'2xl'}>
            hours of DSA
          </Heading>
        </Box>
        <Box borderRadius={10} p={5} bg={Theme.about.cardBgColor}>
          <Heading textAlign={'center'} fontSize={'3xl'}>
            6
          </Heading>
          <Heading textAlign={'center'} fontSize={'2xl'}>
            {' '}
            months of training
          </Heading>
        </Box>
        <Box borderRadius={10} p={5} bg={Theme.about.cardBgColor}>
          <Heading textAlign={'center'} fontSize={'3xl'}>
            3
          </Heading>
          <Heading textAlign={'center'} fontSize={'2xl'}>
            {' '}
            projects completed
          </Heading>
        </Box>
        <Box borderRadius={10} p={5} bg={Theme.about.cardBgColor}>
          <Heading textAlign={'center'} fontSize={'3xl'}>
            6+
          </Heading>
          <Heading textAlign={'center'} fontSize={'2xl'}>
            {' '}
            months teaching experience
          </Heading>
        </Box>
      </Grid>
      <Spacer/>
      <Heading
       
        borderRadius={6}
        textAlign={'center'}
        bg={Theme.about.cardBgColor}
      >
        Github Calander
      </Heading>
      <Spacer/>
     <Stack overflowX={"hidden"} borderRadius={10} p={8} justifyContent={"center"} alignItems={"center"}  bg={Theme.about.cardBgColor}>
     <GitHubCalendar  blockRadius={10} fontSize={16} blockSize={24} style={{fontWeight:"bold",backgroundColor:"",padding:"10px",borderRadius:"10px"}} username="shailendra7518" responsive={true}  />
     </Stack>
    </Stack>
  );
}

export default Statics;
