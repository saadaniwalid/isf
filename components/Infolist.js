import React from 'react'

export default function Infolist({title,desc}) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{title}</div>
                    {desc}
                  </div>
                </li>
    )
}
