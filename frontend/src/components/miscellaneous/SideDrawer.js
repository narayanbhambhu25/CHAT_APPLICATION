import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import { Tooltip } from "@chakra-ui/tooltip";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { ChatState } from "../../Context/ChatProvider";
import ProfileModel from "./ProfileModel";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const { user } = ChatState();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button varient="ghost">
            <i class="fas fa-search"></i>
            <Text display={{ base: "none", md: "flex" }} px={4}>
              Seacrh User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work sans">
          Talk-A-Tive
        </Text>
        <div>
          <Menu>
            <MenuButton padding={1}>
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
            {/* {<MenuList></MenuList>} */}
          </Menu>
          <Menu>
            <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModel user={user}>
                <MenuItem>My Profile</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </ProfileModel>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default SideDrawer;
