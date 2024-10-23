import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";

export const Trial = () => {
  return (
    <>
      <Flex
        css={{
          py: "$20",
          px: "$6",
        }}
        justify={"center"}
        direction={"column"}
        align={"center"}
      >
        <Text h3>Ücretsiz olarak üyeliğini başlat</Text>
        <Text
          span
          css={{
            color: "$accents8",
            pb: "$15",
            textAlign: "center",
          }}
        >
          Uygulamayı kullanabilmek için üyeliğini hemen ücretsiz olarak başlat
        </Text>

        <Button>Başla</Button>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
