
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: 'solid' | 'outline';
  color? : 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
}

export const Button = ({ children, loading, variant = 'solid', color = 'primary', ...props }: Props) => (
  <button 
    className={`btn btn-${variant} btn-${color} ${loading ? 'btn-loading' : ''}`} 
    disabled={loading} 

    {...props}
  >
    {loading ? 'Yükleniyor...' : children}
  </button>
);