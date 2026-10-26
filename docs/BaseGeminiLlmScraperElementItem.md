# BaseGeminiLlmScraperElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | *group rank in Gemini result*. position within a group of elements with identical `type` values. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank in a Gemini result*. absolute position among all the elements in a Gemini result |[optional]|
**markdown** | **string** | *content of the element in markdown format*. content of the result formatted in the [markdown markup language](https://en.wikipedia.org/wiki/Markdown) |[optional]|