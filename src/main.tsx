import { ViteReactSSG } from 'vite-react-ssg/single-page';
import { App } from './app';
import { Header } from './components/header';
import './index.css';

export const createRoot = ViteReactSSG(
  <>
    <Header />
    <App />
  </>
);
