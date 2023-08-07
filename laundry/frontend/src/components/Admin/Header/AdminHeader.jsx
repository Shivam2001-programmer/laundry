const AdminHeader = () => {
    return (
        <div className="admin_header">
            <nav className="navbar fixed-top navbar-expand-md mb-3">
                <div className="flex-row d-flex">
                    <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand ml-3" href="">cleanX</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    {/* <ul className="navbar-nav ml-auto mr-4">
                        <li className="nav-item">
                            <a className="nav-link" href="#myAlert" data-toggle="collapse">User</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">Logout</a>
                        </li>
                    </ul> */}
                </div>
            </nav>
        </div>
    )
}

export default AdminHeader
