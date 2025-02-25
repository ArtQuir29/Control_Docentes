
export const Form = () => {
    return (
      <>
      <div className="card">
          <div className="card-header">
              <h3> DOCENTES</h3>
  
          </div>
          <div className="card-body">
              <form action="">
                  <div className="row">
                      <div className="col-lg-6">
                          <label htmlFor="txtDocenteId" className="form-label">Matricula</label>
                          <input type="Number" id="txtDocenteId" className="form-control" name="docente_id" />
                          {/* el name debe ser igual modelo de la base de datos */}
                      </div>
                      <div className="col-lg-6">
                          <label htmlFor="txtName" className="form-label"> Nombre</label>
                          <input type="text"  id="txtName" className="form-control" name="name"/>
                      </div>    
                      <div className="col-lg-6">
                          <label htmlFor="txtLastanme" className="form-label">Apellido</label>
                          <input type="txt" id="txtLastname" className="form-control" name="lastname" />
                          {/* el name debe ser igual modelo de la base de datos */}
                      </div>
                      <div className="col-lg-6">
                          <label htmlFor="txtAge" className="form-label"> Edad </label>
                          <input type="Number"  id="txtAge"  className="form-control" name="age"/>
                      </div>
  
                      <div className="col-lg-6">
                          <label htmlFor="txtCarrera" className="form-label">Carrera</label>
                          <input type="txt" id="txtCarrera" className="form-control" name="carrera" />
                          {/* el name debe ser igual modelo de la base de datos */}
                      </div>
                      <div className="col-lg-6">
                          <label htmlFor="txtSalary" className="form-label"> Salario </label>
                          <input type="Number "  id="txtSalary" className="form-control" name="salary"/> 
                      </div>  
                      <div className="row">
                          <div className="col-lg-6">
                              
                          </div>
                      </div>
                      
  
                      <div className="col-lg-12">
                          <br />  
                          <button className="btn btn-primary" type="submit">Guardar</button>
                      </div>
  
  
                  </div>
              </form>
          </div>
      </div>
  
      </>
    )
  }
  