import characterData from '../data/characterData.json';
import Character from './Character';

function CharacterGallery() {
    //Body
    // console.log(CharacterData);
    return (
    <div> 
        { CharacterData.map(
            (character) => <Character 
                key={character.id} 
                name={character.name}
            />
        )}
    </div>
    );
}
export default CharacterGallery;