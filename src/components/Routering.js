import React from 'react'
import { Routes, Route} from "react-router-dom"
import App from '../App'
import { Contactsupport } from '../pages/Contactsupport'

const Routering = () => {
    return (
        <div>
            <Routes>
                <Route/>
                    <Route path="/" element={<App />} />
                    <Route path="/contactsupport" element={< Contactsupport/>} />
                <Route />
            </Routes>
        </div>
    )
}

export default Routering
