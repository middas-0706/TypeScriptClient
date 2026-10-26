# BaseChatGptLlmScraperElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | *group rank in a ChatGPT result*. position within a group of elements with identical `type` values. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank in a ChatGPT result*. absolute position among all the elements |[optional]|