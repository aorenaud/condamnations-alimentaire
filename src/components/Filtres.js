const Filtres = ({ condamnationsPerPage, changeCondamnationsPerPage, year, currentYear, changeCurrentYear }) => {
    let years = [];

    for (let i = 0; i < 5; i++) {
        years = [...years, year - i];
    }

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

                    <div className="col-3">
                        <label htmlFor="years" className="form-label">Année</label>
                        <select className="form-select" value={currentYear} onChange={(event) => changeCurrentYear(event.target.value)}>
                            {years.map((year, index) => (
                                <option key={index} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>
                
            </div>
        </form>
    )
}

export default Filtres