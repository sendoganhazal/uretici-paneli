import { useState, useRef } from "react";
import { Button } from "../atoms/Button";
import { FormField } from "../molecules/FormField";

const RequestForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // API Mock simulation
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleReset = () => {
    setStatus('idle');
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  if (status === 'success') {
    return (
      <div className="successful-container">
        <div className="successful-message">
          ✅ Talebiniz üreticiye başarıyla iletildi! En kısa sürede dönüş sağlanacaktır.
        </div>
        <Button 
          type="button" 
          variant="outline" 
          onClick={handleReset}
          className="btn btn-solid btn-primary"
        >
          Yeni Talep Oluştur
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="request-form" ref={formRef}>
      <FormField label="Ürün Adı" htmlFor="productName">
        <input 
          id="productName" 
          required 
          className="form-control" 
          placeholder="İhtiyacınız olan ürün..." 
        />
      </FormField>

      <FormField label="Kategori" htmlFor="category">
        <select id="category" required className="form-select">
          <option value="">Seçiniz...</option>
          <option value="beauty">Güzellik & Bakım</option>
          <option value="fragrances">Parfüm</option>
          <option value="skincare">Cilt Bakımı</option>
        </select>
      </FormField>

      <FormField label="Miktar (Adet)" htmlFor="quantity">
        <input 
          id="quantity" 
          type="number" 
          min="1" 
          required 
          className="form-control" 
          placeholder="Örn: 500" 
        />
      </FormField>

      <FormField label="Açıklama / Özel Talepler" htmlFor="description">
        <textarea 
          id="description" 
          placeholder="Termin süresi, paketleme detayları vb." 
          rows={4} 
          className="form-control" 
        />
      </FormField>

      {status === 'error' && (
        <p className="error-message">
          ⚠️ Bir hata oluştu, lütfen tekrar deneyin.
        </p>
      )}
      
      <Button 
        type="submit" 
        loading={status === 'loading'} 
        className="btn btn-solid btn-primary"
      >
        Talebi Gönder
      </Button>
    </form>
  );
};

export default RequestForm;