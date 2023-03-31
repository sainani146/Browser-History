import './App.css'

const HistoryItem = props => {
  const {list, deleteitem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = list
  const onDelete = () => {
    deleteitem(id)
  }

  return (
    <li className="history-item">
      <p>{timeAccessed}</p>
      <div className="div-delete">
        <div className="logo-name">
          <img className="logo-img" src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <button onClick={onDelete} data-testid="delete">
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
