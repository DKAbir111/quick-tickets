import { useState } from "react";
import SearchTypeContext from "./searchTypeContext";

export default function SearchContextProvider({children}) {
  const [regularSearch, setRegularSearch] = useState("");
  const [fareType, setFareType] = useState("");
  //newflight
const [newFlight,setNewFlight]=useState([])

  const searchInfo={
    setRegularSearch,
    setFareType,
    regularSearch,
    fareType,
    newFlight,
    setNewFlight
  }



  return (
    <SearchTypeContext.Provider value={searchInfo}>
      {children}
    </SearchTypeContext.Provider>
  )
}
