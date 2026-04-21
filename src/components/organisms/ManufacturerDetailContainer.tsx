import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchManufacturer } from "../../lib/services/api";
import type { IManufacturer } from "../../lib/types";
import PageHeader from '../molecules/PageHeader';
import { Carousel } from '../molecules/Carousel';
import ManufactureDetailsTab from '../molecules/ManufactureDetailsTab';
import  RequestForm from '../molecules/RequestForm'

const ManufacturerDetailContainer = () => {
    const { id } = useParams();
    const [manufacturer, setManufacturer] = useState<IManufacturer | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchManufacturer(Number(id));
                setManufacturer(data);
                console.log("Yüklenen Üretici Verisi:", data);
            } catch (error) {
                console.error("Veri yüklenirken hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [id]);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
                <h2>Yükleniyor...</h2>
            </div>
        );
    }

    return (
        <>
            <PageHeader title={manufacturer?.brand || "Üretici Detayı"} />
            <section className='layout detail-layout'>
                <section className='detail-content'>
                    <Carousel images={manufacturer?.images || []} />
                    <ManufactureDetailsTab description={manufacturer?.description} certificates={manufacturer?.certificates}  category={manufacturer?.category}
                        city={manufacturer?.city}
                        rating={manufacturer?.rating}
                        minimumOrderQuantity={manufacturer?.minimumOrderQuantity}
                        shippingInformation={manufacturer?.shippingInformation}/>
                </section>
                <section className='detail-info'>
          <RequestForm />
                </section>
            </section>
        </>
    )
}

export default ManufacturerDetailContainer