import { navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
export default function LogIn() {


const navigate = useNavigate();

    const handleSubmit = (event) => { 
        event.preventDefault();

        if(password="123456!"){
            navigate("/dashoard")
        } else { 
            // here can do pop up for the
        }
    }

  return (
    <section className="login-body">
      <div>
        <Box
          className="login-form"
          onSubmit={handleSubmit}
          className=" two-column-grid-expand__right"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="of"
        >
          <TextField
            onChange={handleInput}
            type="text"
            name="username"
            required
            id="outlined-required"
            label="username"
          />
          <TextField
            required
            onChange={handleInput}
            id="outlined-required"
            name="password"
            label="password"
          />
          <div>
            <Button variant="contained" type="submit">
              Log In
            </Button>
          </div>
        </Box>
      </div>
    </section>
  );
}