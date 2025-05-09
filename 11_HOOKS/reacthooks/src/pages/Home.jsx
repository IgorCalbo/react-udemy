import React from 'react'

// hooks
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffetct from '../components/HookUseEffetct'
import HookUseRef from '../components/HookUseRef'

// useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'


const Home = () => {
  const { contextValue } = useContext(SomeContext)

  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffetct />
        <h2>useContext</h2>
        <p>Valor do contexto: {contextValue}</p>
        <hr />
        <HookUseRef />
        <HookUseCallback />
        <HookUseMemo />
        <HookUseLayoutEffect />
        <HookUseImperativeHandle />
        <HookCustom /> 
    </div>
  )
}

export default Home