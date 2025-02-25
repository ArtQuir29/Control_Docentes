import { Form } from "./components/Form.tsx"
import { Navbar } from "./components/Navbar.tsx"
import { Table } from "./components/Tables.tsx"

function App() {
 
  return (
    <>
     <div className="container">
      <div className="row mb-3">
        {/* aqui va la llamada al componente de la navar */}
        <Navbar></Navbar>

      </div>
      <div className="row">
        <div className="col-lg-5">
          {/* Aqui va la llamda al componente para el formulario */}
          <Form/>

        </div>
       <div className="col-lg-7">
        {/* Aqui va la llamda al componente para la tabla */}
         <Table/>
       </div>
      </div>
      
     </div>
    </>
  )
}

export default App