import './CellCard.css'
import cellImage from '../img/comicimages/ComicGirlArt01.png'
const CellCard = (image) => {
    return (
        <dev class="card">
            <dev class="card-body">
                <img src={image.default} />
            </dev>
        </dev>
    )
}

export { CellCard }
