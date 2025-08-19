import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if(!container) {
    throw new Error('Container not found');
}

const root = createRoot(container);

root.render(<h1>Hello World</h1>);
