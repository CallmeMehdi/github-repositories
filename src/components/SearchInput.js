import { Input, InputGroup, InputLeftElement, InputRightElement, Button, PhoneIcon } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { GrGithub } from "react-icons/gr"

export default function SearchInput() {
    // const [show, setShow] = React.useState(false)
    // const handleClick = () => setShow(!show)

    return (
        <InputGroup size="md" bg="white">
            <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children={ <Icon as={GrGithub} /> }
            />
            <Input
                pr="4.5rem"
                type="text"
                placeholder="Search for a GitHub username"
            />
            <InputRightElement width="5.5rem">
                <Button h="1.75rem" size="sm">
                    Search
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}