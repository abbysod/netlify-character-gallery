function Character(props) {
    //Body
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
            <ul>
                <li>Date of Birth: {props.birth}</li>
                <li>Date of Death: {props.death}</li>
                <li>Race: {props.race}</li>
                <li>Gender: {props.gender}</li>
                <li>Height: {props.height}</li>
                <li>Hair: {props.hair}</li>
                <li>Realm: {props.realm}</li>
                <li>Spouse:{props.spouse}</li>
                <li>WikiUrl: {props.wikiUrl}</li>
            </ul>
     

        </div>
    );
}
export default Character;



    


// function Character({ name, imgUrl, birth, death, race, realm, spouse }) {
//     return (
//         <div>
//             <h2>{name}</h2>
//             <img src={imgUrl} alt={name} />
//             <ul>
//                 <li>Date of Birth: {birth}</li>
//                 <li>Date of Death: {death}</li>
//                 <li>Race: {race}</li>
//                 <li>Realm: {realm}</li>
//                 <li>Spouse: {spouse}</li>
//             </ul>
//         </div>
//     );
// }

// export default Character;