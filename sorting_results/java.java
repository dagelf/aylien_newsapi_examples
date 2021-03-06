import com.aylien.newsapi.*;
import com.aylien.newsapi.auth.*;
import com.aylien.newsapi.models.*;
import com.aylien.newsapi.parameters.*;
import com.aylien.newsapi.api.DefaultApi;

import java.util.*;

public class Main {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure API key authorization: app_id
        ApiKeyAuth app_id = (ApiKeyAuth) defaultClient.getAuthentication("app_id");
        app_id.setApiKey("{{current_app_id}}");

        // Configure API key authorization: app_key
        ApiKeyAuth app_key = (ApiKeyAuth) defaultClient.getAuthentication("app_key");
        app_key.setApiKey("{{current_app_key}}");

        DefaultApi apiInstance = new DefaultApi();

        StoriesParams.Builder storiesBuilder = StoriesParams.newBuilder();

        storiesBuilder.setSortBy("source.rankings.alexa.rank.US");
        storiesBuilder.setLanguage(Arrays.asList("en"));
        storiesBuilder.setPublishedAtStart("NOW-1MONTH");
        storiesBuilder.setPublishedAtEnd("NOW");
        storiesBuilder.setEntitiesBodyLinksDbpedia(Arrays.asList(
                "http://dbpedia.org/resource/Baseball"
        ));
        storiesBuilder.setCategoriesTaxonomy("iab-qag");
        storiesBuilder.setCategoriesId(Arrays.asList("IAB17"));

        try {
            Stories result = apiInstance.listStories(storiesBuilder.build());
            for (Iterator<Story> i = result.getStories().iterator(); i.hasNext();){
                Story story = i.next();
                System.out.println(story.getTitle() + " / " + story.getSource().getName());
            }
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#listStories");
            e.printStackTrace();
        }
    }
}
