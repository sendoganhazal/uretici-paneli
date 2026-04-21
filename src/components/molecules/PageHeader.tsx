import { Link } from "react-router-dom";

type PageHeaderProps = {
  title?: string;
  action?: React.ReactNode;
  actionLabel?: string;
  logo?: string;
};
const PageHeader = ({ ...props }: PageHeaderProps) => {
  return (
    <section className="page-header">
      <div className="info">
        { props.logo && <img src={props.logo} alt="Logo" className="brand" />}
        <h1>{props.title}</h1>
      </div>
     
      {props.action && <Link className={"btn btn-solid btn-primary btn-action"} to={"/" + props.action}>{props.actionLabel}</Link>}
    </section>
  )
}

export default PageHeader