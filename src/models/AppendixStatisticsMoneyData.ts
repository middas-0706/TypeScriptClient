import { AppendixDayStatisticsDataInfo, IAppendixDayStatisticsDataInfo } from "./AppendixDayStatisticsDataInfo";


export interface IAppendixStatisticsMoneyData   {
        
        day?: AppendixDayStatisticsDataInfo | undefined
        
        minute?: AppendixDayStatisticsDataInfo | undefined

    [key: string]: any;

    }

export class AppendixStatisticsMoneyData  implements IAppendixStatisticsMoneyData {

    day?: AppendixDayStatisticsDataInfo | undefined;

    minute?: AppendixDayStatisticsDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixStatisticsMoneyData) {

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
            this.minute = data["minute"] ? AppendixDayStatisticsDataInfo.fromJS(data["minute"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixStatisticsMoneyData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixStatisticsMoneyData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["day"] = this.day ? AppendixDayStatisticsDataInfo.fromJS(this.day)?.toJSON() : <any>undefined;
        data["minute"] = this.minute ? AppendixDayStatisticsDataInfo.fromJS(this.minute)?.toJSON() : <any>undefined;
        return data;
    }
}