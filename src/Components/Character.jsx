function Character(props) {
    //Body
    const char = props.character;
return (
    <div>
        <h2>{char.name}</h2>
    </div>
    );
}
export default Character;