import './CellCard.css'
import cellImage from '../img/comicimages/ComicGirlArt.png'
const CellCard = () => {
    return (
        <dev class="card">
            <dev class="card-body">
                <img src={cellImage} />
            </dev>
        </dev>
    )
    /*
    return (
        <div class=”card”>
 <div class=”card-top”>
 <h1>Card </h1>
 </div>
 <div class=”card-body”>
 <img src={require(“./logo.svg”)} ></img>
 </div>
 <div> 
 <p> Card component rendered inside a container </p>
 </div>
    )
    */
}

export { CellCard }
