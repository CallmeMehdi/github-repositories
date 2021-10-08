import { Input, InputGroup, InputLeftElement, InputRightElement, Button, PhoneIcon } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { GrGithub } from "react-icons/gr"
import React from 'react';

export default function SearchInput(props) {
    
    const [value, setValue] = React.useState("")
    const handleChange = (event) => setValue(event.target.value)


    const updateUsername = () => {
        props.parentCallback(value)
    }

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
                value={value}
                onChange={handleChange}
            />
            <InputRightElement width="5.5rem">
                <Button h="1.75rem" size="sm" onClick={updateUsername}>
                    Search
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}