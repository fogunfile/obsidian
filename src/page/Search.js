import React, { useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
function useQuery() {
  // Use the URLSearchParams API to extract the query parameters
  // useLocation().search will have the query parameters eg: ?term=bar&a=b
  return new URLSearchParams(useLocation().search)
}
const Search = () => {
  return (
    <div>
      <h1> Book an appointment </h1>
    </div>
  )
}

export default Search