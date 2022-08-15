import { useState } from "react";

const Dropdown = ({getBreed}) => {
    const [userChoice, setUserChoice] = useState('placeholder')
    const [nameSelection, setNameSelection] = useState('')

    const handleUserChoice = (e) => {
        setUserChoice(e.target.value)
        setNameSelection(e.target.selectedOptions[0].label)
    }
    return(
        <div className="formWrapper">
        <form onSubmit={(e) => getBreed(e, userChoice, nameSelection)}>
            {/* <h2>Show me some cute doggies:</h2> */}
            <select  id="dogBreed" name="dogBreed" onChange={handleUserChoice} value={userChoice} >
                <option value='placeholder' disabled>Choose A Breed:</option>
                <option value="affenpinscher">Affenpinscher</option>
                <option value="african">African</option>
                <option value="airedale">Airedale</option>
                <option value="akita">Akita</option>
                <option value="appenzeller">Appenzeller</option>
                <option value="australian/shepherd" name="australian shepherd">Australian Shepherd</option>
                <option value="basenji">Basenji</option>
                <option value="beagle">Beagle</option>
                <option value="bluetick">Bluetick</option>
                <option value="borzoi">Borzoi</option>
                <option value="bouvier">Bouvier</option>
                <option value="boxer">Boxer</option>
                <option value="brabancon">Brabancon</option>
                <option value="briard">Briard</option>
                <option value="buhund/norwegian">Norwegian Buhund</option>
                <option value="bulldog/boston">Boston Bulldog</option>
                <option value="bulldog/english">English Bulldog</option>
                <option value="bulldog/french">French Bulldog</option>
                <option value="bullterrier/staffordshire">Staffordshire Bullterrier</option>
                <option value="cattledog/australian">Australian Cattledog</option>
                <option value="chihuahua">Chihuahua</option>
                <option value="chow">Chow</option>
                <option value="clumber">Clumber</option>
                <option value="cockapoo">Cockapoo</option>
                <option value="collie/border">Border Collie</option>
                <option value="coonhound">Coonhound</option>
                <option value="corgi/cardigan">Cardigan Corgi</option>
                <option value="cotondetulear">Cotondetulear</option>
                <option value="dachshund">Dachshund</option>
                <option value="dalmatian">Dalmatian</option>
                <option value="dane/great">Great Dane</option>
                <option value="deerhound/scottish">Scottish Deerhound</option>
                <option value="dhole">Dhole</option>
                <option value="dingo">Dingo</option>
                <option value="doberman">Doberman</option>
                <option value="elkhound/norwegian">Norwegian Elkhound</option>
                <option value="entlebucher">Entlebucher</option>
                <option value="eskimo">Eskimo</option>
                <option value="finnish/lapphund">Finnish Lapphund</option>
                <option value="frise/bichon">Bichon Frise</option>
                <option value="germanshepherd">German Shepherd</option>
                <option value="greyhound/italian">Italian Greyhound</option>
                <option value="groenendael">Groenendael</option>
                <option value="havanese">Havanese</option>
                <option value="hound/afghan">Afghan Hound</option>
                <option value="hound/basset">Basset Hound</option>
                <option value="hound/blood">Bloodhound</option>
                <option value="hound/english">English Hound</option>
                <option value="hound/ibizan">Ibizan Hound</option>
                <option value="hound/plott">Plott Hound</option>
                <option value="hound/walker">Walker Hound</option>
                <option value="husky">Husky</option>
                <option value="keeshond">Keeshond</option>
                <option value="kelpie">Kelpie</option>
                <option value="komondor">Komondor</option>
                <option value="kuvasz">Kuvasz</option>
                <option value="labradoodle">Labradoodle</option>
                <option value="labrador">labrador Retriever</option>
                <option value="leonberg">Leonberg</option>
                <option value="lhasa">Lhasa</option>
                <option value="malamute">Malamute</option>
                <option value="malinois">Malinois</option>
                <option value="maltese">Maltese</option>
                <option value="mastiff/bull">Bull Mastiff</option>
                <option value="mastiff/english">English Mastiff</option>
                <option value="mastiff/tibetan">Tibetan Mastiff</option>
                <option value="mexicanhairless">Mexican Hairless</option>
                <option value="mix">Mix</option>
                <option value="mountain/bernese">Bernese Mountain</option>
                <option value="mountain/swiss">Swiss Mountain</option>
                <option value="newfoundland">Newfoundland</option>
                <option value="otterhound">Otterhound</option>
                <option value="ovcharka/caucasian">Caucasian Ovcharka</option>
                <option value="papillon">Papillon</option>
                <option value="pekinese">Pekinese</option>
                <option value="pembroke">Pembroke</option>
                <option value="pinscher/miniature">Miniature Pinscher</option>
                <option value="pitbull">Pitbull</option>
                <option value="pointer/german">German Pointer</option>
                <option value="pointer/germanlonghair">German Longhair Pointer</option>
                <option value="pomeranian">Pomeranian</option>
                <option value="poodle-medium">Medium Poodle</option>
                <option value="poodle-miniature">Miniature Poodle</option>
                <option value="poodle-standard">Standard Poodle</option>
                <option value="poodle-toy">Toy Poodle</option>
                <option value="pug">Pug</option>
                <option value="puggle">Puggle</option>
                <option value="pyrenees">Pyrenees</option>
                <option value="redbone">Redbone</option>
                <option value="retriever/chesapeake">Chesapeake Retriever</option>
                <option value="retriever/curly">Curly Retriever</option>
                <option value="retriever/flatcoated">Flatcoated Retriever</option>
                <option value="retriever/golden">Golden Retriever</option>
                <option value="ridgeback/rhodesian">Rhodesian Ridgeback</option>
                <option value="rottweiler">Rottweiler</option>
                <option value="saluki">Saluki</option>
                <option value="samoyed">Samoyed</option>
                <option value="schipperke">Schipperke</option>
                <option value="schnauzer/giant">Giant Schnauzer</option>
                <option value="schnauzer/miniature">Miniature Schnauzer</option>
                <option value="setter/english">English Setter</option>
                <option value="setter/gordon">Gordon Setter</option>
                <option value="setter/irish">Irish Setter</option>
                <option value="sharpei">Sharpei</option>
                <option value="sheepdog/english">English Sheepdog</option>
                <option value="sheepdog/shetland">Shetland Sheepdog</option>
                <option value="shiba">Shiba Inu</option>
                <option value="shihtzu">Shihtzu</option>
                <option value="spaniel/blenheim">Blenheim Spaniel</option>
                <option value="spaniel/brittany">Brittany Spaniel</option>
                <option value="spaniel/cocker">Cocker Spaniel</option>
                <option value="spaniel/irish">Irish Spaniel</option>
                <option value="spaniel/japanese">Japanese Spaniel</option>
                <option value="spaniel/sussex">Sussex Spaniel</option>
                <option value="spaniel/welsh">Welsh Spaniel</option>
                <option value="springer/english">English Springer Spaniel</option>
                <option value="stbernard">St. Bernard</option>
                <option value="terrier/american">American Terrier</option>
                <option value="terrier/australian">Australian Terrier</option>
                <option value="terrier/bedlington">Bedlington Terrier</option>
                <option value="terrier/border">Border Terrier</option>
                <option value="terrier/cairn">Cairn Terrier</option>
                <option value="terrier/dandie">Dandie Terrier</option>
                <option value="terrier/fox">Fox Terrier</option>
                <option value="terrier/irish">Irish Terrier</option>
                <option value="terrier/kerryblue">Kerryblue Terrier</option>
                <option value="terrier/lakeland">Lakeland Terrier</option>
                <option value="terrier/norfolk">Norfolk Terrier</option>
                <option value="terrier/norwich">Norwich Terrier</option>
                <option value="terrier/patterdale">Patterdale Terrier</option>
                <option value="terrier/russell">russell Terrier</option>
                <option value="terrier/scottish">Scottish terrier</option>
                <option value="terrier/sealyham">Sealyham Terrier</option>
                <option value="terrier/silky">Silky Terrier</option>
                <option value="terrier/tibetan">Tibetan Terrier</option>
                <option value="terrier/toy">Toy Terrier</option>
                <option value="terrier/welsh">Welsh Terrier</option>
                <option value="terrier/westhighland">Westhighland Terrier</option>
                <option value="terrier/wheaten">Wheaten Terrier</option>
                <option value="terrier/yorkshire">Yorkshire Terrier</option>
                <option value="tervuren">Tervuren</option>
                <option value="vizsla">Vizsla</option>
                <option value="waterdog/spanish">Spanish Waterdog</option>
                <option value="weimaraner">Weimaraner</option>
                <option value="whippet">Whippet</option>
                <option value="wolfhound/irish">Irish Wolfhound</option>
            </select>
            <button type='submit'>Show me the Dogs!</button>

        </form>
        </div>
    )
}

export default Dropdown;