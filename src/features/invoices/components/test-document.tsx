import { stringify } from 'querystring';
import { iClient } from '../../../infrastructures/interfaces/iclient';
import { iCompanyDetails } from '../../../infrastructures/interfaces/icompanyDetails';
import { iDetails } from '../../../infrastructures/interfaces/idetails';
import { labels } from '../../../infrastructures/tools/labels';

export const InvoiceEnglish = ({
    company,
    invoiceReference,
    client,
    clientInfo,
}: {
    company: iCompanyDetails;
    invoiceReference: string;
    client: iClient;
    clientInfo: iCompanyDetails;
}) => {
    return (
        <div
            style={{
                minWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <InvoiceHeader company={company} />

            <InvoiceBody
                invoiceReference="SLKE3456"
                clientInfo={clientInfo}
                client={client}
            />
        </div>
    );
};

const InvoiceHeader = ({ company }: { company: iCompanyDetails }) => {
    return (
        <div
            className="invoice-header"
            style={{
                display: 'flex',
                height: '8rem',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgrey',
                minWidth: '1200px',
            }}
        >
            <div style={{ margin: '0 5rem 0 0' }}>
                <h2>Invoice</h2>
            </div>
            <div className="details details-small" style={{ display: 'flex' }}>
                <ul
                    className="details-label__list details-small"
                    style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '0 3rem 0 0',
                    }}
                >
                    {Object.keys(company).map((key, index) => (
                        <li
                            key={index + key}
                            className="details-label__item"
                        >{`${labels[key]}:`}</li>
                    ))}
                </ul>
                <ul
                    style={{ listStyle: 'none', padding: 0, margin: 0 }}
                    className="details-value__list details-small"
                >
                    {Object.values(company).map((item, index) => (
                        <li key={index + item} className="details-value__item">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const InvoiceBody = ({
    invoiceReference,
    client,
    clientInfo,
}: {
    invoiceReference: string;
    client: iClient;
    clientInfo: iCompanyDetails;
}) => {
    const invoiceDetails: Partial<iDetails> = {
        invoiceNumber: '1234',
        invoiceDate: 'test-date',
        invoiceDueDate: 'test-due-date',
    };

    return (
        <div className="invoice-main-container" style={{ minWidth: '1200px' }}>
            <InvoiceSectionTitle
                titles={['Client Information', 'Invoice Details']}
            />
            <div style={{ display: 'flex' }}>
                <OrderedInfo info={clientInfo} />
                <OrderedInfo info={invoiceDetails} />
            </div>
            <InvoiceSectionTitle titles={['Services']} />
            <Services client={client} />
            <CostSummary />
        </div>
    );
};

const CostSummary = () => {
    const costAndTaxes = {
        subtotal: '4534',
        tax: '21%',
        withholdingIRPF: '19%',
        total: 'TOTAL',
    };
    return (
        <div
            className="details details-regular"
            style={{
                display: 'flex',
                width: '50%',
                margin: '0.5rem 0 0.5rem 2rem',
            }}
        >
            <OrderedInfo info={costAndTaxes} />
        </div>
    );
};

const OrderedInfo = ({ info }: { info: Partial<iDetails> }) => {
    return (
        <div
            className="details details-regular"
            style={{
                display: 'flex',
                width: '50%',
                margin: '0.5rem 0 0.5rem 2rem',
            }}
        >
            <ul
                className="details-label__list details-regular"
                style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 3rem 0 0',
                }}
            >
                {Object.keys(info).map((key, index) => (
                    <li
                        key={index + key}
                        className="details-label__item"
                        style={{ color: 'black', margin: '0.3rem 0 0 0' }}
                    >{`${labels[key]}`}</li>
                ))}
            </ul>
            <ul
                style={{ listStyle: 'none', padding: 0, margin: 0 }}
                className="details-value__list details-regular"
            >
                {Object.values(info)
                    .filter((value) => typeof value === 'string')
                    .map((item, index) => (
                        <li
                            key={index + item}
                            className="details-value__item"
                            style={{ color: 'grey', margin: '0.3rem 0 0 0' }}
                        >
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

const InvoiceSectionTitle = ({ titles }: { titles: Array<string> }) => {
    return (
        <div
            style={{
                display: 'flex',
                width: 'auto',
                backgroundColor: 'yellow',
            }}
        >
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    width: '100%',
                    margin: '0.5rem 0 0.5rem 2rem',
                    padding: 0,
                }}
            >
                {titles.map((title, index) => (
                    <li
                        key={index}
                        style={{
                            width: `${Math.floor(100 / titles.length)}%`,
                        }}
                    >
                        <div
                            style={{
                                width: `${Math.floor(100 / titles.length)}%`,
                            }}
                        >
                            <h3>{title}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Services = ({ client }: { client: iClient }) => {
    return (
        <div
            className="services"
            style={{
                display: 'flex',
                width: '70%',
                margin: '0.5rem 0 0.5rem 2rem',
            }}
        >
            <ul
                className="details-label__list details-regular"
                style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 3rem 0 0',
                }}
            >
                {client.services.map((service, index) => (
                    <li
                        key={index}
                        className="details-value__item"
                        style={{ color: 'black', margin: '0.3rem 0 0 0' }}
                    >
                        {service.concept}
                    </li>
                ))}
            </ul>
            <ul
                className="details-label__list details-regular"
                style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 3rem 0 0',
                }}
            >
                {client.services.map((service, index) => (
                    <li
                        key={index}
                        className="details-value__item"
                        style={{ color: 'black', margin: '0.3rem 0 0 0' }}
                    >
                        {service.unitPrice}
                    </li>
                ))}
            </ul>
        </div>
    );
};
