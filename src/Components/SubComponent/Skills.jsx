import { Heading,Box,Stack, Grid,Text,Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContextProvider'

function Skills() {
 const {Theme}=useContext(AppContext)
  return (
    
    <Stack p={[1,8,8]} mt={4} bg={Theme.about.backgroundColor} direction={"column"}>
      <Box w={"100%"}>
        <Heading borderRadius={6} textAlign={"center"} bg={Theme.about.cardBgColor}>Soft Skills</Heading>
          <Grid columnGap={[8,8,20]} rowGap={8}  mt={3} templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']}>
          <Box   shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
            
            <Image
              h={[300,150,150]}
              w={["100%","100%","100%"]}
              src="https://miro.medium.com/max/1400/1*EUKJgrKDxrbmBbFtP0Iq7A.jpeg"
            />
            <Text fontWeight={'bold'} textAlign={'center'}>
              TeamWork
            </Text>
          </Box>
          <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
            
            <Image
               h={[300,150,150]}
               w={["100%","100%","100%"]}
              src="https://opensourcedworkplace.com/wp-content/uploads/2021/08/630346489news_9999.jpg"
            />
            <Text fontWeight={'bold'} textAlign={'center'}>
            Adaptability 
            </Text>
          </Box>
          <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
            
            <Image
            alignSelf={"center"}
            h={[300,150,150]}
            w={["100%","100%","100%"]}
              src="https://biz30.timedoctor.com/images/2021/01/time-management-while-work-from-home.jpg"
            />
            <Text fontWeight={'bold'} textAlign={'center'}>
            Time Management
            </Text>
          </Box>
          <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
            
            <Image
            alignSelf={"center"}
            h={[300,150,150]}
            w={["100%","100%","100%"]}
              src="https://2.bp.blogspot.com/-gzdcIKOI39w/XNkT3TE4oWI/AAAAAAAAw58/YnKLwAI8cxIdnPi8gOrNU1tC5hj2RPWHgCLcBGAs/s1600/solution-3696900_1280.png"
            />
            <Text fontWeight={'bold'} textAlign={'center'}>
            Problem Solving
            </Text>
          </Box>
          </Grid>
      </Box>
      <Box w={"100%"}>
        <Heading borderRadius={6} textAlign={"center"} mt={4} bg={Theme.about.cardBgColor}>Techinical Skills</Heading>
          <Grid mt={3} columnGap={[8,8,20]} rowGap={8} templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']}>
          <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
            
            <Image
               h={[300,150,150]}
               w={["100%","100%","160%"]}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97aX6dI3-1e-M965NIk69aYgOTCvJJam6UA&usqp=CAU"
            />
            <Text fontWeight={'bold'} textAlign={'center'}>
            Web development
            </Text>
          </Box>
          <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
            
            <Image
               h={[300,150,150]}
               w={["100%","100%","100%"]}
              src="https://cdn.educba.com/academy/wp-content/uploads/2015/12/Computer-Programming-Language.jpg"
            />
            <Text fontWeight={'bold'} textAlign={'center'}>
            Programming L
            </Text>
          </Box>
          <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
            
            <Image
            alignSelf={"center"}
            h={[300,150,150]}
            w={["100%","100%","100%"]}
              src="https://futuretechnoindia.com/wp-content/uploads/2022/02/product_30565_product_shot_wide-2.jpg"
            />
            <Text textOverflow={"overflow"} fontWeight={'bold'} textAlign={'center'}>
               DSA
            </Text>
          </Box>
          <Box  shadow={'lg'} borderRadius={20} bg={Theme.about.cardBgColor} p={5}>
            
            <Image
            alignSelf={"center"}
            h={[300,150,150]}
            w={["100%","100%","100%"]}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAxoD27jUmxsZ6mx1mzM8n8V-cbJPTIdkhcg&usqp=CAU"
            />
            <Text fontWeight={'bold'} textAlign={'center'}>
            Teaching
            </Text>
          </Box>
          </Grid>
      </Box>
    </Stack>
    
  )
}

export default Skills