const ProductItem = ({ id, name }: { id: number; name: string }) => {
    return (
        <div>
            <p>{name}</p>
            <p>{id}</p>
        </div>
    )
}

export default ProductItem