"use client";
import sessionResources from "@/shared/api/session";
import { Buttons } from "@/shared/ui/buttons/buttons";
import { Inputs } from "@/shared/ui/inputs/inputs";
import { Box, Grid2, Typography } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./boxRegPage.module.css";

interface BoxRegPageProps {
  className?: string;
}

export function BoxRegPage({ className }: BoxRegPageProps) {
  const router = useRouter();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [firstName, setFirstName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  return (
    <Box
      component="form"
      className={clsx(styles.regPageBox, className)}
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
          xs: 420,
          sm: 420,
          md: 420,
          lg: 420,
          xl: 500,
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
            label="First name"
            className={styles.inputs}
            onChange={setFirstName}
            value={firstName}
          />
        </Grid2>

        <Grid2>
          <Inputs
            label="Last name"
            className={styles.inputs}
            onChange={setLastName}
            value={lastName}
          />
        </Grid2>

        <Grid2>
          <Inputs
            label="Email adress"
            className={styles.inputs}
            type="email"
            onChange={setEmail}
            value={email}
          />
        </Grid2>

        <Grid2>
          <Inputs
            label="Password"
            className={styles.inputs}
            type="password"
            onChange={setPassword}
            value={password}
          />
        </Grid2>

        <Grid2>
          <Buttons
            label="Register"
            disabled={!email || !password || !firstName || !lastName}
            className={styles.buttons}
            onClick={() => {
              if (email && password && firstName && lastName) {
                sessionResources
                  .postRegister({
                    firstName,
                    lastName,
                    email,
                    password,
                  })
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
          <Link href="/login" passHref>
            <Typography component="div" className="link">
              Already have an account?
            </Typography>
          </Link>
        </Grid2>
      </Grid2>
    </Box>
  );
}