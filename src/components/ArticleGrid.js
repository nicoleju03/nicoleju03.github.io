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
            (click each box to read more)<br></br><br></br>
            {props.articles.length > 1 &&
            <div>
            <Grid>
                <ArticleCard
                    article_title="With a team, I created a review service for UCLA's dining halls. Users can submit reviews (which include photos, descriptions, and star ratings), view and upvote other people's reviews, and access a dashboard of their past reviews. I mainly worked on the review form and allowing users to write data to a backend database (we used Firebase), as well as displaying data from the backend to various pages on the site."
                    article_byline="BruinYelp"
                    color = "white"
                    article_image="https://portal.housing.ucla.edu/sites/default/files/media/images/Bruin%20Plate_happenings.png"
                    article_url="https://github.com/andyz2021/BruinYelp"
                />
                <ArticleCard
                    article_title="I constructed a complex Battleship game with an interactive feature that allows users to play, as well as a computerized version. I utilized data structures to store and update game objects. I also designed a high-level computer player with strategies to maximize its win rate."
                    article_byline="Battleship"
                    color = "white"
                    article_image="https://render.fineartamerica.com/images/rendered/default/greeting-card/images-medium-5/world-war-two-battleship-cartoon-aloysius-patrimonio.jpg?&targetx=0&targety=-100&imagewidth=700&imageheight=700&modelwidth=700&modelheight=500&backgroundcolor=FCFDFC&orientation=0"
                    article_url="https://github.com/nicoleju03/Battleship-CS32-Project-3-"
                />
                <ArticleCard
                    article_title="My team and I used R and Python to investigate various factors that contribute to a country's happiness, such as political leaders and Covid-19 deaths. We performed linear regression and statistical tests to study the correlation between such factors and happiness scores. We posted our findings and visualizations on Medium."
                    article_byline="World Happiness"
                    color = "white"
                    article_image="https://ggsc.s3.amazonaws.com/images/uploads/World_Happiness_Report_Finds_That_Crises_Make_Us_Kinder.jpg"
                    article_url="https://ucladatares.medium.com/effects-of-covid-19-on-the-world-happiness-report-f5dcca9c1012"
                />
                <ArticleCard
                    article_title="I completed this project as part of DataBlog, a branch of UCLA's data science club, DataRes. My team and I used R and Python to analyze the factors that contribute to Bobby Flay's success on his cooking show, as well as create visualizations of our data. We published our findings on Medium."
                    article_byline="The Secret to Beating Bobby Flay"
                    color = "white"
                    article_image="https://www.longislandpress.com/wp-content/uploads/2019/10/81KJRcaM-CL._RI_-e1570474601182.jpg"
                    article_url="https://ucladatares.medium.com/the-secret-to-beating-bobby-flay-aae2d90fdd52"
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
