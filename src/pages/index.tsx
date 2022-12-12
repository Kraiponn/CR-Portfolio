import Head from "next/head";
import Image from "next/image";
import useTranlate from "next-translate/useTranslation";
import { Button, Typography } from "@mui/material";

export default function Home() {
  const { t } = useTranlate("home");

  return (
    <>
      <Typography variant="h3">Welcome to {t("title")}</Typography>
      <Button variant="contained">Hello</Button>
    </>
  );
}
