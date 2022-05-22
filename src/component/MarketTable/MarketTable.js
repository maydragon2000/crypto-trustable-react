import React, { useEffect, useState } from "react";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, usePagination, useSortBy } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { Link } from "react-router-dom";
import CoinRow from "./CoinRow";

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <input
            className="form-control"
            value={value || ""}
            onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
            placeholder="Search Coin Name"
        />
    )
}

function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length

    return (
        <div>

            <input
                className="form-control"
                value={filterValue || ''}
                onChange={e => {
                    setFilter(e.target.value || undefined)
                }}
                placeholder={`Search ${count} records...`}
            />
        </div>

    )
}

function Table({ columns, data }) {

    const defaultColumn = React.useMemo(
        () => ({
            // Default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
        rows,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            initialState: { pageIndex: 2, pageSize: 5 },
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
    )
    const [marketData, setMarketData] = useState([{
        name: {
            image: "bitcoin",
            fullName: "Bitcoin",
            logogram: "BTC"
        },
        price: "$43,975.72",
        percent: "+0.60%",
        highPrice: "$44,727.80	",
        lowPrice: "$43,318.64",
        increase: true
    },
    {
        name: {
            image: "ethereum",
            fullName: "Ethereum",
            logogram: "ETH"
        },
        price: "$3,187.62",
        percent: "-2.79%",
        highPrice: "$3,263.16",
        lowPrice: "$3,077.03",
        increase: false
    },
    {
        name: {
            image: "xrp",
            fullName: "XRP",
            logogram: "XRP"
        },
        price: "$0.8721",
        percent: "+1.40%",
        highPrice: "$0.9091		",
        lowPrice: "$0.8484	",
        increase: true
    },
    {
        name: {
            image: "litecoin",
            fullName: "Litecoin",
            logogram: "LTC"
        },
        price: "$138.61",
        percent: "+0.38%",
        highPrice: "$140.79		",
        lowPrice: "$136.92	",
        increase: true
    },
    {
        name: {
            image: "polygon",
            fullName: "Polygon",
            logogram: "MATIC"
        },
        price: "$1.98",
        percent: "+2.46%	",
        highPrice: "$2.06		",
        lowPrice: "$1.91",
        increase: true
    },
    {
        name: {
            image: "solana",
            fullName: "Solana",
            logogram: "SOL"
        },
        price: "$112.13",
        percent: "+1.06%",
        highPrice: "$116.83		",
        lowPrice: "$110.66",
        increase: true
    },
    {
        name: {
            image: "usdc",
            fullName: "United States Dollar",
            logogram: "USDC"
        },
        price: "$42164.54",
        percent: "+7.76%",
        highPrice: "$42164.54	",
        lowPrice: "$42164.54",
        increase: true
    },
    {
        name: {
            image: "cardano",
            fullName: "Cardano",
            logogram: "ADA"
        },
        price: "$1.18",
        percent: "-0.33%",
        highPrice: "$1.21		",
        lowPrice: "$1.21	",
        increase: false
    },
    {
        name: {
            image: "tether",
            fullName: "Tether",
            logogram: "USDT"
        },
        price: "$42164.54",
        percent: "+7.76%",
        highPrice: "$42164.54",
        lowPrice: "$42164.54",
        increase: true
    },
    {
        name: {
            image: "avalanche",
            fullName: "Avalanche",
            logogram: "AVAX"
        },
        price: "$89.62",
        percent: "+2.44%",
        highPrice: "$91.93	",
        lowPrice: "$87.38	",
        increase: true
    },
    {
        name: {
            image: "polkadot",
            fullName: "Polkadot",
            logogram: "DOT"
        },
        price: "$21.71",
        percent: "+0.98%	",
        highPrice: "$22.21	",
        lowPrice: "$21.42	",
        increase: true
    },

    {
        name: {
            image: "dogecoin",
            fullName: "Dogecoin",
            logogram: "DOGE"
        },
        price: "$0.1568",
        percent: "-0.08%",
        highPrice: "$0.1607	",
        lowPrice: "$0.1557",
        increase: false

    },
    {
        name: {
            image: "binance",
            fullName: "Binance",
            logogram: "BNB"
        },
        price: "$421.10",
        percent: "+1.52%",
        highPrice: "$427.39	",
        lowPrice: "$412.90",
        increase: true
    },
    {
        name: {
            image: "cosmos",
            fullName: "Cosmos",
            logogram: "ATOM"
        },
        price: "$30.45",
        percent: "+0.20%",
        highPrice: "$31.43",
        lowPrice: "$29.97",
        increase: true
    },
    {
        name: {
            image: "near-protocol",
            fullName: "NEAR Protocol",
            logogram: "NEAR"
        },
        price: "$12.65",
        percent: "+1.27%",
        highPrice: "$13.06	",
        lowPrice: "$12.33 ",
        increase: true
    },
    {
        name: {
            image: "tron",
            fullName: "TRON",
            logogram: "TRX"
        },
        price: "$0.0704",
        percent: "+2.77%",
        highPrice: "$0.07006	",
        lowPrice: "$0.06806",
        increase: true
    },
    {
        name: {
            image: "algorand",
            fullName: "Algorand",
            logogram: "ALGO"
        },
        price: "$1.02",
        percent: "+0.43%",
        highPrice: "$1.04	",
        lowPrice: "$1.01",
        increase: true
    },
    {
        name: {
            image: "bitcoin-cash",
            fullName: "Bitcoin Cash",
            logogram: "BCH"
        },
        price: "$345.91",
        percent: "+1.97%",
        highPrice: "$347.29	",
        lowPrice: "$335.88",
        increase: true
    },
    {
        name: {
            image: "stellar",
            fullName: "Stellar",
            logogram: "XLM"
        },
        price: "$0.2388",
        percent: "+1.20%",
        highPrice: "$0.2434	",
        lowPrice: "$0.2355	",
        increase: true
    },
    {
        name: {
            image: "terra",
            fullName: "Terra",
            logogram: "LUNA"
        },
        price: "$56.25",
        percent: "+2.51%",
        highPrice: "$57.87",
        lowPrice: "$54.63",
        increase: true
    },
    ]);
    return (
        <div>
            <div className="filter-bar row">
                <div className="col-8 left">
                    <button>Top Gainers</button>
                    <button>Top Loser</button>
                    <button>New in market</button>
                    <button>Top in trading</button>
                    <button>Top in Volume</button>
                </div>
                <div className="col-4 right">
                    <div className="search-input-wrap">
                        <img alt="" className="search-left" src="image/search-left.svg" />
                        <GlobalFilter
                            preGlobalFilteredRows={preGlobalFilteredRows}
                            globalFilter={state.globalFilter}
                            setGlobalFilter={setGlobalFilter}
                        />
                        <img alt="" className="search-right" src="image/search-right.svg" />
                    </div>
                </div>
            </div>
            <div className="toolbar row">
                <div className="left col-6">
                    <Link to="">Category <img className="down" alt="" src="image/arrow-down.svg" /><img alt="" className="top" src="image/arrow-top-blue.svg" /></Link>
                    <Link to="">Algorithm <img className="down" alt="" src="image/arrow-down.svg" /><img alt="" className="top" src="image/arrow-top-blue.svg" /></Link>
                    <Link to="">Platform <img className="down" alt="" src="image/arrow-down.svg" /><img alt="" className="top" src="image/arrow-top-blue.svg" /></Link>
                    <Link to="">Industry <img className="down" alt="" src="image/arrow-down.svg" /><img alt="" className="top" src="image/arrow-top-blue.svg" /></Link>
                </div>
                <div className="right col-6">
                    <select >
                        <option value="5">Show 5</option>
                        <option value="10">Show 10</option>
                        <option value="20">Show 20</option>
                        <option value="30">Show 30</option>
                        <option value="40">Show 40</option>
                        <option value="50">Show 50</option>
                    </select>
                    <Link to=""><img className="icon-filter" alt="" src="image/icon-filter.svg" /></Link>
                    <Link to=""><img className="clear-filter" alt="" src="image/clear-filter.svg" /></Link>
                    <Link to=""><img className="customize" alt="" src="image/customize.svg" /> Customize</Link>
                    <Link to=""><img className="close" alt="" src="image/close.svg" /> Clear Filter</Link>
                </div>
            </div>

            <table className="table market-table" {...getTableProps()}>
                {/* <thead>
                    {headerGroups.map(headerGroup => (
                        <tr  {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th style={{ border: "none" }} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr style={{ border: "0px" }} {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td style={{ border: "0px" }} {...cell.getCellProps()}>{

                                        cell.render('Cell')
                                    }</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody> */}
                <thead className=" ">
                    <tr>
                        <th className="index">#<img alt="" src="image/arrow-up-triangle.svg" /> </th>
                        <th className="name">Coin Name <img alt="" src="image/arrow-up-triangle.svg" /></th>
                        <th className="price">Coin Price <img alt="" src="image/arrow-up-triangle.svg" /></th>
                        <th className="percent">24% <img alt="" src="image/arrow-up-triangle.svg" /></th>
                        <th className="high-price">24h High Price <img alt="" src="image/arrow-up-triangle.svg" /></th>
                        <th className="low-price">24h Low Price <img alt="" src="image/arrow-up-triangle.svg" /></th>
                        <th className="chart">Chart <img alt="" src="image/arrow-up-triangle.svg" /></th>
                    </tr>
                </thead>
                <tbody>
                    {marketData.map((item, index) => <CoinRow item={item} index={index} />)}
                </tbody>
            </table>
            <br />
            <div className="market-table-footer">
                <p>1-20 of 9,383 assets</p>

                <ul className="pagination">
                    <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        <a className="page-link">First</a>
                    </li>
                    <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <a className="page-link">{'<'}</a>
                    </li>
                    <li>
                        <a className="page-link">
                            Page{' '}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{' '}
                        </a>
                    </li>
                    <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                        <a className="page-link">{'>'}</a>
                    </li>
                    <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        <a className="page-link">Last</a>
                    </li>

                    {/* <li>
                        <a className="page-link">
                            <input
                                className="form-control"
                                type="number"
                                defaultValue={pageIndex + 1}
                                onChange={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                                    gotoPage(page)
                                }}
                                style={{ width: '100px', height: '20px' }}
                            />
                        </a>
                    </li>{' '} */}
                    {/* <select
                        className="form-control"
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                        style={{ width: '120px', height: '38px' }}
                    >
                        {[1, 2, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select> */}
                </ul>
            </div>

        </div>
    )
}

const MarketTable = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: ' ',
                columns: [
                    {
                        Header: '#',
                        accessor: '#',
                    },
                    {
                        Header: 'Coin Name',
                        accessor: 'coinName'
                    },
                    {
                        Header: '24%',
                        accessor: 'changePricePercent'
                    },
                    {
                        Header: '24h High Price',
                        accessor: 'highPrice'
                    },
                    {
                        Header: '24h Low Price',
                        accessor: 'lowPrice'
                    },
                    {
                        Header: 'Chart',
                        accessor: 'chart'
                    },
                ],
            },
        ],
        []
    )

    const data = [
        {
            "#": 1,
            "coinName": "horn-od926",
            "changePricePercent": "selection-gsykp",
            "highPrice": 22,
            "lowPrice": 20,
            "chart": 39,
        },
        {
            "#": 2,
            "coinName": "heart-nff6w",
            "changePricePercent": "information-nyp92",
            "highPrice": 16,
            "lowPrice": 98,
            "chart": 40,
        },
        {
            "#": 3,
            "coinName": "minute-yri12",
            "changePricePercent": "fairies-iutct",
            "highPrice": 7,
            "lowPrice": 77,
            "chart": 39,
        },
        {
            "#": 4,
            "coinName": "degree-jx4h0",
            "changePricePercent": "man-u2y40",
            "highPrice": 27,
            "lowPrice": 54,
            "chart": 92,
        }
    ]

    return (
        <>

            <Table columns={columns} data={data} />
        </>
    )
}
export default MarketTable;