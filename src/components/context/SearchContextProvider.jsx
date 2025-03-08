import { useState } from "react";
import SearchTypeContext from "./searchTypeContext";

export default function SearchContextProvider({children}) {
  const [regularSearch, setRegularSearch] = useState("");
  const [fareType, setFareType] = useState("");


  const searchInfo={
    setRegularSearch,
    setFareType,
    regularSearch,
    fareType
  }



  return (
    <SearchTypeContext.Provider value={searchInfo}>
      {children}
    </SearchTypeContext.Provider>
  )
}
