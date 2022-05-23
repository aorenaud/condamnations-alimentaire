const Pagination = ({ condamnationsPerPage, totalCondamnations, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCondamnations / condamnationsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((pageNumber, index) => (
                    <li key={index} className="page-item">
                        <a onClick={() => paginate(pageNumber)} href="!#" className="page-link">{pageNumber}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination