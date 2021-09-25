import { 
    FormControl, FormLabel, Input, FormHelperText 
  } from "@chakra-ui/react"

export const InputForm = ({label, type, name}) => {

    return (
        <FormControl marginY=".5rem">
          <FormLabel>{label}</FormLabel>
          <Input type={type} name={name} />
          {(type == "email") && <FormHelperText>Não compartilhe seu e-mail de login.</FormHelperText>}
        </FormControl>
    )
}