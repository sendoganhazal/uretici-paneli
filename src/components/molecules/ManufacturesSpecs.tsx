type Props = {
    category?: string;
    city?: string;
    rating?: number;
    minimumOrderQuantity?: number;
    shippingInformation?: string;
}

const ManufacturesSpecs = ({ ...props }: Props) => {
    return (
        <div className="card">
            <p><strong>Şehir:</strong> {props.city}</p>
            <p><strong>Kategori:</strong> {props.category}</p>
            <p><strong>Min. Sipariş:</strong> {props.minimumOrderQuantity} Adet</p>
            <p><strong>Termin:</strong> {props.shippingInformation}</p>
            <div className="rating">⭐ {props.rating}</div>
        </div>
    )
}

export default ManufacturesSpecs