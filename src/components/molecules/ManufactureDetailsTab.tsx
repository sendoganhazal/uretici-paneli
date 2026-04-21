import { useState } from "react"
import TabContent from "../atoms/TabContent";
type DetailTabProps = {
    description?: string;
    certificates?: string[];
     category?: string;
    city?: string;
    rating?: number;
    minimumOrderQuantity?: number;
    shippingInformation?: string;
}
const ManufactureDetailsTab = ({ description, certificates,city,category,rating,minimumOrderQuantity,shippingInformation }: DetailTabProps) => {
    const [activeTab, setActiveTab] = useState<"desc" | "cert" | "specs">("desc");

    return (
        <div className="tab-container">
            <div className="tab-buttons">
                <button
                    className={`btn btn-solid ${activeTab === "desc" ? "active" : ""}`}
                    onClick={() => setActiveTab("desc")}
                >
                    Üretici Açıklaması
                </button>
                <button
                    className={`btn btn-solid ${activeTab === "cert" ? "active" : ""}`}
                    onClick={() => setActiveTab("cert")}
                >
                    Sertifikalar
                </button>
                <button
                    className={`btn btn-solid ${activeTab === "specs" ? "active" : ""}`}
                    onClick={() => setActiveTab("specs")}
                >
                    Özellikler
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "desc" ? (
                    <TabContent>
                        <h4>Hakkımızda</h4>
                        <p>{description}</p>
                    </TabContent>
                ) : activeTab === "cert" ? (
                    <TabContent>
                        <h4>Sahip Olduğumuz Belgeler</h4>
                        <ul>
                            {certificates ? (
                                certificates?.map((cert, index) => (
                                    <li key={index}>{cert}</li>
                                ))
                            ) : (
                                <li>Sertifika bilgisi bulunmamaktadır.</li>
                            )}
                        </ul>
                    </TabContent>
                ) : (
                    <TabContent>
                        <h4>Ürün Özellikleri</h4>
                         <p><strong>Şehir:</strong> {city}</p>
            <p><strong>Kategori:</strong> {category}</p>
            <p><strong>Min. Sipariş:</strong> {minimumOrderQuantity} Adet</p>
            <p><strong>Termin:</strong> {shippingInformation}</p>
            <div className="rating">⭐ {rating}</div>
                    </TabContent>
                )}
            </div>

        </div>
    )
}

export default ManufactureDetailsTab