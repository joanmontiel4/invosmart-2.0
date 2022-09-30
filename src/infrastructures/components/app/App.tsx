import React from 'react';
import { AppRoutes } from '../routes/app-routes';
import { Layout } from '../layout/layout';

function App() {
    const appTitle = 'invosmart';
    const menuOptions = [
        { path: '/', label: 'Home' },
        { path: '/clients', label: 'Clients' },
        { path: '/invoices', label: 'Invoices' },
    ];
    return (
        <Layout appTitle={appTitle} menuOptions={menuOptions}>
            <AppRoutes menuOptions={menuOptions}></AppRoutes>
        </Layout>
    );
}

export default App;
