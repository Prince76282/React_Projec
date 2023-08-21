import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Input,
    VStack,
  Text
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Box bgColor={' blackAlpha.600'} min={'40'} p="16" color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size="nd" textTransform={'uppercase'}>
              Subscribe to get update
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
              <Input
                placeholder="Enter the email"
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor="none"
              />
              <Button
                p="0"
                colorScheme="purple"
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={20} />
              </Button>
            </HStack>
          </VStack>
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              VIDEO HUB
            </Heading>
            <Text>All Right Received</Text>
          </VStack>

          <VStack w={'full'}>
            <Heading size={'nd'} textTransform={'uppercase'} textAlign={'center'}>
              Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'white'}>
              <a href="https://youtu.be/b50zSyLiCYQ">Youtube</a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
              <a href="https://youtu.be/b50zSyLiCYQ">Instagram</a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
              <a href="https://youtu.be/b50zSyLiCYQ">github</a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
