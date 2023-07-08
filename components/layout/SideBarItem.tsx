import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import List from "@mui/material/List";
import Link from "next/link";
const linkStyle = {
  color: "black",
  textDecoration: "none",
};
function SideBarItem() {
  return (
    <>
      <List>
        <Link href="/" style={linkStyle}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>

      <List>
        <Link href="/vehicles" style={linkStyle}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalTaxiIcon />
              </ListItemIcon>
              <ListItemText primary="Vehicles" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>

      <List>
        <Link href="/containers" style={linkStyle}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DirectionsBoatIcon />
              </ListItemIcon>
              <ListItemText primary="Containers" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </>
  );
}

export default SideBarItem;
