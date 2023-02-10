import React from "react"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import Map from "./components/map"



const App = () => {
    // const world = useQuery(HELLO)
    // console.log(world)
    return (
            <Map />
    )
}

export default App
