import { SerpApiStopCrawlOnMatchInfo, ISerpApiStopCrawlOnMatchInfo } from "./SerpApiStopCrawlOnMatchInfo";


export interface ISerpYahooOrganicLiveAdvancedRequestInfo   {
        
        /** direct URL of the search queryoptional fieldyou can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.example:https://search.yahoo.com/search?p=rank+checker&n=100&vl=lang_en&vc=us&ei=UTF-8 */
        url?: string | undefined
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character '+' will be decoded to a space character)if you need to use the '%' character for your keyword, please specify it as '%25';if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/locationsexample:London,England,United Kingdom */
        location_name?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name_or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/locationsexample:2840n */
        location_code?: number | undefined
        
        /** GPS coordinates of a locationrequired field if you don't specify location_name_or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199.9 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200n */
        location_coordinate?: string | undefined
        
        /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/languagesexample:English */
        language_name?: string | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code_by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/languagesexample:enn */
        language_code?: string | undefined
        
        /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */
        device?: string | undefined
        
        /** device operating systemoptional fieldif you specify desktop in the device field, choose from the following values: windows, macosdefault value: windowsif you specify mobile in the device field, choose from the following values: android, iosdefault value: android */
        os?: string | undefined
        
        /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:au.search.yahoo.com, uk.search.yahoo.com, ca.search.yahoo.com, etc. */
        se_domain?: string | undefined
        
        /** parsing depthoptional fieldnumber of results in SERPdefault value: 6max value: 200Your account will be billed per each SERP; Each Yahoo SERP can contain fewer than 10 results, so setting depth above the default value may result in additional charges ;The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** page crawl limitoptional fieldnumber of search results pages to crawldefault value: 1max value: 100Note: the max_crawl_pages and depth parameters complement each other;learn more at our help center */
        max_crawl_pages?: number | undefined
        
        /** target domain, subdomain, or webpage to get results foroptional fielda domain or a subdomain should be specified without https:// and www.note that the results of target-specific tasks will only include SERP elements that contain a url string;you can also use a wildcard (‘’) character to specify the search pattern in SERP and narrow down the results;examples:example.com  - returns results for the website's home page with URLs, such as https://example.com, or https://www.example.com/, or https://example.com/;example.com - returns results for the domain, including all its pages;example.com - returns results for the entire domain, including all its pages and subdomains;example.com  - returns results for the home page regardless of the subdomain, such as https://en.example.com; example.com/example-page  - returns results for the exact URL;example.com/example-page  - returns results for all domain's URLs that start with the specified string */
        target?: string | undefined
        
        /** additional parameters of the search queryoptional fieldget the list of available parameters and additional details here */
        search_param?: string | undefined
        
        /** array of targets to stop crawling optional field if specified, the response will contain SERP results up to and including the specified match_value; you can specify up to 10 target values in this array example: 'stop_crawl_on_match':[{'match_value':'dataforseo.com','match_type':'with_subdomains'}] learn more about this parameter on our Help Center - https://dataforseo.com/help-center/using-the-stop_crawl_on_match-parameter-in-serp-api Your account will be billed per each SERP crawled through the specified targets */
        stop_crawl_on_match?: SerpApiStopCrawlOnMatchInfo[] | undefined
        
        /** target domain, subdomain, or wildcard valuerequired field if stop_crawl_on_match is specifiedspecify a target domain, subdomain, or wildcard value;Note: domain or subdomain must be specified without a request protocol;example: 'match_value': 'dataforseo.com','match_value': '/blog/post-*' */
        match_value?: string | undefined
        
        /** target match typerequired field if stop_crawl_on_match is specifiedtype of match for the match_valuepossible values: domain – specific domain or subdomainwith_subdomains – main domain and subdomainswildcard –  wildcard pattern */
        match_type?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class SerpYahooOrganicLiveAdvancedRequestInfo  implements ISerpYahooOrganicLiveAdvancedRequestInfo {

    
    /** direct URL of the search queryoptional fieldyou can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.example:https://search.yahoo.com/search?p=rank+checker&n=100&vl=lang_en&vc=us&ei=UTF-8 */

    url?: string | undefined;

    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character '+' will be decoded to a space character)if you need to use the '%' character for your keyword, please specify it as '%25';if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;

    
    /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/locationsexample:London,England,United Kingdom */

    location_name?: string | undefined;

    
    /** search engine location coderequired field if you don't specify location_name_or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/locationsexample:2840n */

    location_code?: number | undefined;

    
    /** GPS coordinates of a locationrequired field if you don't specify location_name_or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199.9 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200n */

    location_coordinate?: string | undefined;

    
    /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/languagesexample:English */

    language_name?: string | undefined;

    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code_by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/languagesexample:enn */

    language_code?: string | undefined;

    
    /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */

    device?: string | undefined;

    
    /** device operating systemoptional fieldif you specify desktop in the device field, choose from the following values: windows, macosdefault value: windowsif you specify mobile in the device field, choose from the following values: android, iosdefault value: android */

    os?: string | undefined;

    
    /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:au.search.yahoo.com, uk.search.yahoo.com, ca.search.yahoo.com, etc. */

    se_domain?: string | undefined;

    
    /** parsing depthoptional fieldnumber of results in SERPdefault value: 6max value: 200Your account will be billed per each SERP; Each Yahoo SERP can contain fewer than 10 results, so setting depth above the default value may result in additional charges ;The cost can be calculated on the Pricing page. */

    depth?: number | undefined;

    
    /** page crawl limitoptional fieldnumber of search results pages to crawldefault value: 1max value: 100Note: the max_crawl_pages and depth parameters complement each other;learn more at our help center */

    max_crawl_pages?: number | undefined;

    
    /** target domain, subdomain, or webpage to get results foroptional fielda domain or a subdomain should be specified without https:// and www.note that the results of target-specific tasks will only include SERP elements that contain a url string;you can also use a wildcard (‘’) character to specify the search pattern in SERP and narrow down the results;examples:example.com  - returns results for the website's home page with URLs, such as https://example.com, or https://www.example.com/, or https://example.com/;example.com - returns results for the domain, including all its pages;example.com - returns results for the entire domain, including all its pages and subdomains;example.com  - returns results for the home page regardless of the subdomain, such as https://en.example.com; example.com/example-page  - returns results for the exact URL;example.com/example-page  - returns results for all domain's URLs that start with the specified string */

    target?: string | undefined;

    
    /** additional parameters of the search queryoptional fieldget the list of available parameters and additional details here */

    search_param?: string | undefined;

    
    /** array of targets to stop crawling optional field if specified, the response will contain SERP results up to and including the specified match_value; you can specify up to 10 target values in this array example: 'stop_crawl_on_match':[{'match_value':'dataforseo.com','match_type':'with_subdomains'}] learn more about this parameter on our Help Center - https://dataforseo.com/help-center/using-the-stop_crawl_on_match-parameter-in-serp-api Your account will be billed per each SERP crawled through the specified targets */

    stop_crawl_on_match?: SerpApiStopCrawlOnMatchInfo[] | undefined;

    
    /** target domain, subdomain, or wildcard valuerequired field if stop_crawl_on_match is specifiedspecify a target domain, subdomain, or wildcard value;Note: domain or subdomain must be specified without a request protocol;example: 'match_value': 'dataforseo.com','match_value': '/blog/post-*' */

    match_value?: string | undefined;

    
    /** target match typerequired field if stop_crawl_on_match is specifiedtype of match for the match_valuepossible values: domain – specific domain or subdomainwith_subdomains – main domain and subdomainswildcard –  wildcard pattern */

    match_type?: string | undefined;

    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpYahooOrganicLiveAdvancedRequestInfo) {

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
            this.url = data["url"];
            this.keyword = data["keyword"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.device = data["device"];
            this.os = data["os"];
            this.se_domain = data["se_domain"];
            this.depth = data["depth"];
            this.max_crawl_pages = data["max_crawl_pages"];
            this.target = data["target"];
            this.search_param = data["search_param"];
            if (Array.isArray(data["stop_crawl_on_match"])) {
                this.stop_crawl_on_match = [];
                for (let item of data["stop_crawl_on_match"]) {
                    this.stop_crawl_on_match.push(SerpApiStopCrawlOnMatchInfo.fromJS(item));
                }
            }
            this.match_value = data["match_value"];
            this.match_type = data["match_type"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): SerpYahooOrganicLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYahooOrganicLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url"] = this.url;
        data["keyword"] = this.keyword;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["os"] = this.os;
        data["se_domain"] = this.se_domain;
        data["depth"] = this.depth;
        data["max_crawl_pages"] = this.max_crawl_pages;
        data["target"] = this.target;
        data["search_param"] = this.search_param;
        data["stop_crawl_on_match"] = null;
        if (Array.isArray(this.stop_crawl_on_match)) {
            data["stop_crawl_on_match"] = [];
            for (let item of this.stop_crawl_on_match) {
                if (item && typeof item.toJSON === "function") {
                    data["stop_crawl_on_match"].push(item?.toJSON());
                }
            }
        }
        data["match_value"] = this.match_value;
        data["match_type"] = this.match_type;
        data["tag"] = this.tag;
        return data;
    }
}