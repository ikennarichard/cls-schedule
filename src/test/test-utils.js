import { Provider } from 'react-redux';
import store from '../app/store.js';
import { ThemeProvider } from '../context/ThemeContext.jsx';

export default function Providers({children}) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
  )
}