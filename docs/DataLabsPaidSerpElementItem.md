# DataLabsPaidSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | *title of the result in SERP* |[optional]|
**domain** | **string** | *subdomain in SERP* |[optional]|
**description** | **string** | *description of the results element in SERP* |[optional]|
**breadcrumb** | **string** | *breadcrumb in SERP* |[optional]|
**url** | **string** | *relevant URL in SERP* |[optional]|
**checks** | **string[]** | *array of properties detected for the SERP element*. lists the properties that are true for this element. each value in the array represents a detected property . example:. if `is_image` is present in the array, the element contains an image. possible values in the array:. `is_image`, `is_video`, `is_featured_snippet`, `amp_version`, `is_malicious`, `is_web_story`, `is_highly_cited`. equals `null` if none of the properties are detected for the element. learn more about the `checks` array in [this Help Center article](https://dataforseo.com/help-center/whats-a-checks-array-in-the-google-organic-serp-api) |[optional]|
**highlighted** | **string[]** | *words highlighted in bold within the results `description`* |[optional]|
**extra** | **{ [key: string]: string; }** |  |[optional]|
**description_rows** | **string[]** | *extended description*.             if there is none, equals `null` |[optional]|
**links** | **AdLinkElement[]** | *sitelinks*.             the links shown below some of Google's search results.             if there are none, equals `null` |[optional]|
**main_domain** | **string** | *primary domain name in SERP* |[optional]|
**relative_url** | **string** | *URL in SERP that does not specify the HTTPs protocol and domain name* |[optional]|
**etv** | **number** | *estimated traffic volume*.             estimated organic monthly traffic to the domain or webpage;.             calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain or webpage rank for;.             learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-etv-calculated) |[optional]|
**estimated_paid_traffic_cost** | **number** | *estimated cost of converting organic search traffic into paid*.             represents the estimated monthly cost of running ads for all keywords that a domain or webpage ranks for;.             the metric is calculated as the product of organic `etv` and paid `cpc` values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search;.             learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-traffic-cost-calculated) |[optional]|
**clickstream_etv** | **number** | *estimated traffic volume based on clickstream data*.             calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain or webpage ranks for;.             to retrieve results for this field, the parameter `include_clickstream_data` must be set to `true`;.             learn more about how the metric is calculated in this [help center article](https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated) |[optional]|
**rank_changes** | **RankChanges** | *changes in rankings*.             contains information about the ranking changes of the SERP element since the `previous_updated_time` |[optional]|
**backlinks_info** | **BacklinksInfo** | *backlinks information for the relevant page URL* |[optional]|
**rank_info** | **RankInfo** | *page and domain rank information* |[optional]|