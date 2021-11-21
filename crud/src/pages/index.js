import { Box, Button, Flex, Text, VStack, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'
import { InputForm } from "../components/input"

export default function Home() {
  return (
    <Box margin="4">
      <Flex justifyContent="space-between">
        <Text color="black" fontSize="2xl">Lista de clientes</Text>
        <Button colorScheme="blue">+</Button>
      </Flex>
      <VStack marginY="1rem">
        <InputForm label="Nome" name="name" type="text" />
        <InputForm label="Email" name="email" type="email" />
        <Button alignSelf="flex-end" rightIcon={<AddIcon />} colorScheme="blue" variant="outline">
          Cadastrar usuário
        </Button>
      </VStack>
      <Table>
        <TableCaption>Usuários cadastrados no sistema.</TableCaption>
        <Thead bgColor="blue.500">
          <Tr>
            <Th textColor="white">Usuário</Th>
            <Th textColor="white">E-mail</Th>
            <Th textColor="white">Ação</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Darlley</Td>
            <Td>darlleybrito@gmail.com</Td>
            <Td>
              <Flex>
                <Button borderRadius="6px 0 0 6px" size="sm" colorScheme="yellow">Editar</Button>
                <Button borderRadius="0 6px 6px 0" size="sm" colorScheme="red">Excluir</Button>
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}
