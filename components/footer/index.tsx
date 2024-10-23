import { Divider, Text } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Footer = () => {
  return (
    <Flex
      css={{
        py: "$20",
        px: "$6",
      }}
    >
      <Box as={"footer"} css={{ width: "100%" }}>
        <Flex
          justify={"center"}
          wrap={"wrap"}
          align={"center"}
          css={{
            gap: "$10",
            "&  ul": {
              margin: 0,
            },
            "@sm": {},
          }}
        ></Flex>
        <Box
          css={{
            px: "$10",
            "@md": {
              px: "$56",
            },
          }}
        >
          <Divider
            css={{
              mt: "$14",
              display: "flex",
              justifyContent: "center",
            }}
          />
          <Flex
            //   justify={'between'}
            align={"center"}
            wrap={"wrap"}
            css={{
              pt: "$8",
              gap: "$10",
              justifyContent: "center",
              "@md": {
                justifyContent: "space-between",
              },
            }}
          >
            <Flex
              css={{
                gap: "$6",
              }}
            >
              <Text span css={{ color: "$accents8" }}>
                Uçak içi eğlence sistemi
              </Text>
            </Flex>
            <Flex
              css={{
                gap: "$6",
              }}
            >
              <Text span css={{ color: "$accents8" }}>
                © Copyright 2024 Cloud AdventureR.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
