/* eslint-disable no-restricted-globals */
/** @jsxImportSource @emotion/react */
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from 'src/pages/home'
import { OBInformPage } from 'src/pages/ob-inform'
import { OpenidCertPage } from 'src/pages/openid-cert'

type AppProps = {}

export const App = (props: AppProps) => {
  useEffect(() => {
    if (location.hash) {
      location.href = location.hash
    }
  })
  return (
    <Routes>
      <Route path="/open-banking/informes" element={<OBInformPage />} />
      <Route path="/open-banking/timeline" element={<HomePage />} />
      <Route path="/open-banking/certification" element={<HomePage />} />
      <Route path="/open-insurance/informes" element={<HomePage />} />
      <Route path="/open-insurance/timeline" element={<HomePage />} />
      <Route path="/open-insurance/certification" element={<HomePage />} />
      <Route path="/openid/certification" element={<OpenidCertPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
