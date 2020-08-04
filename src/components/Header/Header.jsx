import React, {useEffect} from 'react'
import { useDispatch, useTheme } from '../../hooks/appContext'

function Header() {
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleChange = () => {
    dispatch({ type: 'TOGGLE_THEME' })
  }

  useEffect(() => {
    document.body.style = `background-color: var(--${theme}-big-color); color: var(--${theme}--fg-color)`
  })
  return (
    <div>
      <h1>This is a Header</h1>
      <input type="radio" name="theme" value="light" onChange={handleChange} />
      Light Mode
      <input type="radio" name="theme" value="dark" onChange={handleChange}/>
      Dark Mode
    </div>
  )
}

export default Header

