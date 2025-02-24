"use client";
import sessionResources from "@/shared/api/session";
import { Buttons } from "@/shared/ui/buttons/buttons";
import { Inputs } from "@/shared/ui/inputs/inputs";
import { Box, Grid2, Typography } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./boxLoginPage.module.css";

interface BoxLoginPageProps {
  className?: string;
}

export function BoxLoginPage({ className }: BoxLoginPageProps) {
  const router = useRouter();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  return (
    <Box
      component="form"
      className={clsx(styles.loginPageBox, className)}
      noValidate
      autoComplete="off"
      sx={{
        width: {
          xs: 300,
          sm: 330,
          md: 345,
          lg: 345,
          xl: 345,
        },

        height: {
          xs: 230,
          sm: 230,
          md: 230,
          lg: 230,
          xl: 230,
        },

        padding: {
          xs: 3,
          xl: 4,
        },
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{ marginTop: "-10px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid2>
          <Inputs
            label="Email adress"
            type="email"
            className={styles.inputs}
            onChange={setEmail}
            value={email}
          />
        </Grid2>

        <Grid2>
          <Inputs
            label="Password"
            className={styles.inputs}
            onChange={setPassword}
            value={password}
            type="password"
          />
        </Grid2>

        <Grid2>
          <Buttons
            label="Log in"
            className={styles.buttons}
            disabled={!email || !password}
            onClick={() => {
              if (email && password) {
                sessionResources
                  .postLogin({ email, password })
                  .then(() => router.push("/"));
              }
            }}
            sx={{
              width: {
                xs: 290,
                sm: 320,
                md: 345,
                lg: 345,
                xl: 345,
              },
            }}
          />
        </Grid2>

        <Grid2>
          <Link href="/reg" passHref>
            <Typography component="div" className="link">
              Create new account
            </Typography>
          </Link>

          <Link href="/reg" passHref>
            <Typography component="div" className="link">
              Forgotten password?
            </Typography>
          </Link>
        </Grid2>
      </Grid2>
    </Box>
  );
}
