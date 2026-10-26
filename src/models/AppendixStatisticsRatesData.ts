import { AppendixDayStatisticsDataInfo, IAppendixDayStatisticsDataInfo } from "./AppendixDayStatisticsDataInfo";
import { AppendixMinuteStatisticsRatesData, IAppendixMinuteStatisticsRatesData } from "./AppendixMinuteStatisticsRatesData";


export interface IAppendixStatisticsRatesData   {
        
        day?: AppendixDayStatisticsDataInfo | undefined
        
        minute?: AppendixMinuteStatisticsRatesData | undefined

    [key: string]: any;

    }

export class AppendixStatisticsRatesData  implements IAppendixStatisticsRatesData {

    day?: AppendixDayStatisticsDataInfo | undefined;

    minute?: AppendixMinuteStatisticsRatesData | undefined;

    [key: string]: any;


    constructor(data?: IAppendixStatisticsRatesData) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.day = data["day"] ? AppendixDayStatisticsDataInfo.fromJS(data["day"]) : <any>undefined;
            this.minute = data["minute"] ? AppendixMinuteStatisticsRatesData.fromJS(data["minute"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixStatisticsRatesData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixStatisticsRatesData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["day"] = this.day ? AppendixDayStatisticsDataInfo.fromJS(this.day)?.toJSON() : <any>undefined;
        data["minute"] = this.minute ? AppendixMinuteStatisticsRatesData.fromJS(this.minute)?.toJSON() : <any>undefined;
        return data;
    }
}