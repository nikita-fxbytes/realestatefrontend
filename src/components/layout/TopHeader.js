import { Link } from "react-router-dom"

const TopHeader = () => {
  return (
    <section id="top-bar" className="p-3">
        <div className="container">
        <div className="row">
            <div className="col-md-4">
            <i className="fas fa-phone"></i> (617)-555-5555
            </div>
            <div className="col-md-4">
            <i className="fas fa-envelope-open"></i> contact@btrealestate.co
            </div>
            <div className="col-md-4">
            <div className="social text-right">
                <Link href="#"><i className="fab fa-twitter"></i></Link>
                <Link href="#"><i className="fab fa-facebook"></i></Link>
                <Link href="#"><i className="fab fa-linkedin"></i></Link>
                <Link href="#"><i className="fab fa-instagram"></i></Link>
                <Link href="#"><i className="fab fa-pinterest"></i></Link>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default TopHeader
