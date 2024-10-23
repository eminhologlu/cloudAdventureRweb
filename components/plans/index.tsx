import { Button, Card, Divider, Grid, Link, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Plans = () => {
  return (
    <>
      <Flex
        css={{ py: "$20", gap: "1rem", px: "$6" }}
        justify={"center"}
        wrap={"wrap"}
        direction={"column"}
        align={"center"}
      >
        <Flex direction={"column"} align={"center"}>
          <Text h2>Üyelik Tipleri</Text>
        </Flex>

        <Flex
          css={{ gap: "2rem", width: "100%" }}
          wrap={"wrap"}
          justify={"center"}
        >
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Explorer
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    Temel fonksiyonlara ve görevlere erişim
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$4" }}>
              <Text css={{ display: "contents" }} h2>
                ₺0{" "}
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>
                /aylık
              </Text>
              <Button css={{ mt: "$7", mb: "$12" }}>Üyeliği Başlat</Button>

              <Divider />
              <Box as={"ul"}>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Temel AR deneyimi
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Kısa süreli oyunlar
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Basit eğitim içerikleri
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Sosyal paylaşım
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    İlk seviye eğitici videolar
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Adventurer
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    Tüm fonksiyonlara ve görevlere erişim
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$4" }}>
              <Text css={{ display: "contents" }} h2>
                ₺99{" "}
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>
                /aylık
              </Text>
              <Button css={{ mt: "$7", mb: "$12" }}>Üyeliği Başlat</Button>

              <Divider />
              <Box as={"ul"}>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Gelişmiş AR deneyimi
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Özel oyunlar ve görevler
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Kapsamlı eğitim içerikleri
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Kişiselleştirilmiş öğrenme planları
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Sanal ödüller ve rozetler
                  </Text>
                </Flex>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    Aile kontrolü ve izleme
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
