function DogImage( {dogUrl, breed} ) {
    return( 
        <div className="dogImage">
            <h2>{breed}</h2>
            <img src={dogUrl} alt={`A really cute ${breed}`} />
        </div>
     )
}

export default DogImage;