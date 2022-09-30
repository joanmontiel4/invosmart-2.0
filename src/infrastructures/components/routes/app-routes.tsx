import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { iMenuOptions } from '../../interfaces/imenuoptions';

const Home = React.lazy(() => import('../../../features/home/page/home'));

const Clients = React.lazy(
    () => import('../../../features/clients/page/clients')
);

const Invoices = React.lazy(
    () => import('../../../features/invoices/page/invoices')
);

export function AppRoutes({
    menuOptions,
}: {
    menuOptions: Array<iMenuOptions>;
}) {
    return (
        <Routes>
            <Route
                path={menuOptions[0].path}
                element={
                    <React.Suspense>
                        <Home />
                    </React.Suspense>
                }
            ></Route>
            <Route
                path={menuOptions[1].path}
                element={
                    <React.Suspense>
                        <Clients />
                    </React.Suspense>
                }
            ></Route>
            <Route
                path={menuOptions[2].path}
                element={
                    <React.Suspense>
                        <Invoices />
                    </React.Suspense>
                }
            ></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
