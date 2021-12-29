import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { postCustomer } from "../services/axios";

export default function Form(props) {
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const handleClose = () => {
    props.onClose();
    setNameValue("");
    setEmailValue("");
  };

  const handleRegister = () => {
    postCustomer({ email: emailValue, name: nameValue })
      .then(() => {
        props.onClose();
        setNameValue("");
        setEmailValue("");
      })
      .catch((e) => {
        alert("Email Already Exists");
      });
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Subscribe to this website, please enter your name and email
            address here.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            value={nameValue}
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
          />

          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleClose();
              handleRegister();
            }}
          >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
