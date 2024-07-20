import styled from 'styled-components';
import { mediaQueries } from '../shared/config';
import Skills from "./Skills";

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
    height: 20%;
    width: 20%;
    display:inline-block;  
    object-fit: scale-down;
    padding-top: 7%;
    padding-bottom:5%;
`;

export default function ArticleGrid(props){
    console.log(props.articles)
    return(
        <OuterContainer>
            {props.articles.length > 1 &&
            <div>
            <Grid>
                <Skills
                    article_title="Advanced"
                    article_byline="C++"
                    color = "white"
                    article_image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"
                />
                <Skills
                    article_title="Advanced"
                    article_byline="Python"
                    color = "white"
                    article_image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png"
                />
                <Skills
                    article_title="Advanced"
                    article_byline="Java"
                    color = "white"
                    article_image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/0a/8cd7f1b14344618b75142593bc7af8/JavaCupLogo800x800.png?auto=format%2Ccompress&dpr=1"
                />
                <Skills
                    article_title="Advanced"
                    article_byline="JavaScript & React.js"
                    color = "white"
                    article_image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                />
                <Skills
                    article_title="Advanced"
                    article_byline="Ruby on Rails"
                    color = "white"
                    article_image="https://yt3.googleusercontent.com/KUq46Xaf58rAGQQimOUshgpW8ksk-W3gtJ1XoOeIfgKHITBTea9qNKGXfaPt8SlEPZT93zw0Vq4=s900-c-k-c0x00ffffff-no-rj"
                />
                <Skills
                    article_title="Advanced"
                    article_byline="Bash"
                    color = "white"
                    article_image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/2048px-Bash_Logo_Colored.svg.png"
                />
                <Skills
                    article_title="Advanced"
                    article_byline="C"
                    color = "white"
                    article_image="https://www.seekpng.com/png/detail/429-4296796_we-are-passionate-technologists-c-language-logo-png.png"
                />
                <Skills
                    article_title="Advanced"
                    article_byline="Git"
                    color = "white"
                    article_image="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                />
                <Skills
                    article_title="Proficient"
                    article_byline="HTML"
                    color = "white"
                    article_image="https://cdn-icons-png.flaticon.com/512/524/524545.png"
                />
                <Skills
                    article_title="Proficient"
                    article_byline="CSS"
                    color = "white"
                    article_image="https://img.freepik.com/free-icon/css_318-698167.jpg"
                />
                <Skills
                    article_title="Proficient"
                    article_byline="Django"
                    color = "white"
                    article_image="https://gitlab.com/uploads/-/system/project/avatar/31295677/pngwing.com__1_.png"
                />
                <Skills
                    article_title="Intermediate"
                    article_byline="ANTLR"
                    color = "white"
                    article_image="https://goatreview.com/content/images/2022/06/images--1-.png"
                />


            </Grid>
            </div>
            }
            {props.articles.length <= 1 &&
            <Grid>
                <Skills article_title="blank"/>
                <Skills article_title={props.articles[0].article_title}
                            article_byline={props.articles[0].article_byline}
                            color = {props.articles[0].color}
                            article_image={props.articles[0].article_image}
                            article_url={props.articles[0].article_url}/>
            </Grid>
            }
        </OuterContainer>

    )
}