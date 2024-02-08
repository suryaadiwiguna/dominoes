import { Box, Heading, Stack, Text } from "@chakra-ui/react";


export default function Double({ data }) {

    let double = 0;

    data.forEach((card) => { if (card[0] === card[1]) double += 1 })

    return (
        <>
            <Stack align={'center'}>
                <Heading fontWeight={500} size={'md'}>{`Card(s) With Equal Numbers`}</Heading>
                <Box border={'solid'} maxW={'10rem'} borderRadius={'10px'} borderWidth={1} bg={'blue.50'}>
                    <Text w={'max-content'} px={50} py={3}>
                        {double}
                    </Text>
                </Box>
            </Stack>
        </>
    )
}
