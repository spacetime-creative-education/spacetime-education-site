import React from 'react';
import { Helmet } from 'react-helmet';
import { Favicon } from 'react-favicon';

class StMetaTags extends React.Component {
  render() {
    return (
        <Helmet>
            {/*Made using http://www.favicon-generator.org/ */}
            <title>Spacetime Education</title>
            <meta charset="utf-8"></meta>
            <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
            <link rel="apple-touch-icon" sizes="57x57" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192"  href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/favicon-16x16.png"/>
            <link rel="manifest" href="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/manifest.json" />
            <meta name="msapplication-TileColor" content="#00e965" />
            <meta name="msapplication-TileImage" content="https://s3.ap-south-1.amazonaws.com/spacetime-education/favicons/ms-icon-144x144.png" />
            <meta name="theme-color" content="#00e965" />
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.37.0/mapbox-gl.css' rel='stylesheet' />
            <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
            {/* Google SEO */}
            <meta name="description" content="Learn Python in a fun way in #NammaChennai. Along with Mastering the language, learn professional skills like Version control, Testing, Code Coverage and Test drived development. This classroom course is 3 months long, during which a student gets a good load of programming stimulus and should feel more comfortable thinking in code."/>
            <meta name="google" content="nositelinkssearchbox" />
            {/* Facebook sharing */}
            <meta property="og:url"                content="https://spacetime.education" />
            <meta property="og:type"               content="website" />
            <meta property="og:title"              content="Spacetime Education" />
            <meta property="og:description"        content="The place to learn Python Programming in #NammaChennai" />
            <meta property="og:locale"             content="en_IN" />
            {/* <meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" /> */}
            {/* Make the value "index" and "follow" for production. No need for a staging site to be indexed */}
            <meta name="robots" content="noindex, nofollow" />
        </Helmet>
      )
  }
}

export default StMetaTags;
