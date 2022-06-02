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
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddCircle, EditOutlined } from "@mui/icons-material";

function createClient(name, dir, phone) {
  return { name, dir, phone };
}


const exampleData = [
  createClient('Raul Alejandro', 'Santa prueba #123', '12345678'),
  createClient('Luis Fernando', 'Santa Prueba2 #456', '8712131415'),
  createClient('Luis Fernando', 'Santa Prueba2 #456', '8712131415'),
  createClient('Luis Fernando', 'Santa Prueba2 #456', '8712131416'),
  createClient('Luis Fernando', 'Santa Prueba2 #456', '8712131465'),
  createClient('Luis Fernando', 'Santa Prueba2 #456', '8712131455'),
  createClient('Luis Fernando', 'Santa Prueba2 #456', '8712131425'),
  createClient('Luis Fernando', 'Santa Prueba2 #456', '8712131415'),
  createClient('Luis Fernando', 'Santa Prueba2 #456', '8712131415'),
  createClient('Luis Fernando', 'Santa Prueba2 #456', '8712131415'),
  createClient('Luis Fernando', 'Santa Prueba2 #456', '8712131415'),

]



class Cliente extends React.Component {

  render() {
    return (
      <Container fixed>
        <h1 id="title">Clientes</h1>
        <div className="div_btn" align="right">
          <Button id="btn_add" startIcon={<AddCircle />}>
            Agregar Cliente
          </Button>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Clientes</TableCell>
                  <TableCell align="right">Direccion</TableCell>
                  <TableCell align="right">Teléfono</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {exampleData.map((exampleData) => (
                  <TableRow
                    key={exampleData.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {exampleData.name}
                    </TableCell>
                    <TableCell align="right">{exampleData.dir}</TableCell>
                    <TableCell align="right">{exampleData.phone}</TableCell>
                    <TableCell align="center">
                      <Button id="btn_edit" startIcon={<EditOutlined/>}>Editar</Button>
                      <Button id="btn_delete" startIcon={<DeleteIcon />}>
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    );
  }
}

export default Cliente;