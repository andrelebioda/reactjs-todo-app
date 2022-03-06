const Filter = ({ filterStatus, setFilterStatus, clearCompleted }) => {
  return (
    <div className="filter-container">
      <div className="filter">
        <ul>
          <li>
            <button
              className={filterStatus == 'all' ? 'active' : ''}
              onClick={() => setFilterStatus('all')}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={filterStatus == 'active' ? 'active' : ''}
              onClick={() => setFilterStatus('active')}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={filterStatus == 'completed' ? 'active' : ''}
              onClick={() => setFilterStatus('completed')}
            >
              Completed
            </button>
          </li>
        </ul>
      </div>
      <div className="clear">
        <button onClick={() => clearCompleted()}>Clear Completed</button>
      </div>
    </div>
  )
}

export default Filter
