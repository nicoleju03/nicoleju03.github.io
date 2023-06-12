import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


function getBackgroundColor(color){
    if(color=="yellow") return "FFD100";
    else return "0080C6";

}

function getTextColor(color){
    if(color=="yellow") return "013B5A";
    else return "FFFFFF";

}

export default function ArticleGrid(props){
    const OuterContainer = styled.div`
        position: relative;
        width: 100%;
        height: 100%;
        margin: auto;
        background-color: #${getBackgroundColor(props.color)};
        color: #${getTextColor(props.color)};
        padding: 1em;
        border: 1px solid #013B5A;
        box-sizing: border-box;

        a {
            text-decoration: none;
        }
    `;


    const Image = styled.img`
        height: 60%;
        width: 100%;
        display: block;
        object-fit: contain;
        border-bottom: .1em solid #013B5A;
    `;


    const ByLine = styled.p`
        display: block;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        padding-left: .5em;
        padding-right: .5em;
        color: #${getTextColor(props.color)};
        font-family: 'Roboto Mono';
        text-transform: uppercase;
        ${mediaQueries.mobile} {
            font-size: 12px;
        }

      `;

    const Title = styled.a`
        display: block;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        padding: 1.5em;
        color: #${getTextColor(props.color)};
        border-top: .1em solid #013B5A;
        font-family: 'Roboto Mono';
        ${mediaQueries.mobile} {
            font-size: 12px;
        }
    `;


    return(
        <div>
            {props.article_title != 'blank' &&
                <OuterContainer>
                    <a href={props.article_url}>
                        <Image src={props.article_image}></Image>
                    </a>
                    <ByLine> BY {props.article_byline} </ByLine>
                    <a href={props.article_url}>
                        <Title> {props.article_title} </Title>
                    </a>
                </OuterContainer>
            }
        </div>
        


    )
}