import React from 'react';

import store from './store/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                episodes: {
                    // Don't cache separate results based on
                    // any of this field's arguments.
                    keyArgs: false,

                    // Concatenate the incoming list items with
                    // the existing list items.
                    merge(existing = {}, incoming) {
                        const currentResult = existing?.results ?? [];
                        const incomingResult = incoming?.results ?? [];

                        return {
                            ...existing,
                            ...incoming,
                            results: [...currentResult, ...incomingResult],
                        };
                    },
                },
            },
        },
    },
});

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: cache,
});

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </ApolloProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
