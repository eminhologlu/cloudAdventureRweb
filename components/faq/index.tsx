import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Faq = () => {
  return (
    <>
      <Flex
        css={{
          py: "$20",
          gap: "$18",
          px: "$6",
        }}
        direction={"column"}
      >
        <Flex align={"center"} direction={"column"}>
          <Text span css={{ color: "$blue600" }}>
            S.S.S
          </Text>
          <Text h2>Aklında Soru Mu Var?</Text>
          <Text
            span
            css={{
              maxWidth: "700px",
              color: "$accents8",
              textAlign: "center",
            }}
          >
            En çok sorulan soruları aşağıda cevapladık.
          </Text>
        </Flex>

        <Flex
          css={{
            gap: "$10",
            "@lg": {
              px: "$64",
            },
          }}
          direction={"column"}
        >
          <Flex css={{ gap: "$5" }} justify={"start"}>
            <BoxIcon />
            <Flex direction={"column"} css={{ gap: "$3" }}>
              <Text h3>Ücretsiz kullanabilir miyim?</Text>
              <Text
                span
                css={{
                  color: "$accents8",
                }}
              >
                Uygulamamızı hiçbir ödeme yapmadan kullanabilirsiniz ancak
                ücretli modumuz ile deneyiminizi zenginleştirebilirsiniz.
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: "$5" }} justify={"start"}>
            <BoxIcon />
            <Flex direction={"column"} css={{ gap: "$3" }}>
              <Text h3>Hangi platformlarda olacak?</Text>
              <Text
                span
                css={{
                  color: "$accents8",
                }}
              >
                iOS & Android
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: "$5" }} justify={"start"}>
            <BoxIcon />
            <Flex direction={"column"} css={{ gap: "$3" }}>
              <Text h3>Uçuş dışında kullanılabilir mi?</Text>
              <Text
                span
                css={{
                  color: "$accents8",
                }}
              >
                Evet, uygulama uçuş dışında da kullanılabilir.
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: "$5" }} justify={"start"}>
            <BoxIcon />
            <Flex direction={"column"} css={{ gap: "$3" }}>
              <Text h3>Uygulamada reklam çıkacak mı?</Text>
              <Text
                span
                css={{
                  color: "$accents8",
                }}
              >
                Hayır, uygulama içerisinde reklam olmayacak.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
