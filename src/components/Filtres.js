const Filtres = ({ condamnationsPerPage, changeCondamnationsPerPage }) => {

    return (
        <form className="mb-3">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="condamnationsPerPage" className="form-label">Condamnations par page</label>
                        <select className="form-select" value={condamnationsPerPage} onChange={(event) => changeCondamnationsPerPage(event.target.value)}>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>
                
            </div>
        </form>
    )
}

export default Filtres