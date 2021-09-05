import { CloseIcon } from "@chakra-ui/icons";
import { Box, CloseButton, Heading, Text, VStack, Wrap } from "@chakra-ui/react";
import { useMyContext } from "../contexts/Context";
import { CalculatorSvg, CardSvg, CarSvg, JournalSvg, LinkSvg, MoneySvg, PublicSvg, WriteSvg } from "../icons";

export function MenuServices() {
  const { setIsServicesOpen } = useMyContext();
  return (
    <Wrap
      pos="absolute"
      top={{ base: 100, md: 220 }}
      left="50%"
      transform="translateX(-50%)"
      w="95%"
      maxW={1200}
      zIndex={5}
      px={6}
      bg="white"
      color="cinza"
      borderRadius={10}
      boxShadow="xl"
      onClick={() => setIsServicesOpen(false)}
      onMouseLeave={() => setIsServicesOpen(false)}
      justify="space-between"
    >
      <CloseButton pos="absolute" right={4} top={4}/>
      <VStack as="a" href="/contabilidade" textAlign="start" align="start" py={8}>
        <CalculatorSvg />
        <Heading fontSize={16}>Contabilidade</Heading>
        <Text
          maxW={230}
          fontSize={14}
          lineHeight={"24px"}
          color="#7D8489"
          pr={4}
        >
          Apresentamos uma nova forma de contabilidade para melhorar sua
          empresa.
        </Text>
      </VStack>
      <VStack as="a" href="/seguros" textAlign="start" align="start" py={8}>
        <MoneySvg />
        <Heading fontSize={16}>Seguros</Heading>
        <Text
          maxW={230}
          fontSize={14}
          lineHeight={"24px"}
          color="#7D8489"
          pr={4}
        >
          Conheça o melhor crédito do mercado, que pode te dar aquela força no
          orçamento.
        </Text>
      </VStack>
      <VStack as="a" href="/emprestimos-e-financiamentos" textAlign="start" align="start" py={8}>
        <CarSvg />
        <Heading fontSize={16}>Empréstimo/Financiamentos</Heading>
        <Text
          maxW={230}
          fontSize={14}
          lineHeight={"24px"}
          color="#7D8489"
          pr={4}
        >
          Seu financiamento imobiliário com a melhor taxa do mercado.
        </Text>
      </VStack>
      <VStack as="a" href="/maquina-de-cartao" textAlign="start" align="start" py={8}>
        <CardSvg />
        <Heading fontSize={16}>Máquinas de cartão</Heading>
        <Text
          maxW={230}
          fontSize={14}
          lineHeight={"24px"}
          color="#7D8489"
          pr={4}
        >
          A Propter tem a máquina de cartão ideal para você que é empreendedor.
        </Text>
      </VStack>
    </Wrap>
  );
}

export function MenuLinks() {
  const { setIsLinksOpen } = useMyContext();
  return (
    <Wrap
      pos="absolute"
      top={{ base: 100, md: 220 }}
      left="50%"
      transform="translateX(-50%)"
      w="95%"
      maxW={1200}
      zIndex={5}
      px={6}
      bg="white"
      color="cinza"
      borderRadius={10}
      boxShadow="xl"
      onClick={() => setIsLinksOpen(false)}
      onMouseLeave={() => setIsLinksOpen(false)}
      justify="space-between"
    >
      <CloseButton pos="absolute" right={4} top={4}/>
      <VStack textAlign="start" align="start" py={8}>
        <PublicSvg />
        <Heading fontSize={16}>Públicos e Governo</Heading>
        <Text maxW={230} fontSize={14} lineHeight={"24px"} color="#7D8489" pr={4}>
          Acesse para visualizar os sites relacionados ao governo.
        </Text>
      </VStack>
      <VStack textAlign="start" align="start" py={8}>
        <JournalSvg />
        <Heading fontSize={16}>Jornais por estado</Heading>
        <Text maxW={230} fontSize={14} lineHeight={"24px"} color="#7D8489" pr={4}>
          Acesse as principais notícias separadas por estado.
        </Text>
      </VStack>
      <VStack textAlign="start" align="start" py={8}>
        <WriteSvg />
        <Heading fontSize={16}>Ministérios e Secretarias</Heading>
        <Text maxW={230} fontSize={14} lineHeight={"24px"} color="#7D8489" pr={4}>
          Acesse para visualizar os principais sites relacionados ao serviço
          público.
        </Text>
      </VStack>
      <VStack textAlign="start" align="start" py={8}>
        <LinkSvg />
        <Heading fontSize={16}>Utilidades e outros</Heading>
        <Text maxW={230} fontSize={14} lineHeight={"24px"} color="#7D8489" pr={4}>
          Acesse outros links de utilidade pública.
        </Text>
      </VStack>
    </Wrap>
  );
}
