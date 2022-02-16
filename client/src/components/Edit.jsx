import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import axios from "axios";

const Edit = ({ todo }) => {
  const { user } = useContext(AuthContext);

  const config = {
    headers: { token: `bearer ${user.accessToken}` },
  };

  const handleSubmit = async (e) => {
    console.log(config);
    e.preventDefault();
    const updatedTodo = {
      title: title,
      status: status,
    };
    console.log(updatedTodo);
    try {
      await axios.put(`/api/todo/${user._id}/${todo._id}`, updatedTodo, config);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setTitle(todo.title);
    setStatus(todo.status);
  }, [todo._id]);

  const handletitle = (e) => {
    setTitle(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <ThemeProvider>
      <Container component="main" maxWidth="lg" style={{ width: "100%" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4" sx={{ color: "#000" }}>
            Edit Todo
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              value={title}
              onChange={handletitle}
              autoFocus
            />
            <Box sx={{ minWidth: 120 }} mt={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="Status"
                  onChange={handleStatus}
                >
                  <MenuItem value={"Todo"}>Todo</MenuItem>
                  <MenuItem value={"On Going"}>On Going</MenuItem>
                  <MenuItem value={"Done"}>Done</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit Todo
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Edit;
