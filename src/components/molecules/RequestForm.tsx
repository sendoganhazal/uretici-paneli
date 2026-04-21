import { useState } from "react";
import { Button } from "../atoms/Button";

export const RequestForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // API Mock simulation
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') return <div style={{color: 'var(--mui-success)'}}>✅ Talebiniz başarıyla iletildi!</div>;

  return (
    <form onSubmit={handleSubmit} className="request-form">
      <div className="form-group">
        <label htmlFor="productName" className="form-label">Ürün Adı</label>
        <input id="productName" required placeholder="Ürün Adı" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="category" className="form-label">Kategori</label>
        <select id="category" required className="form-select">
          <option value="">Kategori Seçin</option>
          <option value="beauty">Güzellik</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="quantity" className="form-label">Miktar</label>
        <input id="quantity" type="number" required placeholder="Miktar" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="form-label">Açıklama</label>
        <textarea id="description" placeholder="Açıklama" rows={4} className="form-control" />
      </div>

      {status === 'error' && <p style={{color: 'var(--mui-error)'}}>Bir hata oluştu.</p>}
      
      <Button type="submit" loading={status === 'loading'}>
        Talep Gönder
      </Button>
    </form>
  );
};