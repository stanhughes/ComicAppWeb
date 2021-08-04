import './CellCard.css'
import cellImage from '../img/comicimages/ComicGirlArt01.png'
const CellCard = () => {
    return (
        <dev class="card">
            <dev class="card-body">
                <img src={cellImage} />
            </dev>
        </dev>
    )
}

export { CellCard }
