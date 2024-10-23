import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { FeatureIcon } from "../icons/FeatureIcon";
import { Flex } from "../styles/flex";

export const Features2 = () => {
  return (
    <>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
          pt: "$20",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",

          "@sm": {
            gap: "5rem",
            flexDirection: "row-reverse",
            px: "$16",
          },
          "@md": {
            justifyContent: "space-evenly",
          },
        }}
      >
        <Flex direction="column" align={"center"}>
          <Text span css={{ color: "$blue600" }}>
            Üyelik Sistemi
          </Text>
          <Text h3>Her bütçeye uygun</Text>
          <Text
            span
            css={{
              maxWidth: "400px",
              color: "$accents8",
            }}
          >
            Uygulama ücretsiz bir şekilde kullanılabilir ancak bazı içeriklere
            erişim için üyelik sistemi olacaktır.
          </Text>

          <Flex
            justify={"center"}
            wrap={"wrap"}
            css={{
              py: "$10",
            }}
          >
            <Flex
              css={{
                py: "$10",
                gap: "$5",
              }}
            >
              <BoxIcon />
              <Flex direction={"column"}>
                <Text h4 weight={"medium"}>
                  Explorer
                </Text>
                <Text
                  span
                  css={{
                    maxWidth: "325px",
                    color: "$accents8",
                  }}
                >
                  Ücretsiz üyelik tipidir, temel fonksiyonlara ve görevlere
                  erişim mevcut.
                </Text>
              </Flex>
            </Flex>
            <Flex
              css={{
                py: "$10",
                gap: "$5",
              }}
            >
              <BoxIcon />
              <Flex direction={"column"}>
                <Text h4 weight={"medium"}>
                  Adventurer
                </Text>
                <Text
                  span
                  css={{
                    maxWidth: "325px",
                    color: "$accents8",
                  }}
                >
                  Ücretli üyelik tipidir, tüm fonksiyonlara ve görevlere erişim
                  mevcut.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex align={"center"}>
          <FeatureIcon />
        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
