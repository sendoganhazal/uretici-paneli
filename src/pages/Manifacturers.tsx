import { useEffect, useState } from "react";
import { fetchManufacturers } from "../lib/services/api";
import type { IManufacturer } from "../lib/types";
import { ManufacturerCard } from "../components/organisms/ManufacturerCard";
import PageHeader from "../components/organisms/PageHeader";

const Manufacturers = () => {
    const [manufacturers, setManufacturers] = useState<IManufacturer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchManufacturers();
                setManufacturers(data);
            } catch (error) {
                console.error("Veri yüklenirken hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
                <h2>Yükleniyor...</h2>
            </div>
        );
    }

    return (
        <>
            <PageHeader title="Üreticiler" />
            <section className="manufacturer-grid">
                {manufacturers.map((item) => (
                    <div className="grid-item" key={item.id}>
                        <ManufacturerCard manufacturer={item} />
                    </div>

                ))}
            </section>
        </>

    );
};

export default Manufacturers;