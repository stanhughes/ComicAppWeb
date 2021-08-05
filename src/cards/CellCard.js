import './CellCard.css'
const CellCard = (image) => {
    return (
        <dev class="card">
            <dev class="card-body">
                <img src={image.default} loading="lazy" />
            </dev>
        </dev>
    )
}

export { CellCard }
