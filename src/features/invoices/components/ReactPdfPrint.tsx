import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { iClient } from '../../../infrastructures/interfaces/iclient';
import { iCompanyDetails } from '../../../infrastructures/interfaces/icompanyDetails';
import { InvoiceEnglish } from './test-document';

const ownerInfo = {
    name: 'Owner name',
    email: 'owner_email@whatever.com',
    phoneNumber: 'phone_number',
    address: 'some_address ZIP_code, Town',
};

const clientTest: iClient = {
    id: 1,
    token: 'ñlks435-ñlkd-345',
    name: 'Anca Horiana Mocut',
    email: 'anemail@from.com',
    phoneNumber: '0034567234',
    address: 'test_address that is long enough for this test',
    status: 'active',
    services: [
        {
            id: 123,
            token: 'sñlkj-3-43-',
            concept: 'Alquiler de la terraza',
            quantity: 1,
            unitPrice: 300,
        },
    ],
};

const clientInfoTest: iCompanyDetails = {
    name: 'Anca Horiana Mocut',
    email: 'anemail@from.com',
    phoneNumber: '0034567234',
    address: 'test_address that is long enough for this test',
};

export const ReactPdfPrint = () => {
    const componentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'invoice',
        onAfterPrint: () => {
            // Typical use:
            // alert('Print success')
        },
    });
    return (
        <>
            <button onClick={handlePrint}>Print invoice</button>
            <div ref={componentRef} style={{ width: '100%', height: '100vh' }}>
                <InvoiceEnglish
                    company={ownerInfo}
                    invoiceReference={'12'}
                    client={clientTest}
                    clientInfo={clientInfoTest}
                />
            </div>
        </>
    );
};
