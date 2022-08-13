function DogImage( {dogUrl, breed} ) {
    return( 
        <div className="dogImage">
            <h2>{breed}</h2>
            <div className="imgContainer">
                <img src={dogUrl} alt={`A really cute doggie! ${breed}`} />
            </div>
        </div>
     )
}

export default DogImage;