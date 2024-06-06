import { Box, Container, Flex, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Box>
          <Text display={{ base: "none", md: "inline" }} mr={4}>Home</Text>
          <Text display={{ base: "none", md: "inline" }}>About</Text>
        </Box>
      </Flex>
      <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="80vh">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is your starting point. Begin building your app here.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;