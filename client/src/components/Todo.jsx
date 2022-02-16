import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import axios from "axios";

const Todo = ({ todo }) => {
  const { user } = useContext(AuthContext);

  const config = {
    headers: { token: `bearer ${user.accessToken}` },
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        alignItems: "center",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={todo.title} secondary={todo.status} />
        <Stack spacing={2} direction="row">
          <Badge color="secondary">
            <DeleteIcon
              sx={{ color: "red" }}
              onClick={async () => {
                console.log(todo);
                await axios.delete(`/api/todo/${user._id}/${todo._id}`, config);
                window.location.reload();
              }}
            />
          </Badge>
        </Stack>
      </ListItem>
    </List>
  );
};

export default Todo;
