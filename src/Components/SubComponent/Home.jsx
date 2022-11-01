import {
  Box,
  Button,
  Heading,
  VStack,
  Stack,
  Text,
  Image,
  Spacer,
  useDisclosure,
  Modal,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import '../../App.css';

import { saveAs } from 'file-saver';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContextProvider';
import { DownloadIcon } from '@chakra-ui/icons';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/shailendra_resume.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Home() {
  const { Theme } = useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack
        p={[1,8,8]}
        spacing={20}
        justifyContent={'space-evenly'}
        alignItems={'center'}
        bgColor={Theme.about.backgroundColor}
        mt={20}
        direction={['column', 'column', 'row']}
      >
        <Image
          borderRadius={20}
          bgColor={Theme.about.cardBgColor}
          shadow={'lg'}
          h={['360px','260px','260px']}
          w={['100%','260px','260px']}
          p={5}
          src="https://avatars.githubusercontent.com/u/93985081?s=400&u=e14633ad5127082a451e9eab2e136955cd766451&v=4"
        />

        <Box
          shadow={'lg'}
          maxW={['100%', '100%', '70%']}
          p={50}
          bgColor={Theme.about.cardBgColor}
          borderRadius={20}
        >
          <VStack>
            <Heading fontSize={['xl', '2xl', '3xl']}>
              Hi, I'm Shailendra Kumar.
            </Heading>

            <Text fontSize={['l', 'lg', 'xxl']}>
              I am Full Stack Web Developer and i have knowledge in HTML, CSS,
              JS, REACT and i make user-friendly websites.
            </Text>
            <Spacer />
            <Spacer />
            {/* <a  href={resume} target="_blank"> */}
            <Button
              color={Theme.about.buttonColor}
              w={[100, 130, 150]}
              p={[2, 3, 5]}
              bgColor={Theme.about.buttonBgColor}
              onClick={() => {
                saveAs(resume, 'shailendra_resume.pdf');
              }}
            >
              Resume &nbsp; <DownloadIcon />
            </Button>
            {/* </a> */}
          </VStack>
        </Box>
        <Modal
          size={['sm', 'md', '2xl']}
          blockScrollOnMount={false}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody bg={Theme.about.backgroundColor} justifyContent="center">
              <Document file={resume}>
                <Page pageNumber={1} />
              </Document>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Spacer />

              <Button
                onClick={() => saveAs(resume, 'shailendra_resume.pdf')}
                variant="ghost"
              >
                Secondary Action
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    </>
  );
}

export default Home;
