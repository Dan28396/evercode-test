import React, {useEffect, useState} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectHistoricalDataByName} from "../../Store/Wallet";
import {chartConfig} from "../../utils";

function ChartComponent(props) {
    const {coinName} = useParams();
    const historicalData = useSelector((state) => selectHistoricalDataByName(state, coinName))
    const [options, setOptions] = useState(chartConfig)

    useEffect(() => {
        if (historicalData) {
            setOptions({series: [{data: historicalData}]});
        }
    }, [historicalData]);

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
        </div>
    );
}

export default ChartComponent;