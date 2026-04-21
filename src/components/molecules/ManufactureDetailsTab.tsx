import { useState } from "react"
import TabContent from "../atoms/TabContent";
type DetailTabProps = {
    description?: string;
    certificates?: string[];
}
const ManufactureDetailsTab = ({ description, certificates }: DetailTabProps) => {
    const [activeTab, setActiveTab] = useState<"desc" | "cert">("desc");

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
            </div>

            <div className="tab-content">
                {activeTab === "desc" ? (
                    <TabContent>
                        <h4>Hakkımızda</h4>
                        <p>{description}</p>
                    </TabContent>
                ) : (
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
                )}
            </div>

        </div>
    )
}

export default ManufactureDetailsTab