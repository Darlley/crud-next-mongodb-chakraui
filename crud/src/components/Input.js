import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

export const InputForm = ({label, name, ...rest}) => {
    return (
        <FormControl marginY=".5rem">
          <FormLabel>{label}</FormLabel>
          <Input name={name} {...rest} />
          {rest.type === 'email' && <FormHelperText>Não compartilhe seu e-mail de login.</FormHelperText>}
        </FormControl>
    )
}