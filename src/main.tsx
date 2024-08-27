import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import store from './app/store';
import client from './apolloClient';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);
