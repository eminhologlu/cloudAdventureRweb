import { Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { FeatureIcon } from "../icons/FeatureIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Features1 = () => {
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
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
        <Flex direction="column">
          <Text span css={{ color: "$blue600" }}>
            Çapraz Platform
          </Text>
          <Text h3>iOS & Android</Text>
          <Text
            span
            css={{
              maxWidth: "400px",
              color: "$accents8",
            }}
          >
            Projemiz mobil uygulama olarak gerçekleştirilecek olup hem iOS hem
            de Android işletim sistemlerinde çalışabilecektir.
          </Text>

          <Flex
            css={{
              py: "$10",
              gap: "$5",
            }}
          >
            <BoxIcon />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                App Store
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                Uygulamamız geliştirildikten sonra iOS cihazların kolay
                erişebilmesi için App Store&apos;a yüklenecektir.
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
                Play Store
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                Uygulamamız geliştirildikten sonra Android cihazların kolay
                erişebilmesi için Play Store&apos;a yüklenecektir.
              </Text>
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
