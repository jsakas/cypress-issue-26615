import { createRoot } from 'react-dom/client';
import { GoogleMaps } from './GoogleMaps';

function App() {
  return <GoogleMaps />;
}

const root = createRoot(document.getElementById('root') as Element);
root.render(<App />);
