import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography className="logo" variant="h4" fontWeight="bold" sx={{ paddingLeft:"15px", mt: 1.5, color: "#fff"}}>
          U <span style={{ color: "#FC1503" }}>TUBE</span>
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
