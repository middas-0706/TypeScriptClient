export interface ISearchResults   {
        
        /** *the domain name or title of the quoted source* */
        title?: string | undefined
        
        /** *URL of the quoted source* */
        url?: string | undefined
        
        /** *publishing date* date when the page appearing in the search result was published or indexed  in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” */
        date?: string | undefined
        
        /** *text snippet in the search result* */
        snippet?: string | undefined

    [key: string]: any;

    }

export class SearchResults  implements ISearchResults {

    
    /** *the domain name or title of the quoted source* */

    title?: string | undefined;

    
    /** *URL of the quoted source* */

    url?: string | undefined;

    
    /** *publishing date* date when the page appearing in the search result was published or indexed  in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” */

    date?: string | undefined;

    
    /** *text snippet in the search result* */

    snippet?: string | undefined;

    [key: string]: any;


    constructor(data?: ISearchResults) {

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
            this.title = data["title"];
            this.url = data["url"];
            this.date = data["date"];
            this.snippet = data["snippet"];
        }
    }

    static fromJS(data: any): SearchResults {
        data = typeof data === 'object' ? data : {};


        let result = new SearchResults();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
        data["url"] = this.url;
        data["date"] = this.date;
        data["snippet"] = this.snippet;
        return data;
    }
}