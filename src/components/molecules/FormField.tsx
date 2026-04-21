interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}

export const FormField = ({ label, htmlFor, error, children }: FormFieldProps) => (
  <div className="form-group">
    <label htmlFor={htmlFor} className="form-label">
      {label}
    </label>
    {children}
    {error && (
      <span className="form-error">
        {error}
      </span>
    )}
  </div>
);