import aylien_news_api
from aylien_news_api.rest import ApiException

# Configure API key authorization: app_id
aylien_news_api.configuration.api_key['X-AYLIEN-NewsAPI-Application-ID'] = '{{current_app_id}}'
# Configure API key authorization: app_key
aylien_news_api.configuration.api_key['X-AYLIEN-NewsAPI-Application-Key'] = '{{current_app_key}}'

# create an instance of the API class
api_instance = aylien_news_api.DefaultApi()

opts = {
  'categories_taxonomy': 'iab-qag',
  'categories_id': ['IAB15'],
  'language': ['en'],
  'published_at_start': 'NOW-1DAY',
  'published_at_end': 'NOW'
}

try:
    # List stories
    api_response = api_instance.list_stories(**opts)
    print('The API has been called successfully.')
    print('=====================================')
    for story in api_response.stories:
      print(story.title + " / " + story.source.name)
except ApiException as e:
    print("Exception when calling DefaultApi->list_stories: %s\n" % e)
