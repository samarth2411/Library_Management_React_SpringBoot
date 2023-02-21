package com.example.libraryapp.config;
import com.example.libraryapp.entity.Book;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
    private String theAllowedOrigins = "https://localhost:8080";
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config , CorsRegistry cors){

        HttpMethod[] theUnsupportedActions = {
                HttpMethod.DELETE,
                HttpMethod.PATCH,
                HttpMethod.PUT,
                HttpMethod.POST
        };

        config.exposeIdsFor(Book.class);
        disableHttpMethods(Book.class,config,theUnsupportedActions);

        // Configure CORS Mapping

        cors.addMapping(config.getBasePath()+ "/**").allowedOrigins(theAllowedOrigins);

    }

    private void disableHttpMethods(Class theClass , RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions){
            config.getExposureConfiguration().forDomainType(theClass).withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                    .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
    }
}