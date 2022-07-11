import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Grid } from "@mui/material";
import styles from "./AppBar.module.css";
import ManOutlinedIcon from "@mui/icons-material/ManOutlined";
import WomanOutlinedIcon from "@mui/icons-material/WomanOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import IceSkatingOutlinedIcon from "@mui/icons-material/IceSkatingOutlined";
import jacket from "imgs/jacketIcon.jpg";
import Image from "next/image";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function AppBarStore() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElMale, setAnchorElMale] = React.useState(null);
  const [anchorElFemale, setAnchorElFemale] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mobileMoreAnchorLeft, setMobileMoreAnchorLeft] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMenuOpenMale = Boolean(anchorElMale);
  const isMenuOpenFemale = Boolean(anchorElFemale);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMobileMenuOpenLeft = Boolean(mobileMoreAnchorLeft);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuOpenMale = (event, direction) => {
    setAnchorElMale(event.currentTarget);
    console.log("event + direction: ", event, direction);
  };
  const handleProfileMenuOpenFemale = (event) => {
    setAnchorElFemale(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
    setMobileMoreAnchorLeft(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorElMale(null);
    setAnchorElFemale(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event, direction) => {
    if (direction === "right") setMobileMoreAnchorEl(event.currentTarget);
    if (direction === "left") setMobileMoreAnchorLeft(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Ver Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Mi Cuenta</MenuItem>
    </Menu>
  );
  const renderMenuMale = (
    <Menu
      anchorEl={anchorElMale}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpenMale}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <StorefrontOutlinedIcon />
        </IconButton>
        Tienda de Hombre
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <DiscountOutlinedIcon />
        </IconButton>
        Hombre Todo Rebajas
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <CheckroomOutlinedIcon />
        </IconButton>
        Chaquetas
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <HikingOutlinedIcon />
        </IconButton>
        Bolsos y Mochilas
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <IceSkatingOutlinedIcon />
        </IconButton>
        Zapatos
      </MenuItem>
    </Menu>
  );
  const renderMenuFemale = (
    <Menu
      anchorEl={anchorElFemale}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpenFemale}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <StorefrontOutlinedIcon />
        </IconButton>
        <p>Tienda de Mujer</p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <DiscountOutlinedIcon />
        </IconButton>
        Mujer Todo Rebajas
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <CheckroomOutlinedIcon />
        </IconButton>
        Chaquetas
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <HikingOutlinedIcon />
        </IconButton>
        Bolsos y Mochilas
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <IceSkatingOutlinedIcon />
        </IconButton>
        Zapatos
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <p>Favoritos</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Carrito</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );
  const renderMobileMenuLeft = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMobileMenuOpenLeft}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={(e) => handleProfileMenuOpenMale(e, "Right")}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <ManOutlinedIcon />
        </IconButton>
        <p>HOMBRE</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpenFemale}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <WomanOutlinedIcon />
        </IconButton>
        <p>MUJER</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={(e) => handleMobileMenuOpen(e, "left")}
            sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Grid sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image
              src={jacket}
              alt="leather clothes"
              width="45px"
              height="45px"
            />
          </Grid>
          <Typography
            variant="subtitle1"
            noWrap
            component=""
            sx={{ display: { xs: "none", md: "block" } }}
          >
            TODO CUERO
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container className={styles.containerNames}>
              <Typography
                className={styles.genderOption}
                onClick={handleProfileMenuOpenMale}
                variant="subtitle1"
                noWrap
                component="div"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                HOMBRE
              </Typography>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography
                onClick={handleProfileMenuOpenFemale}
                variant="subtitle1"
                noWrap
                component="div"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                MUJER
              </Typography>
            </Grid>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <IconButton
              size="large"
              aria-label="Search something"
              color="inherit"
            >
              {/* <SearchOutlinedIcon /> */}
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={(e) => handleMobileMenuOpen(e, "right")}
              color="inherit"
            >
              <Badge badgeContent={21} color="error">
                <MoreIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenuLeft}
      {renderMobileMenu}
      {renderMenu}
      {renderMenuMale}
      {renderMenuFemale}
    </Box>
  );
}
