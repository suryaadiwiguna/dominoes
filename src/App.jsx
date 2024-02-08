import { Button, Heading, Input, Stack, Flex, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Card from './components/Card'
import Double from './components/Double'
import { parseInput, flip, removeCardWithTotalNumberOf, removeCardWithDuplicateNumbers, sortCardsAsc, sortCardDesc } from './utils/actions'
import Instructions from './components/Instructions'

export default function App() {

  const [input, setInput] = useState("6,1;4,3;5,1;3,4;1,1;3,4;1,2")
  const [data, setData] = useState([])
  const [sumCard, setSumCard] = useState(0)

  useEffect(() => {
    submit(input)
  }, [])

  function flipCard() {
    const flipped = flip(data)
    setData(flipped)
  }

  function removeCardSum(data, totalNum) {
    const cards = removeCardWithTotalNumberOf(totalNum, data)
    setData(cards)
  }

  function reset() {
    submit(input)
  }

  function removeDuplicate(data) {
    const cards = removeCardWithDuplicateNumbers(data)
    setData(cards)
  }

  function sortAsc(data) {
    const ascOrder = sortCardsAsc(data)
    setData(ascOrder)
  }

  function sortDesc(data) {
    const descOrder = sortCardDesc(data)
    setData(descOrder)
  }

  function submit(rawData) {
    const cards = parseInput(rawData)
    setData(cards)
  }

  return (
    <>
      <Stack gap={6} align={'center'} p={10}>
        <Stack mb={5} gap={0} textAlign={'center'}>
          <Heading >Dominoes</Heading>
          <Text>by Surya Adi Wiguna</Text>
        </Stack>

        <Instructions />

        <Input
          variant={'outline'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxW={'450px'}
        />
        <Button onClick={() => submit(input)} colorScheme={'blue'}>Set Cards</Button>

        <Card data={data} />
        <Double data={data} />
        <Heading size={'md'} fontWeight={500}>Actions</Heading>
        <Stack gap={3} w={'fit-content'}>
          <Button onClick={reset} colorScheme={'teal'}>Reset</Button>
          <Button onClick={flipCard} colorScheme={'blue'} >Flip Cards</Button>
          <Button onClick={() => sortAsc(data)} colorScheme={'blue'}>{`Sort (Asc)`} </Button>
          <Button onClick={() => sortDesc(data)} colorScheme={'blue'}>{`Sort (Desc)`} </Button>
          <Button onClick={() => removeDuplicate(data)} colorScheme={'orange'}>Remove Duplicate</Button>
          <Stack gap={3} >
            <Text>Remove card(s) that has a total value of:</Text>
            <Flex gap={3}>
              <Input
                variant={'outline'}
                value={sumCard}
                onChange={(e) => setSumCard(Number(e.target.value))}
              />
              <Button onClick={() => removeCardSum(data, sumCard)} colorScheme={'orange'}>Remove</Button>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}



