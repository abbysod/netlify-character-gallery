import CharacterData from '../data/CharacterData.json';
import Character from './Character';

function CharacterGallery() {
    //Body
    console.log(CharacterData);
return (
    <div> 
        {CharacterData.map(
            (character) => <Character 
                key={character.id} name={character.name} 
                />
        )}
    </div>
    );
}
export default CharacterGallery;