import React from 'react'

const UserUpdate = React.createContext()

const UserProvider = UserUpdate.Provider

const UserConsumer = UserUpdate.Consumer

export { UserConsumer, UserProvider }