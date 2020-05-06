import { useLocalStorage } from './useLocalStorage'
import { useEffect} from 'react'

export const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue)

    useEffect(() => {
        const app = document.querySelector('.App')
        darkMode ? app.classList.add('dark-mode') : app.classList.remove('dark-mode')
        
    },[darkMode])

    return [darkMode, setDarkMode]
}