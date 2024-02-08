import { Flex, Stack, Text, Divider, Heading } from "@chakra-ui/react"

export default function Card({ data }) {
    // console.log(data)
    return (
        <>
            <Heading size={'md'} fontWeight={500}>Cards</Heading>
            <Flex gap={4} wrap={'wrap'}>
                {data.length
                    ? data.map((card, index) => {
                        return (
                            <Stack
                                minW={'35px'}
                                align={'center'}
                                borderRadius={'5px'}
                                border={'solid'}
                                borderWidth={1}
                                key={index}
                            >
                                <Text>{card[0]}</Text>
                                <Divider />
                                <Text> {card[1]} </Text>
                            </Stack>
                        )
                    })
                    : <>-</>
                }
            </Flex>
        </>
    )
}