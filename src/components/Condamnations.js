const Condamnations = ({condamnations, loading}) => {

    if(loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="list-group mb-4">
                        {condamnations.map((condamnation, index) => (
                            <li key={index} className="list-group-item">
                                <h3>{condamnation.Nom_exploitant}</h3>
                                <p>Type d'établissement : {condamnation.Type_etablissement}</p>
                                <p>Lieu de l'infraction : {condamnation.Adresse_lieu_infraction}</p>
                                <p>Description de l'infraction : {condamnation.Description_infraction}</p>
                                <p>Amende : {condamnation.Amende}</p>
                                <p>Date de l'infraction : {condamnation.Date_infraction.substring(0,10)}</p>
                                <p>Date du jugement : {condamnation.Date_jugement.substring(0,10)}</p>
                                <p>Date de publication : {condamnation.Date_publication.substring(0,10)}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Condamnations