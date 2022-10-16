import {
  Grid,
  Heading,
  Stack,
  Text,
  Spacer,
  useToast,
} from '@chakra-ui/react';
import './contact.css';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContextProvider';
import { FaPhone, FaSearchLocation } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import emailjs from 'emailjs-com';
function Contact() {
  const toast = useToast();
  const { Theme, screenSize } = useContext(AppContext);

  const [isde, setisde] = useState(false);

  function sendEmail(e) {
    //This is important, i'm not sure why, but the email won't send without it
    e.preventDefault();
    setisde(true);
    emailjs
      .sendForm(
        'service_u02nhle',
        'template_hgjym55',
        e.target,
        'TIbSTu9Y2SkRta4ES'
      )
      .then(
        result => {
          toast({
            title: `Email has bees sent`,
            position: 'top',
            status: 'success',
            isClosable: true,
          });
          setisde(false);
          document.getElementById('myform').reset();
          //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <Stack mt={4} p={[1,8,8]} bg={Theme.about.backgroundColor}>
      <Heading
        borderRadius={6}
        textAlign={'center'}
        bg={Theme.about.cardBgColor}
      >
        Contact
      </Heading>
      <Spacer />
      <Grid
        gap={4}
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}
      >
        <Stack
          p={3}
          borderRadius={10}
          justifyContent={'center'}
          alignItems={'center'}
          bg={Theme.about.cardBgColor}
        >
          <FaPhone size={'30px'} />
          <Heading fontSize={'3xl'}>Phone</Heading>
          <Text fontWeight={'bold'} fontSize={'1xl'}>
            7518034435
          </Text>
        </Stack>

        <Stack
          p={3}
          borderRadius={10}
          justifyContent={'center'}
          alignItems={'center'}
          bg={Theme.about.cardBgColor}
        >
          <AiOutlineMail size={'30px'} />
          <Heading fontSize={'3xl'}>Email</Heading>
          <Text fontWeight={'bold'} fontSize={'1xl'}>
            shailendraftp0001@gmail.com
          </Text>
        </Stack>

        <Stack
          p={3}
          borderRadius={10}
          justifyContent={'center'}
          alignItems={'center'}
          bg={Theme.about.cardBgColor}
        >
          <FaSearchLocation size={'30px'} />
          <Heading fontSize={'3xl'}>Location</Heading>
          <Text fontWeight={'bold'} fontSize={'1xl'}>
            Surat,Gujrat
          </Text>
        </Stack>
      </Grid>
      <Spacer />
      <Grid
        gap={6}
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)']}
      >
        <Stack p={8} borderRadius={10} bg={Theme.about.cardBgColor}>
          <form
            id="myform"
            style={{
              display: 'grid',
              gridTemplateColumns: screenSize < 900 ? '100%' : '50% 50%',
            }}
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div>
              {/* <label>Name</label> */}
              <input
                placeholder="Contact no."
                required={true}
                s
                name="contact_number"
              />
              <input
                placeholder="Name"
                required={true}
                type="text"
                name="from_name"
              />
              {/* <label>Email</label> */}
              <input
                placeholder="Email"
                required={true}
                type="email"
                name="from_email"
              />
              {/* <label>Subject</label> */}
              <input
                placeholder="Subject"
                required={true}
                type="text"
                name="subject"
              />
            </div>

            <div>
              <label>Message</label>
              <textarea required={true} name="html_message" />

              <input
                type="submit"
                value={isde ? 'Loading...' : 'Send'}
                className="send"
              />
            </div>
          </form>
        </Stack>
      </Grid>
    </Stack>
  );
}

export default Contact;
