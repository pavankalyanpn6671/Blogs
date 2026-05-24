import { Link } from 'react-router-dom'
const navbarPage = function(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/home">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog/Top Beaches to Visit in Bali">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register/nested-register">Nested Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category-blog/travel">Category Blog</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navbarPage;