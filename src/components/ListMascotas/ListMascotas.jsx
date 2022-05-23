import { AiTwotoneEdit,AiOutlinePlus } from "react-icons/ai";
import { BsFileEarmarkText,BsFillTrash2Fill } from "react-icons/bs";
import { IoCutSharp } from "react-icons/io5";
import  "./ListMascotas.scss"
import AddMascota from "../AddMascota/AddMascota";

const ListMascotas = (props) => {
    const mascotas = props.mascotas;

    return <>
  <div className="text-center container mt-5">
    <button className="btn btn-info button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Añadir Mascota</button>
  <table className="table table-hover mt-3">
   <thead>
     <tr>
        <th scope="col">Cédula mascota</th>
        <th scope="col">Nombre</th>
        <th scope="col">Raza</th>
        <th scope="col">Color</th>
        <th scope="col">Especie</th>
       <th scope="col">Sexo</th>
        <th scope="col">Fecha de nacimiento</th>
        <th>Opciones</th>
      </tr>
    </thead>
  <tbody>
  {
      mascotas.map((data) => {
     return(
      <tr key={data.cdidentificacion}>
          <td>{data.cdidentificacion}</td>
          <td>{data.dsnombre}</td>
          <td>{data.dsraza}</td>
          <td>{data.dscolor}</td>
          <td>{data.dsespecie}</td>
          <td>{data.dssexo}</td>
          <td>{data.fechaNa.day+'/'+data.fechaNa.month+'/'+data.fechaNa.year}</td>
          <td>
              <button className="btn btn-circle"><AiTwotoneEdit/></button>
              <button className="btn btn-circle"><AiOutlinePlus/></button>
              <button className="btn btn-circle"><BsFileEarmarkText/></button>
              <button className="btn btn-circle"><IoCutSharp/></button>
              <button className="btn btn-circle"><BsFillTrash2Fill/></button>
          </td>
      </tr>
     )})
  }
</tbody>
</table>
      <AddMascota/>
</div>
  </>
}
export default ListMascotas;