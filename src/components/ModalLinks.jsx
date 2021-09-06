import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Wrap,
} from "@chakra-ui/react";
import { FaLink } from "react-icons/fa";
export function ModalLinks({ modal, setModal }) {
  const links = [
    { name: "Gclick", link: "https://app.gclick.com.br/" },
    {
      name: "Escritorio Inteligente",
      link: "https://portal.escritoriointeligente.com/Login?ReturnUrl=%2f",
    },
    { name: "MPM Sistema", link: "https://mpmsistema.com.br/cliente" },
    { name: "Alpha", link: "https://alpha.mastermaq.com.br/session/login" },
    { name: "Evo", link: "https://evo.mastermaq.com.br/portal/" },
  ];
  return (
    <Modal isOpen={modal} onClose={() => setModal(false)}>
      <ModalOverlay sx={{ backdropFilter: "blur(8px)"}} bg="#000000BB" />
      <ModalContent border="1px" borderColor="cinzaclaro" bg="cinza" mx={2} pb={4} color="white">
        <ModalHeader>Faça o login em nossas plataformas</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Wrap spacing={8}>
            {links.map((link) => (
              <Button 
                key={link.name}
                minW={70}
                as="a"
                target="_blank"
                href={link.link}
              >
                {link.name}
              </Button>
            ))}
          </Wrap>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
