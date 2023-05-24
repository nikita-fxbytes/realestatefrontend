import AuthMessages from "../AuthMessages";
import RegisterLogic from "./RegisterLogic"

const Register = () => {
    const {register} = AuthMessages;
    const {handleSubmit, handleChange,loader, errors} = RegisterLogic();
  return (
    <section id="register" className="bg-light py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4>
                                <i className="fas fa-user-plus"></i> Register
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label > Name<span className="text-danger">*</span></label>
                                    <input onChange={handleChange} type="text" name="name" className="form-control" />
                                    {errors.name && <label className="text-danger mb-0"> {errors.name}</label>}
                                </div>
                                <div className="form-group">
                                    <label >Email<span className="text-danger">*</span></label>
                                    <input onChange={handleChange} type="email" name="email" className="form-control"/>
                                    {errors.email && <label className="text-danger mb-0"> {errors.email}</label>}
                                </div>
                                <div className="form-group">
                                    <label >Mobile<span className="text-danger">*</span></label>
                                    <input onChange={handleChange} type="text" name="mobile" className="form-control"/>
                                    {errors.mobile && <label className="text-danger mb-0"> {errors.mobile}</label>}
                                </div>
                                <div className="form-group">
                                    <label >Password<span className="text-danger">*</span></label>
                                    <input onChange={handleChange} type="password" name="password" className="form-control"/>
                                    {errors.password && <label className="text-danger mb-0"> {errors.password}</label>}
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password<span className="text-danger">*</span></label>
                                    <input onChange={handleChange} type="password" name="confirm_password" className="form-control"/>
                                    {errors.confirm_password && <label className="text-danger mb-0"> {errors.confirm_password}</label>}
                                </div>
                                <button type="submit" className="btn btn-secondary btn-block" disabled={loader}>{register}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register
