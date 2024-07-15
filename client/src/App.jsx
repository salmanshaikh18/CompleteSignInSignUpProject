import React from 'react'
import "./App.css"
import { Button } from './components/ui/button'
import { ThemeProvider } from './components/ui/theme-provider'

const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Button variant={"secondary"}>Click</Button>
    </ThemeProvider>
  )
}

export default App