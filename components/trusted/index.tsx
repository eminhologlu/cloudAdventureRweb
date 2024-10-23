import { Button, Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";

export const Trusted = () => {
  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        css={{
          pt: "$20",
          px: "$6",
          "@md": {
            px: "$64",
          },
        }}
      >
        <Text h2 css={{ textAlign: "center" }}>
          Kullanılacak Teknolojiler
        </Text>
        <Text
          css={{
            color: "$accents8",
            maxWidth: "800px",
            textAlign: "center",
          }}
          weight="normal"
          size={"$lg"}
        >
          Projenin geliştirilme sürecinde kullanılacak teknolojiler ve araçlar
        </Text>
        <Grid.Container
          gap={6}
          alignItems="center"
          justify="center"
          css={{
            width: "100%",
            "@sm": {
              width: "100%",
            },
            "&  span": {
              whiteSpace: "pre",
            },
          }}
        >
          <Grid sm={3} justify="center">
            <Flex align={"center"} justify={"center"}>
              <Text weight={"semibold"} span size={"$lg"}>
                Flutter
              </Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              {" "}
              <Text weight={"semibold"} span size={"$lg"}>
                Dart
              </Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              {" "}
              <Text weight={"semibold"} span size={"$lg"}>
                Firebase
              </Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              {" "}
              <Text weight={"semibold"} span size={"$lg"}>
                Figma
              </Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              {" "}
              <Text weight={"semibold"} span size={"$lg"}>
                VS Code
              </Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              {" "}
              <Text weight={"semibold"} span size={"$lg"}>
                Canva
              </Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              {" "}
              <Text weight={"semibold"} span size={"$lg"}>
                Trello
              </Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              {" "}
              <Text weight={"semibold"} span size={"$lg"}>
                GitHub
              </Text>
            </Flex>
          </Grid>
        </Grid.Container>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
