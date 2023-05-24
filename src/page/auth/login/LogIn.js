import AuthMessages from "../AuthMessages"
import LoginLogic from "./LoginLogic";

const LogIn = () => {
    const {login} = AuthMessages;
    const{handleSubmit, handleChange,loader, errors} = LoginLogic();
  return (
    <section id="login" className="bg-light py-5">
        <div className="container">
        <div className="row">
            <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-header bg-primary text-white">
                <h4>
                    <i className="fas fa-sign-in-alt"></i> Login</h4>
                </div>
                <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email<span className="text-danger">*</span></label>
                        <input onChange={handleChange} type="email" name="email" className="form-control"/>
                        {errors.email && <label className="text-danger mb-0"> {errors.email}</label>}
                    </div>
                    <div className="form-group">
                        <label >Password<span className="text-danger">*</span></label>
                        <input onChange={handleChange} type="password" name="password" className="form-control"/>
                        {errors.password && <label className="text-danger mb-0"> {errors.password}</label>}
                    </div>
                    <button type="submit" className="btn btn-secondary btn-block" disabled={loader}>{login}</button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
  </section>
  )
}

export default LogIn
