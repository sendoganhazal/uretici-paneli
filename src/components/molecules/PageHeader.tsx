import { Link } from "react-router-dom";

type PageHeaderProps = {
  title?: string;
  action?: React.ReactNode;
  actionLabel?: string;
};
const PageHeader = ({ ...props }: PageHeaderProps) => {
  return (
    <section className="page-header">
      <h1>{props.title}</h1>
      {props.action && <Link className={"btn btn-solid btn-primary btn-action"} to={"/" + props.action}>{props.actionLabel}</Link>}
    </section>
  )
}

export default PageHeader