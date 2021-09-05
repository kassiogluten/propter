import {
  Heading,
  VStack,
  Text,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";

import React, { useState } from "react";

import { useForm } from "react-hook-form";

export function ContactForm({ color }) {
  const {
    register,
    trigger,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function handleSendMessage(data) {
    setIsLoading(true);

    toast({
      title: "OBRIGADO !",
      description: "Sua mensagem foi enviada.",
      status: "success",
      isClosable: true,
      position: "top",
      onCloseComplete: () => setIsLoading(false),
    });
  }
  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(handleSendMessage)}
      //transform="translateY(-100px)"
      mt={-130}
      w="full"
      maxW={500}
      minH={500}
      p={6}
      borderRadius={10}
      boxShadow="0px 31px 80px rgba(4, 17, 25, 0.1)"
      bg="white"
    >
      <VStack
        sx={{
          input: { fontSize: 12 },
          textArea: { fontSize: 12 },
          button: { borderRadius: 1 },
        }}
        w="full"
        align="start"
      >
        <Input
          bg="#EEE"
          id="Nome"
          borderColor={errors.Nome ? "red" : "white"}
          p="25px"
          placeholder="Nome"
          type="text"
          {...register("Nome", { required: true })}
        />
        {errors.Nome && <Text color="red">Nome obrigatório!</Text>}

        <Input
          borderRadius={2}
          bg="#EEE"
          id="Email"
          borderColor={errors.Email ? "red" : "white"}
          p="25px"
          placeholder="E-mail"
          type="text"
          {...register("Email", { required: true })}
        />
        {errors.Email && <Text color="red">Email obrigatório!</Text>}

        <Input
          borderRadius={2}
          bg="#EEE"
          id="Telefone"
          borderColor={errors.Telefone ? "red" : "white"}
          p="25px"
          placeholder="Telefone"
          type="text"
          {...register("Telefone", { required: true })}
        />
        {errors.Telefone && <Text color="red">Telefone obrigatório!</Text>}

        <Textarea
          bg="#EEE"
          h={200}
          id="Mensagem"
          placeholder="Mensagem?"
          {...register("Mensagem")}
        />
      </VStack>
      {!isValid ? (
        <Button
          colorScheme="none"
          fontSize={12}
          sx={{ cursor: "not-allowed", borderRadius: 5 }}
          opacity=".5"
          bg={color}
          color="white"
          h="50px"
          w="100%"
          onClick={() => {
            trigger();
          }}
        >
          Enviar mensagem
        </Button>
      ) : (
        <Button
          colorScheme="none"
          fontSize={13}
          sx={{ borderRadius: 5 }}
          _loading={{ color: "white" }}
          isLoading={isLoading}
          h="50px"
          bg={color}
          color="white"
          w="full"
          type="submit"
        >
          Enviar
        </Button>
      )}
    </VStack>
  );
}
