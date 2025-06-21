import './PageHeader.css'

interface PageHeaderProps {
  title: string
  description: string
}

function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PageHeader
