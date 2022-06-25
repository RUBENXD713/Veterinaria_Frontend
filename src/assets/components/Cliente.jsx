import { Container } from "@mui/system";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../css/Cliente.css";
import { Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddCircle, EditOutlined } from "@mui/icons-material";



function createClient(name, dir, phone) {
  return { name, dir, phone };
}

const exampleData = [
  createClient("Raul Alejandro", "Santa prueba #123", "12345678"),
  createClient("Luis Fernando", "Santa Prueba2 #456", "8712131415"),
  createClient("Luis Fernando", "Santa Prueba2 #456", "8712131415"),
  createClient("Luis Fernando", "Santa Prueba2 #456", "8712131416"),
  createClient("Luis Fernando", "Santa Prueba2 #456", "8712131465"),
  createClient("Luis Fernando", "Santa Prueba2 #456", "8712131455"),
  createClient("Luis Fernando", "Santa Prueba2 #456", "8712131425"),
  createClient("Luis Fernando", "Santa Prueba2 #456", "8712131415"),
  createClient("Luis Fernando", "Santa Prueba2 #456", "8712131415"),
  createClient("Luis Fernando", "Santa Prueba2 #456", "8712131415"),
  createClient("Luis Fernando", "Santa Prueba2 #456", "8712131415"),
];

const addClient = () => {
  
}

class Cliente extends React.Component {
  render() {
    return (
      <Container fixed>
        <h1 id="title">Clientes</h1>

        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              marginLeft: 0,
              marginBottom: 5,
              width: "20ch",
              height: "4ch",
              textAlign: "left",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <input class="input-form" type="text" placeholder="Nombre" />
          <input class="input-form" type="text" placeholder="Dirección" />
          <input class="input-form" type="text" placeholder="Teléfono" />
          <Button id="btn_add" startIcon={<AddCircle />}>
             Agregar Cliente
          </Button>
        </Box>
        <Box
          style={{
            opacity: 2
          }}
        >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow id>
                  <TableCell id="thead">Clientes</TableCell>
                  <TableCell id="thead" align="center">
                    Direccion
                  </TableCell>
                  <TableCell id="thead" align="center">
                    Teléfono
                  </TableCell>
                  <TableCell id="thead" align="center">
                    Acciones
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {exampleData.map((exampleData) => (
                  <TableRow
                    key={exampleData.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell id="tbody" component="th" scope="row">
                      {exampleData.name}
                    </TableCell>
                    <TableCell id="tbody" align="center">
                      {exampleData.dir}
                    </TableCell>
                    <TableCell id="tbody" align="center">
                      {exampleData.phone}
                    </TableCell>
                    <TableCell id="tbody" align="center">
                      <Button id="btn_edit" startIcon={<EditOutlined />}>
                        Editar
                      </Button>
                      <Button id="btn_delete" startIcon={<DeleteIcon />}>
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    );
  }
}

export default Cliente;
