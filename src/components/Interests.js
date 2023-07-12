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
    grid-template-columns: 1fr 1fr 1fr;
    /* grid-auto-rows: 30em;     */
    row-gap: 6em;
    column-gap: 2em;

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

export default function Interests(props){
    return(
        <OuterContainer>
            {props.articles.length > 1 &&
            <div>
            <Grid>
                <ArticleCard
                    article_title="This is my dog, Addie. I love taking her on our weekly family hikes. 
                    She enjoys peaches, squirrel chasing, and tummy rubs :)"
                    article_byline="Addie"
                    color = "white"
                    article_image="../addie.png"
                />
                <ArticleCard
                    article_title="I have played competitive badminton for 12 years, and it has become a very important part of my life.
                    This summer, I am excited to compete in US Open and the World University Games in Chengdu, China."
                    article_byline="Badminton"
                    color = "white"
                    article_image="../baddy.png"
                />
                <ArticleCard
                    article_title="I love traveling with family and friends and trying new things. My favorite places I've been too
                    are Machu Picchu, Hawaii, and Brazil. But riding camels in Cabo was very unforgettable!"
                    article_byline="Traveling"
                    color = "white"
                    article_image="../camel.png"
                />
                <ArticleCard
                    article_title="I love trying new foods/drinks around LA and the Bay Area. Matcha is my favorite drink,
                    so I'm on the hunt for the best matcha spots. I hope to visit Japan one day to try both their matcha and sushi."
                    article_byline="Food Adventures"
                    color = "white"
                    article_image="../matcha.png"
                />
                <ArticleCard
                    article_title="I have a collection of around 40 enamel pins. I try to collect fun pins from new places that I go to;
                    these minion pins are from Universal Studios, and I also have a flower pin from the Met in NYC."
                    article_byline="Enamel Pins"
                    color = "white"
                    article_image="../pins.png"
                />
                <ArticleCard
                    article_title="Sunsets never fail to mesmerize me; my dad and I love watching sunsets from beaches or mountaintops.
                    This particular sunset is from the top of Crater Lake in Oregon."
                    article_byline="Sunsets"
                    color = "white"
                    article_image="../sun.png"
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
