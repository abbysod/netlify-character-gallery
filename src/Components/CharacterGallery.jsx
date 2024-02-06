import characterData from '../data/characterData.json';
import Character from './Character';

function CharacterGallery() {
    console.log(characterData);
    return (
        <div>
            <p> This is Character Gallery page</p>
            {characterData.map(
                (character) => <Character 
                key={character.id}
                name={character.name}
                img={character.imgUrl} 
                birth={character.birth}
                death={character.death}
                race={character.race}
                gender={character.gender}
                height={character.gender}
                hair={character.hair}
                realm={character.realm}
                spouse={character.spouse}
            />
            )}
        </div>
    );
}

export default CharacterGallery;



