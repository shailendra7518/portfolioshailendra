import { Stack ,Image, Spacer, Button, Grid} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { AppContext } from '../../Context/AppContextProvider';
import { ImMenu ,ImCross} from "react-icons/im";

function Navbar() {
const {screenSize,Theme}=useContext(AppContext)
const [isClose,setisClose]=useState(false)
 return ( screenSize<480   ?  <>  <Stack zIndex={3} top={0} bg={Theme.about.cardBgColor}  position={"fixed"}  w={"100%"} maxH={""} shadow={"lg"} p={3} direction={["row"]}>
 <Image w={10} h={10} borderRadius={"50%"} src={"https://www.linkpicture.com/q/profile_24.png"}/>
 <Spacer/>
 <Button onClick={()=>setisClose(!isClose)}>{isClose ?<ImCross/>:<ImMenu/> }</Button>
 {isClose ? <Grid  left={-2}  gap={2} p={4} top={"60px"} w={"100%"} bg={Theme.about.cardBgColor}  position={"absolute"} templateColumns={['repeat(1, 1fr)']}  >
 <Button onClick={()=>{
   window.scroll({
    top: 0,
    behavior: 'smooth'
  });
   }}>About</Button>

<Button onClick={()=>{
   window.scroll({
    top: 1240,
    behavior: 'smooth'
  });
   }}>Tech&Tools</Button>
   <Button onClick={()=>{
   window.scroll({
    top: 2900,
    behavior: 'smooth'
  });
   }}>Skills</Button>
    <Button onClick={()=>{
   window.scroll({
    top: 6170,
    behavior: 'smooth'
  });
   }}>Project</Button>
     <Button onClick={()=>{
   window.scroll({
    top: 22070,
    behavior: 'smooth'
  });
   }}>Contact</Button></Grid>:null }
 

 <ColorModeSwitcher/>
</Stack></>: <>

  <Stack zIndex={3} top={0} bg={Theme.about.cardBgColor} mt={"0px"} position={"fixed"}  w={"100%"} maxH={""} shadow={"lg"} p={3} direction={["row"]}>
    <Image w={10} h={10} borderRadius={"50%"} src={"https://www.linkpicture.com/q/profile_24.png"}/>
    <Spacer/>
   <Button onClick={()=>{
   window.scroll({
    top: 0,
    behavior: 'smooth'
  });
   }}>About</Button>

<Button onClick={()=>{
   window.scroll({
    top: 740,
    behavior: 'smooth'
  });
   }}>Tech&Tools</Button>
   <Button onClick={()=>{
   window.scroll({
    top: 1500,
    behavior: 'smooth'
  });
   }}>Skills</Button>
    <Button onClick={()=>{
   window.scroll({
    top: 2150,
    behavior: 'smooth'
  });
   }}>Project</Button>
     <Button onClick={()=>{
   window.scroll({
    top:3870,
    behavior: 'smooth'
  });
   }}>Contact</Button>
   
    
   
    <ColorModeSwitcher/>
  </Stack>
  </>
 )
}

export default Navbar;
