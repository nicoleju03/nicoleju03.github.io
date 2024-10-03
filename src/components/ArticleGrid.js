import styled from 'styled-components';
import { mediaQueries } from '../shared/config';
import ArticleCard from "./ArticleCard";

const OuterContainer = styled.div`
    max-width: 100vw;
    position: relative;
    margin-top: 1em;
    font-family: Bacasime Antique;
    font-size: 20px;
    /* margin-bottom: 5em; */
`;

const Grid = styled.div`
    max-width: 80%;
    height: fit-content;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-auto-rows: 30em;     */
    row-gap: 6em;
    column-gap: 5em;

    ${mediaQueries.mobile} {
        display: flex;
        width: 70%;
        flex-direction: column;
        justify-items: center;
        row-gap: 3em;
    }
`

const GridOne = styled.div`
    max-width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1 fr 1 fr;
    grid-auto-rows: 30em;    
    row-gap: 4em;
    column-gap: 4em;
    ${mediaQueries.mobile} {
        grid-template-columns: 1fr;
    }
`

const Image = styled.img`
height: 30%;
width: 30%;
display:inline-block;  
object-fit: scale-down;
padding-top: 7%;
padding-bottom:5%;
`;

export default function ArticleGrid(props){
    console.log(props.articles)
    return(
        <OuterContainer>
            (click each box to learn more)<br></br><br></br>
            {props.articles.length > 1 &&
            <div>
            <Grid>
                <ArticleCard
                    article_title="I worked with a team of ~12 developers and designers on a year-long project for IDONTMIND, 
                    a nonprofit organization dedicated to spreading mental health awareness and resources. We used React Native, 
                    MongoDB, and Express to build a mobile application with resources like mental health articles, an in-app journal, 
                    and daily checkins. One of my largest tasks was implementing content bookmarking and folder organization via controller 
                    functions that interacted with the database. I integrated such functionality with the frontend, allowing users to 
                    save and organize wellness resources."
                    article_byline="IDONTMIND"
                    color = "white"
                    article_image="https://aliviohealth.com/wp-content/uploads/2022/07/Managing-Mental-Health-During-COVID-19.jpg"
                    article_url="https://github.com/lablueprint/idontmind/"
                />
                <ArticleCard
                    article_title="I use Python and natural language processing to identify discrepancies in medication lists and display results to a web app. My team utilizes ANTLR to parse prescriptions based on defined lexer/parser rules and extract elements for comparison (dosage, etc.). In a recent project, I flagged manually matched medications by inspecting an HTTP response and rendering a POST request with altered entries."
                    article_byline="Medication Reconciliation"
                    color = "white"
                    article_image="https://images.squarespace-cdn.com/content/v1/65c3bc3c5f3c855311eba919/1707439017532-89FWNTT8QOV6SX81N5E0/iStock-1211161734.jpg"
                    article_url="https://github.com/med-rec-at-ucla/mr-grammars?tab=readme-ov-file"
                />
                <ArticleCard
                    article_title="I used Pandas and NumPy to preprocess Goodreads data and build a search engine for users to compile a list of liked books. In particular, I employed scikit-learn’s TfidfVectorizer and cosine similarity to determine book titles that matched the user query. Then, based on the user's liked books, I filtered out other users with similar preferences and recommended books that those user's rated highly."
                    article_byline="ML Book Recommendation System"
                    color = "white"
                    article_image="https://miro.medium.com/v2/resize:fit:460/1*veqSWuqvOJ5QxzFwd2lCXw.jpeg"
                    article_url="https://github.com/nicoleju03/book_recs"
                />
                <ArticleCard
                    article_title="With a team, I created a review service for UCLA's dining halls. Users can submit reviews (which include photos, descriptions, and star ratings), view and upvote other people's reviews, and access a dashboard of their past reviews. I mainly worked on the review form and allowing users to write data to a backend database (we used Firebase), as well as displaying data from the backend to various pages on the site."
                    article_byline="BruinYelp"
                    color = "white"
                    article_image="https://portal.housing.ucla.edu/sites/default/files/media/images/Bruin%20Plate_happenings.png"
                    article_url="https://github.com/andyz2021/BruinYelp"
                />
                <ArticleCard
                    article_title="My team and I used R and Python to investigate various factors that contribute to a country's happiness, such as political leaders and Covid-19 deaths. We performed linear regression and statistical tests to study the correlation between such factors and happiness scores. We posted our findings and visualizations on Medium."
                    article_byline="World Happiness"
                    color = "white"
                    article_image="https://memorialswordandshield.com/wp-content/uploads/2022/08/960x0.jpg"
                    article_url="https://ucladatares.medium.com/effects-of-covid-19-on-the-world-happiness-report-f5dcca9c1012"
                />
            </Grid>
            </div>
            }
            {props.articles.length <= 1 &&
            <Grid>
                <ArticleCard article_title="blank"/>
                <ArticleCard article_title={props.articles[0].article_title}
                            article_byline={props.articles[0].article_byline}
                            color = {props.articles[0].color}
                            article_image={props.articles[0].article_image}
                            article_url={props.articles[0].article_url}/>
            </Grid>
            }
        </OuterContainer>

    )
}
