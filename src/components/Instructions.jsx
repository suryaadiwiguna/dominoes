import { Heading, UnorderedList, ListItem } from "@chakra-ui/react"
export default function Instructions() {
    return (
        <>
            <Heading size={'md'} fontWeight={500}>Set Initial Cards</Heading>
            <UnorderedList>
                <ListItem>{`Each cards' numbers is separated by comma (,)`}</ListItem>
                <ListItem>{`Each cards is separated by semicolon (;)`}</ListItem>
                <ListItem>{`Numbers only. Else, it will be shown as NaN (Not a number)`}</ListItem>
            </UnorderedList>
        </>
    )
}
