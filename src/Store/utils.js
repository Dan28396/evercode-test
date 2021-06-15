import axios from "axios";

const cryptoCurrencies = [
    {
        name: 'BTC',
        fullName: 'Bitcoin',
        balance: 0.2412345
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

const getCryptoCurrenciesString = () => {
    let str = '';
    cryptoCurrencies.forEach(item => str = str.concat(',', item.name))
    return str
}

export const getNewData = async () => {
    try {
        let wallets = [];
        const {data: {RAW: res}} = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull`, {
                params: {
                    fsyms: getCryptoCurrenciesString(),
                    tsyms: currencies.join()
                }
            }
        )
        Object.values(res).forEach(currency => {
            wallets.push({
                name: currency['USD']['FROMSYMBOL'],
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

export const calculateTotalBalance = (wallet) => {

}

