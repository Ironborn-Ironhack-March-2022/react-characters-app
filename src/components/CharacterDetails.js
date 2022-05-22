import { NavLink, useParams } from "react-router-dom";

function CharacterDetails(props) {

    const { characterId } = useParams();

    const charactersArr = props.charactersArr;

    const characterDetails = charactersArr.find((character) => {
        return character.id == characterId;
    });


    const renderDetails = () => {
        return (
            <div className="box">
                <h1>{characterDetails.name} </h1>
                Occupation: {characterDetails.occupation} <br />
                Weapon: {characterDetails.weapon} <br />
                Debt: {characterDetails.debt ? "Yes" : "No"} <br />
            </div>
        );
    }


    return (
        <div className="CharacterDetails">
            {characterDetails ? renderDetails() : <p>Loading...</p>}
            <NavLink to="/">Back</NavLink>
        </div>
    );
}

export default CharacterDetails;