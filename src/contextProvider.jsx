import React, { useReducer } from "react"

export const AppContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "toggle-buy-project-modal":
            return { ...state, toggleBuyProjectModel: !toggleBuyProjectModal }
        default:
            return state


    }

}

export const AppContextProvider = ({ children }) => {
    const [modals, dispatch] = useReducer(reducer, {
        toggleBuyProjectModal: false
    })
    



    return (
        <AppContext.Provider value={{
            modals,
            dispatch

        }}>

            {children}
        </AppContext.Provider>
    )
}