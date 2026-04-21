import { Link } from "react-router-dom";

type PageHeaderProps = {
    title?: string;
    action?: React.ReactNode;
};
const PageHeader = ({ title, action }: PageHeaderProps) => {
  return (
   <section className="page-header">
     <h1>{title}</h1>
     {action && <Link className={"btn btn-solid btn-primary btn-action"} to={"/talep-olustur"}>{action}</Link>}
   </section>
  )
}

export default PageHeader