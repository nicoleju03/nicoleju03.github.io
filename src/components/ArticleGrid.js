import styled from 'styled-components';
import { mediaQueries } from '../shared/config';
import ArticleCard from "./ArticleCard";

const OuterContainer = styled.div`
    max-width: 100vw;
    position: relative;
    margin-top: 1em;
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

export default function ArticleGrid(props){
    console.log(props.articles)
    return(
        <OuterContainer>
            {props.articles.length > 1 &&
            <Grid>
                {props && props.articles
                    ? props.articles.map((item) => {
                        return (
                            <ArticleCard
                            article_title={item.article_title}
                            article_byline={item.article_byline}
                            color = {item.color}
                            article_image={item.article_image}
                            article_url={item.article_url}
                        />
                        );
                    })
                : null}
            </Grid>
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
