import { Button, Grid } from "@mui/material";
import logo from "../../assets/logo.svg";
import Content from "../Text/Content";
import Logo from "../Text/Logo";
import { navbarLinks } from "./constants";
import {
  buttonText,
  getStartedButton,
  linkText,
  logoText,
  navbarWrapper,
  signInButton,
} from "./styles";

const Navbar = () => {
  return (
    <Grid container alignItems="center" sx={navbarWrapper} gap={5}>
      <Grid item>
        <Grid container alignItems="center" gap={1}>
          <Grid item>
            <img src={logo} alt="logo" />
          </Grid>
          <Grid item>
            <Logo sx={logoText}>Ahmed</Logo>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm>
        <Grid container alignItems="center" gap={6}>
          {navbarLinks.map((link, index) => (
            <Grid item key={`navbar-link-item-${index}`}>
              <Content sx={linkText}>{link.name}</Content>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <Button sx={signInButton}>
          <Content sx={buttonText}>Sign in</Content>
        </Button>
        <Button sx={getStartedButton}>
          <Content sx={buttonText}>Get Started Free</Content>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
