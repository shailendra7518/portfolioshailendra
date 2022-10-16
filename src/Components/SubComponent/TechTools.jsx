import {
  Box,
 
  Image,
  Text,
  Container,
  Heading,
 
  Grid
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContextProvider';

function TechTools() {
  const { Theme } = useContext(AppContext);
  return (
    <Container maxW={''} mt={4} p={[1,8,8]}  bgColor={Theme.about.backgroundColor}>

        <Heading borderRadius={6} textAlign={"center"} mt={4} bg={Theme.about.cardBgColor}>Tech Stack</Heading>
      

      <Grid  mt={4} gap={8} templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(5, 1fr)']}>
        <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
            
          <Image
            h={100}
            w={[200,"100%","100%"]}
            src="https://mohitkss.github.io/static/media/html5.4e6edfe05f07c383e94f.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            HTML
          </Text>
        </Box>
        <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
            h={100}
            w={[200,"100%","100%"]}
            src="https://mohitkss.github.io/static/media/css3.845e8eb63836bef093cf.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            CSS
          </Text>
        </Box>
        <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
           h={100}
           w={[200,"100%","100%"]}
            src="https://mohitkss.github.io/static/media/js.3dfb665e058d08c99f28.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            JavaScript
          </Text>
        </Box>
        <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
            h={100}
            w={[200,"100%","100%"]}
            src="https://mohitkss.github.io/static/media/git.b1472a80b81e487179cf.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            Git/Github
          </Text>
        </Box>
        <Box j shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
            h={100}
            w={[200,"100%","100%"]}
            src="https://mohitkss.github.io/static/media/mongodb.4f7af09e6354d51beec8.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            MongoDB
          </Text>
        </Box>
        <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
           h={100}
           w={[200,"100%","100%"]}
            src="https://mohitkss.github.io/static/media/nodejs.b508473ad71a31ce2fae.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            NodeJS
          </Text>
        </Box>
        <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
           h={100}
           w={[200,"100%","100%"]}
            src="https://mohitkss.github.io/static/media/react.22d1f2096ed82cab7a8a.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            ReactJS
          </Text>
        </Box>
        <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
           h={100}
           w={[200,"100%","100%"]}
            src="https://mohitkss.github.io/static/media/redux.7fec6369cecd1cbd44d6.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            Redux
          </Text>
        </Box>
        <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
          h={100}
          w={[200,"100%","100%"]}
            src="https://mohitkss.github.io/static/media/mern.b58d81727b47466a7cda.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            MERN
          </Text>
        </Box>
        <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
           h={100}
           w={[200,"100%","100%"]}
            src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            NextJS
          </Text>
        </Box>
        
      </Grid>

      
        <Heading borderRadius={6} textAlign={"center"} mt={4} bg={Theme.about.cardBgColor} >Tools</Heading>
    

      <Grid mt={4} pb={5} gap={8} templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(5, 1fr)']}>
        <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
            
          <Image
           h={100}
           w={[200,"100%","100%"]}
            src="https://www.computerhope.com/jargon/w/windows.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            Windows
          </Text>
        </Box>
        <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
         h={100}
         w={[200,"100%","100%"]}
            src="https://pbs.twimg.com/profile_images/689189555765784576/3wgIDj3j_400x400.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            Heroku
          </Text>
        </Box>
        <Box shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
           h={100}
           w={[200,"100%","100%"]}
            src="https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
            Vercel
          </Text>
        </Box>
        <Box shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
           h={100}
           w={[200,"100%","100%"]}
            src="https://pbs.twimg.com/profile_images/1413544188411482112/61xGHyIi_400x400.jpg"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
           Netlify
          </Text>
        </Box>
        <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
          <Image
           h={100}
           w={[200,"100%","100%"]}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
          />
          <Text fontWeight={'bold'} textAlign={'center'}>
       VScode
          </Text>
        </Box>
      
        
      </Grid>
    </Container>
  );
}

export default TechTools;
