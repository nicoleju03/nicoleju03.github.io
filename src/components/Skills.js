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

export default function Skills(props){
    const OuterContainer = styled.div`
        position: relative;
        width: 100%;
        height: fit-content;
        min-height: 90%;
        margin: auto;
        background-color: #E1EBEE;
        color: #013b5a;
        padding: 1em;
        box-sizing: border-box;

        a {
            text-decoration: none;
        }
    `;


    const Image = styled.img`
        height: 60%;
        width: 60%;
        margin: auto;
        display: block;
        object-fit: scale-down;
        border-radius: 50%;
    `;


    const ByLine = styled.p`
        display: block;
        font-size: 30px;
        font-weight: 400;
        text-align: center;
        padding-left: .5em;
        padding-right: .5em;
        color: #013b5a;
        font-family: Bacasime Antique;
        ${mediaQueries.mobile} {
            font-size: 20px;
        }
      `;

    const Title = styled.a`
        display: block;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        color: #013b5a;
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
                    <ByLine> {props.article_byline} </ByLine>
                    <a href={props.article_url}>
                        <Title> {props.article_title} </Title>
                    </a>
                </OuterContainer>
            }
        </div>

    )
}