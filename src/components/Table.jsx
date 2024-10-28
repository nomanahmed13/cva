import React from 'react'
import '@styles/_organizations.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Table = () => {
  return (
    <>
      <div className="container my-4 p-4 bg-white shadow-sm rounded">
        {/* Table Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold text-muted">DataTable with Buttons</h5>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary btn-sm">
              <i className="bi bi-file-earmark-arrow-down"></i> Export
            </button>
            <button className="btn btn-primary btn-sm">
              <i className="bi bi-plus"></i> Add New Record
            </button>
          </div>
        </div>

        {/* Table Controls */}
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex align-items-center">
            <label className="me-2">Show</label>
            <select className="form-select form-select-sm" style={{ width: '70px' }}>
              <option>7</option>
              <option>10</option>
              <option>25</option>
            </select>
            <span className="ms-2">entries</span>
          </div>
          <div>
            <input type="text" className="form-control form-control-sm" placeholder="Search" />
          </div>
        </div>

        {/* Table */}
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col"><input type="checkbox" /></th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Salary</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="7" className="text-center text-muted">No data available in table</td>
            </tr>
          </tbody>
        </table>

        {/* Table Footer */}
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-muted">Showing 0 to 0 of 0 entries</div>
          <div className="pagination">
            <button className="btn btn-sm btn-outline-secondary me-2" disabled>Previous</button>
            <button className="btn btn-sm btn-outline-secondary" disabled>Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
