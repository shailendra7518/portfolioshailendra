import {
  Container,
  Stack,
  Image,
  Box,
  Heading,
  Text,
  Button,
  Grid,
} from '@chakra-ui/react';
import React, { useContext} from 'react';
import { AppContext } from '../../Context/AppContextProvider';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaHtml5,FaNodeJs,FaGithub, FaLink, } from 'react-icons/fa';
import {  IconBrandJavascript,IconBrandCss3 } from '@tabler/icons';
import { DiMongodb } from "react-icons/di";

const arr = [
  'https://user-images.githubusercontent.com/87424668/161422371-3ab5850c-9173-4d29-a012-48bc3b9880e6.png',
  'https://user-images.githubusercontent.com/87424668/161422661-fe312dd3-076a-487c-978c-c1f5f44eed97.png',
  'https://user-images.githubusercontent.com/87424668/161422905-d689c712-66c2-4992-aa38-d200a8741648.png',
  'https://user-images.githubusercontent.com/87424668/161422909-565b0f4e-cd23-4850-ad31-c1cad0653833.png',
  'https://user-images.githubusercontent.com/87424668/161422716-a5914510-65a3-4586-91aa-facd1b051fa0.png',
  'https://user-images.githubusercontent.com/87424668/161422734-4490de87-7dc6-42ce-a040-2f7d847530a3.png',
  "https://user-images.githubusercontent.com/87424668/161422736-b7351b5a-05e3-4f76-b26d-d7d06a1051b9.png",
  "https://user-images.githubusercontent.com/87424668/161422814-0a365da0-6803-478b-9a52-af0e60fc8aa2.png",
  "https://user-images.githubusercontent.com/87424668/161422815-17c4c0fc-23bf-4c17-a1ef-a5c39b0121bf.png"
];

const MyCarousel = arrOfurl => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
      {arrOfurl &&
        arrOfurl?.map(url => {
          return <Image w={200} h={240} src={url} />;
        })}
    </Carousel>
  );
};

function Projects() {
  const { Theme } = useContext(AppContext);
  return (
    <Container p={8} mt={4} maxW={''} bg={Theme.about.backgroundColor}>
         <Heading  borderRadius={6} textAlign={"center"} bg={Theme.about.cardBgColor}>Projects</Heading>
      <Stack
      mt={4}
        justifyContent={'space-between'}
        direction={['column', 'column', 'row']}
        p={4}
        borderRadius={10}
        bg={Theme.about.cardBgColor}
      >
        <Box w={['100%', '100%', '40%']}>{MyCarousel(arr)}</Box>
        <Box w={['100%', '100%', '56%']}>
          <Heading fontSize={'3xl'}>Agodo Clone</Heading>
          <Text fontStyle={"italic"}  mt={3} fontWeight={'Sample'}>
            In this project we have tried to make a look alike clone of Agoda
            Website. With our efforts and the technology stack, that we have
            learned till now in Unit-5 in Masai School, we were able to clone
            the front end, integrated it with backend and added similar looks
            and features..
          </Text>
          <Text mt={2} fontFamily={'heading'} fontWeight={'bold'}>
            A collaborative project, built in 5 days by a team of 5 developers.
          </Text>
          <Grid mt={3} gap={3} templateColumns={['repeat(1, 1fr)','repeat(4, 1fr)','repeat(5, 1fr)']}>
            <Button leftIcon={<FaHtml5 />} colorScheme="green" variant="solid">
              HTML
            </Button>
            <Button leftIcon={<IconBrandJavascript />} colorScheme="green" variant="solid">
              JavaScript
            </Button>
            <Button leftIcon={<IconBrandCss3 />} colorScheme="green" variant="solid">
              CSS
            </Button>
            <Button leftIcon={<FaNodeJs />} colorScheme="green" variant="solid">
              NodeJs
            </Button>
            <Button leftIcon={<DiMongodb />} colorScheme="green" variant="solid">
              MongoDB
            </Button>
          </Grid>
          <Grid mt={4} gap={10} templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>
          <Button leftIcon={<FaGithub />} colorScheme="gray" variant="solid">
             Github
            </Button>
            <Button leftIcon={<FaLink />} colorScheme="teal" variant="solid">
              Live
            </Button>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}

export default Projects;
