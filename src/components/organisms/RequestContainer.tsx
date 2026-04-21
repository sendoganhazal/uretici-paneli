import PageHeader from '../molecules/PageHeader'
import { RequestForm } from '../molecules/RequestForm'

const RequestContainer = () => {
    return (
        <>
            <PageHeader title="Yeni Talep Oluştur" />
            <section className='request-layout'>
                <RequestForm />
            </section>
        </>
    )
}

export default RequestContainer