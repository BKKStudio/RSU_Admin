import { useTheme } from 'next-themes';


function DarkModeToggle() {
    const { theme, setTheme } = useTheme();
  
    return (
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label="Toggle Dark Mode"
      >
        {theme === 'light' ? "Dark" :" Light"}
      </button>
    );
  }
  
  export default DarkModeToggle;