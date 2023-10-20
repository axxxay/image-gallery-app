import './App.css';
import SearchImagePage from './components/SearchImagePage';
import { SearchProvider } from './contexts/SearchContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <SearchImagePage />
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
