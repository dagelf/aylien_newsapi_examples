var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "{{current_app_id}}";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "{{current_app_key}}";

var opts = { 
  'id': [56],
  'notId': [154211],
  'title': "startup AND (raise OR raised OR raising OR raises)",
  'body': "startup",
  'text': "startup company",
  'language': ["en", "de"],
  'notLanguage': ["es", "it"],
  'publishedAtStart': "NOW-10DAYS",
  'publishedAtEnd': "NOW",
  'categoriesTaxonomy': "iptc-subjectcode",
  'categoriesConfident': true,
  'categoriesId': ["11000000"],
  'notCategoriesId': ["04002001"],
  'categoriesLevel': [1],
  'notCategoriesLevel': [3],
  'entitiesTitleText': ["GNU/Linux"],
  'notEntitiesTitleText': ["Microsoft", "Google"],
  'entitiesTitleType': ["Software", "Organization"],
  'notEntitiesTitleType': ["Person", "Agent"],
  'entitiesTitleLinksDbpedia': ["http://dbpedia.org/resource/Linux"],
  'notEntitiesTitleLinksDbpedia': ["http://dbpedia.org/resource/Windows"],
  'entitiesBodyText': ["Free Software"],
  'notEntitiesBodyText': ["Open Source"],
  'entitiesBodyType': ["Software", "Organization"],
  'notEntitiesBodyType': ["Person", "Agent"],
  'entitiesBodyLinksDbpedia': ["http://dbpedia.org/resource/Linux"],
  'notEntitiesBodyLinksDbpedia': ["http://dbpedia.org/resource/Microsoft"],
  'sentimentTitlePolarity': "positive",
  'notSentimentTitlePolarity': "neutral",
  'sentimentBodyPolarity': "negative",
  'notSentimentBodyPolarity': "neutral",
  'mediaImagesCountMin': 1,
  'mediaImagesCountMax': 2,
  'mediaImagesWidthMin': 640,
  'mediaImagesWidthMax': 1024,
  'mediaImagesHeightMin': 480,
  'mediaImagesHeightMax': 800,
  'mediaImagesContentLengthMin': 25412,
  'mediaImagesContentLengthMax': 369521,
  'mediaImagesFormat': ['JPEG', 'BMP', 'GIF'],
  'notMediaImagesFormat': ['TIFF', 'PNG'],
  'mediaVideosCountMin': 2,
  'mediaVideosCountMax': 2,
  'authorId': [5411],
  'notAuthorId': [65211],
  'authorName': "John Doe",
  'notAuthorName': "Mike Wali",
  'sourceId': [1422],
  'notSourceId': [51],
  'sourceName': ["BBC"],
  'notSourceName': ["Fox News"],
  'sourceDomain': ["bbc.co.uk"],
  'notSourceDomain': ["foxnews.com"],
  'sourceLocationsCountry': ["US"],
  'notSourceLocationsCountry': ["IE"],
  'sourceLocationsState': ["California"],
  'notSourceLocationsState': ["Arizona"],
  'sourceLocationsCity': ["Los Angeles"],
  'notSourceLocationsCity': ["Chandler"],
  'sourceScopesCountry': ["IE"],
  'notSourceScopesCountry': ["IT"],
  'sourceScopesState': ["Co Dublin"],
  'notSourceScopesState': ["Co Wicklow"],
  'sourceScopesCity': ["Dublin City"],
  'notSourceScopesCity': ["Cork"],
  'sourceScopesLevel': ["local"],
  'notSourceScopesLevel': ["national"],
  'sourceLinksInCountMin': 254111,
  'sourceLinksInCountMax': 352541,
  'sourceRankingsAlexaRankMin': 36,
  'sourceRankingsAlexaRankMax': 500,
  'sourceRankingsAlexaCountry': ["IE"],
  'socialSharesCountFacebookMin': 3521,
  'socialSharesCountFacebookMax': 5841,
  'socialSharesCountGooglePlusMin': 2514,
  'socialSharesCountGooglePlusMax': 36521,
  'socialSharesCountLinkedinMin': 6521,
  'socialSharesCountLinkedinMax': 36521,
  'socialSharesCountRedditMin': 14125,
  'socialSharesCountRedditMax': 95412,
  'cluster': false,
  'clusterAlgorithm': "lingo",
  '_return': ["id", "title", "body"],
  'storyId': 789,
  'storyUrl': "https://techcrunch.com/2016/04/07/aylien-launches-news-analysis-api-powered-by-its-deep-learning-tech/",
  'storyTitle': "Aylien launches news analysis API powered by its deep learning tech",
  'storyBody': "Text analysis startup Aylien, which uses deep learning ...",
  'boostBy': "recency",
  'storyLanguage': "auto",
  'perPage': 3
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
apiInstance.listRelatedStories(opts, callback);
