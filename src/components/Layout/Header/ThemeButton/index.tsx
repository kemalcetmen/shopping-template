import styles from './index.module.scss'
import { BsSunFill } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const ThemeButton = () => {
  const [theme, setTheme] = useState<string>("light-theme")
  
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const colorChanger = () => {
    setTheme(prev => prev === 'light-theme' ? 'dark-theme' : 'light-theme')
  }

  return (
    <div className={styles.button} onClick={colorChanger}>
      {theme === 'dark-theme'
        ? <BsSunFill color={"white"} />
        : <BsMoonFill color={"black"} />
      }
    </div>
  );
}

export default ThemeButton;