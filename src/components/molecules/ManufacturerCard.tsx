/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IManufacturer } from "../../lib/types";
import { Link } from "react-router";

export const ManufacturerCard = ({ manufacturer }: { manufacturer: IManufacturer }) => {
    //   const navigate = useNavigate();

    return (
        <div className="card">
            <h3 className="card-title">{manufacturer.brand}</h3>
            <p><strong>Şehir:</strong> {manufacturer.city}</p>
            <p><strong>Kategori:</strong> {manufacturer.category}</p>
            <p><strong>Min. Sipariş:</strong> {manufacturer.minimumOrderQuantity} Adet</p>
            <p><strong>Termin:</strong> {manufacturer.shippingInformation}</p>
            <div className="rating">⭐ {manufacturer.rating}</div>
            <div className="card-footer">
                <Link className="btn btn-solid btn-primary" to={`/manufacturer/${manufacturer.id}`}>
                    Profili Görüntüle
                </Link>
            </div>
        </div>
    );
};