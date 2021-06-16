import axios from "axios";

const cryptoCurrencies = [
    {
        name: 'BTC',
        fullName: 'Bitcoin',
        balance: 0.241234553
    },
    {
        name: 'ETH',
        fullName: 'Ethereum',
        balance: 2.6545634
    },
    {
        name: 'XRP',
        fullName: 'XRP',
        balance: 135.767836
    },
    {
        name: 'BNB',
        fullName: 'Binance Coin',
        balance: 14.129523
    },
    {
        name: 'DOGE',
        fullName: 'Dogecoin',
        balance: 343.257084
    }
];
const currencies = ["USD"];

export const chartConfig = {
    series: [{
        data: []
    }],
    xAxis: {
        labels: {
            style: {
                color: '#f3f3f3',
            }
        },
    },
    yAxis: {
        labels: {
            style: {
                color: '#f3f3f3',
            },
        },
    },
    rangeSelector: {
        selected: 0,
        inputEnabled: false,
        buttonPosition: {
            x: -20
        },
        labelStyle: {
            display: 'none'
        },
        buttons: [{
            type: 'day',
            count: 1,
            text: 'Day'
        }, {
            type: 'week',
            count: 1,
            text: 'Week'
        }, {
            type: 'month',
            count: 1,
            text: 'Month'
        }],
        buttonTheme: {
            width: 50,
            fill: 'none',
            stroke: 'none',
            'stroke-width': 0,
            style: {
                color: '#9e9e9e',
                fontWeight: 'bold',
                backgroundColor: '#3f414d'
            },
            states: {
                select: {
                    fill: '#3f414d',
                    style: {
                        color: '#f3f3f3'
                    }
                }
            },
        },
    },
    scrollbar: {
        enabled: false
    },
    chart: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    colors: ['#8d56b9a8'],
    credits: {
        enabled: false
    }
}

const getCryptoCurrenciesString = () => {
    let str = '';
    cryptoCurrencies.forEach(item => str = str.concat(',', item.name))
    return str
}

export const getNewData = async () => {
    try {
        let wallets = [];
        const {data: {RAW: res}} = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull', {
                params: {
                    fsyms: getCryptoCurrenciesString(),
                    tsyms: currencies.join()
                }
            }
        )
        Object.values(res).forEach(currency => {
            wallets.push({
                name: currency['USD']['FROMSYMBOL'].toLowerCase(),
                fullname: cryptoCurrencies.find(item => item.name === currency['USD']['FROMSYMBOL']).fullName,
                balance: cryptoCurrencies.find(item => item.name === currency['USD']['FROMSYMBOL']).balance,
                price: currency['USD']['PRICE'],
                changePCT24Hour: currency['USD']['CHANGEPCT24HOUR']
            })
        })
        return wallets
    } catch (err) {
        console.error(err)
    }
}

export const getHistoricalData = async (coin) => {
    try {
        let historicalData = [];
        const {data: {Data: res}} = await axios.get('https://min-api.cryptocompare.com/data/v2/histohour', {
                params: {
                    fsym: coin,
                    tsym: 'USD',
                    limit: 743
                }
            }
        )
        Object.values(res.Data).forEach(data => {
            historicalData.push([data.time * 1000, data.open])
        })
        return {historicalData, coin}
    } catch (err) {
        console.error(err)
    }
}

