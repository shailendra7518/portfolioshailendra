import { Box, Container, Heading, Text, Spacer, Stack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContextProvider';

function PersonalDetail() {
  const { Theme } = useContext(AppContext);

  console.log(Theme);

  return (
    <Container
      shadow={'lg'}
      mt={4}
      maxW={''}
      p={8}
      bgColor={Theme.about.backgroundColor}
    >
      <Stack direction={['column', 'column', 'row']}>
        <Box
          p={[2, 4, 4, 10]}
          w={['100%', '100%', '50%']}
          bg={Theme.about.cardBgColor}
          borderRadius={10}
        >
          <Heading fontSize={['md', 'lg', '2xl']}>Personal Details</Heading>
          <hr style={{ marginTop: '4px', borderTop: '3px solid grey' }} />
          <Stack direction={['column', 'row', 'row']} mt={6}>
            <Text as={'b'}>Email</Text> <Text>shailendraftp0001@gmail.com</Text>
          </Stack>

          <Spacer />
          <Spacer />
          <Spacer />
          <Stack direction={['column', 'row', 'row']}>
            <Text as={'b'}>Language</Text> <Text>English,Hindi</Text>
          </Stack>
          <Stack direction={['column', 'row', 'row']}>
            <Text as={'b'}>Location</Text>{' '}
            <Text>Fatehpur,Uttar Pradesh,India</Text>
          </Stack>
        </Box>
        <Box
          p={[2, 4, 4, 10]}
          w={'100%'}
          bg={Theme.about.cardBgColor}
          borderRadius={10}
        >
          <Heading fontSize={['xl', '2xl', '3xl']}>
            I am Full Stack Web Developer
          </Heading>

          <Text mt={2} fontSize={['l', 'lg', 'xxl']}>
            My name is Shailendra kumar, I am from Fatehpur, Uttar Pradesh. I
            have completed BA & have knowledge of HTML, CSS , Javascript, React,
            Redux, NodeJs, MongoDB. I want to work as a Full Stack Web
            Developer.
          </Text>

          <Text
            mt={30}
            fontSize={'4xl'}
            fontStyle={'italic'}
            fontFamily={'cursive'}
          >
            {' '}
            Shailendra Kumar
          </Text>
        </Box>
      </Stack>
    </Container>
  );
}

export default PersonalDetail;
