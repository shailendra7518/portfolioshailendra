import {  Stack, Button,Text, Spacer,Link } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContextProvider'
import { FaGithub,FaTwitter,FaLinkedin } from 'react-icons/fa';
function Footer() {
    const {Theme}=useContext(AppContext)
  return (
    <Stack p={4} direction={"row"} w={""} bg={Theme.about.cardBgColor}>
        <Text fontStyle={"italic"} fontSize={"large"}>Designed and Developed by Shailendra kumar</Text>
        <Spacer></Spacer>
        <Text>Copyright © 2022 SK</Text>
        <Spacer/>
      <Button   leftIcon={<FaGithub/>} > <Link target={"_blank"} href='https://github.com/shailendra7518'>Github</Link> </Button>
      <Button  leftIcon={<FaLinkedin/>} > <Link target={"_blank"} href='https://www.linkedin.com/in/shailendra-kumar-maurya'>Linkdin</Link> </Button>
      <Button  leftIcon={<FaTwitter/>} > <Link target={"_blank"} href='https://twitter.com/ShailendraUP71'>Twitter</Link></Button>
    </Stack>
  )
}

export default Footer