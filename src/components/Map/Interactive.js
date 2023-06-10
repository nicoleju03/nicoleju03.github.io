import React from 'react';
import { CRS, LatLngBounds } from 'leaflet';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import style from './Interactive.css';
import { basketball, bruincard, camera, flag_pin, football, gavel, house, magazine, microphone, money, police_siren, powell_cat, robot, royce_hall, soccer_ball, speakerphone, uaw_sign, volleyball, voting_box, wifi } from './Icons';
// import { backpack, blue_coffee_cup, db_logo, db_newspaper, dice, epic, epic_bag_2, eraser, globe, grad_cap, group_15, headphones, jersey, joe, josie, lanyard, laptop, meal_coupon, ncaa_trophy, notebook, ollie_icon, pamphlet, pen_black, pen_blue, plant_1, plant_2, plant_3, plant_4, plant_5, powell_cat_2, powell_library, sandwich, sandwich1, scooter, soccer_ball_2, squirrel } from './Icons.js';
import magnifyingGlass from './Images/magnifying-glass.png';
import background from './Images/background.png';

function MyMap() {
    const bounds = new LatLngBounds(
        [35.06, -220.50], // Southwestern coordinate (adjusted longitude)
        [35.20, -220.36] // Northeastern coordinate (adjusted longitude)
    );

    const markerPositions = [
        {
            positionX: 0.22, // X coordinate relative to the image width (0.0 to 1.0)
            positionY: 0.5, // Y coordinate relative to the image height (0.0 to 1.0)
            icon: basketball,
            popupMessage: (
                <div>
                    <h3>March Madness</h3>
                    <p>With both UCLA women's and men's basketball teams clinching their tickets to the NCAA Tournament as top seeds, the two teams showed great promise in the end-of-year tournament. However, after hard-fought battles, both teams fell in the round of 16.</p>
                    <br></br>
                    {/* Insert image from pop-up images folder */}
                    <div class="image-container">
                        <img src="https://assets3.dailybruin.com/images/march-madness-2023/ACB7-2d5a4ff528bd51557e58e25b907aa892.jpg" width="200"></img>
                        <p class="caption">(Anika Chakrabarti/Photo editor)</p>
                    </div>
                    <br></br>
                    <div class="image-container">
                        <img src="https://assets3.dailybruin.com/images/march-madness-2023/15.AD9_-d49e9f640243cd56c0376b6d0ad77031.jpg" width="200"></img>
                        <p class="caption">(Alex Driscoll/Photographer)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Read more about <a href="https://features.dailybruin.com/2023/march-madness-2023/#men" target="_blank">UCLA basketball's journey to the tournament</a>.</p>
                </div>
            ),
        },
        {
            positionX: 0.52,
            positionY: 0.53,
            icon: bruincard,
            popupMessage: (
                <div>
                    <h3>Editorial cartoon: The Swipe In</h3>
                    {/* Add image from /Pop-up Images folder */}
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2022/10/The-Swipe-In_.png" width="100%"></img>
                        <p class="caption">(Juliana Abraham/Daily Bruin)</p>
                    </div>
                    <br></br>
                </div>
            )
        },
        {
            positionX: 0.6,
            positionY: 0.7,
            icon: camera,
            popupMessage: (
                <div>
                    <h3>2023 Sundance Film Festival</h3>
                    <p>Following two years of a virtual format, the annual Sundance Film Festival returned in person once again this January.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2023/01/JMJ-01-1.jpg" width="200"></img>
                        <p class="caption">(Joseph Jimenez/Assistant Photo editor)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Look further into <a href="https://features.dailybruin.com/2023/sundance-2023/" target="_blank">this year's festival</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.31,
            positionY: 0.7,
            icon: flag_pin,
            popupMessage: (
                <div>
                    <h3>The President and Vice President visit Westwood and UCLA</h3>
                    <p>During this academic year, President Joe Biden and Vice President Kamala Harris visited and spoke in Westwood and at UCLA  respectively. Biden discussed infrastructure  improvements in Westwood and his support for union and middle-class workers, while Harris encouraged called for young voters to participate in the election.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2022/10/web.news_.bidenhere.AD_.jpg" width="200"></img>
                        <p class="caption">(Alex Driscoll/Daily Bruin staff)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2022/11/news.heykamala.ACB_.jpg" width="200"></img>
                        <p class="caption">(Anika Chakrabarti/Photo editor)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Read more about <a href="https://dailybruin.com/2022/10/13/president-joe-biden-delivers-speech-on-infrastructure-improvements-in-westwood" target="_blank">President Joe Biden's visit to Westwood</a> and <a href="https://dailybruin.com/2022/11/08/vice-president-kamala-harris-democratic-party-members-speak-at-rally-at-ucla" target="_blank">Vice President Kamala Harris's visit to UCLA</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.59,
            positionY: 0.45,
            icon: football,
            popupMessage: (
                <div>
                    <h3>UCLA men's football</h3>
                    <p>This year, UCLA's annual crosstown rivalry game with USC kept fans absorbed until the very end with a tight battle that resulted in a comeback victory for the Trojans. This, however, will not be their final matchup against one another as both programs will join the Big Ten in the 2024 season.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2022/11/rivalry.issue_.tag_.lower_.2022.jpg" width="200"></img>
                        <p class="caption">(Kimi Jung/Daily Bruin)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Read more about <a href="https://dailybruin.com/tag/rivalry-issue-2022" target="_blank">this year's battle with the Trojans</a> and <a href="https://dailybruin.com/2022/12/14/uc-board-of-regents-votes-to-allow-uclas-move-to-big-ten" target="_blank">our move to Big Ten</a>.</p>
                </div>
            )
        },
        // {
        //     positionX: 0.6,  
        //     positionY: 0.6,  
        //     icon: gavel,
        //     popupMessage: 'Gavel Marker',
        // },
        {
            positionX: 0.64,
            positionY: 0.595,
            icon: house,
            popupMessage: (
                <div>
                    <h3>Unsafe conditions in UCLA apartments</h3>
                    <p>We investigated the concerning conditions of UCLA-owned apartments in Westwood. Many UCLA students living off-campus in university-owned housing delt with unsafe living conditions under UCLA Housing management.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Dig deeper into the <a href="https://dailybruin.com/2022/12/19/straight-up-dangerous-students-in-westwood-chateau-allege-unsafe-conditions" target="_blank">investigation</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.45,
            positionY: 0.83,
            icon: magazine,
            popupMessage: (
                <div>
                    <h3>PRIME Winter Issue: Hidden Gems</h3>
                    <p>In their winter issue, PRIME uncovered some of UCLA's hidden gems.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Check out <a href="https://prime.dailybruin.com/winter23" target="_blank">PRIME's full Winter issue</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.5,
            positionY: 0.4,
            icon: microphone,
            popupMessage: (
                <div>
                    <h3>Spring Sing 2023</h3>
                    <p>The 78th Spring Sing featured 12 different acts. Performers were judged by a panel of celebrity judges including Jeremy Renner. Samahang Modern took home both the Bruin Choice Award and Best Overall Performance.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2023/05/web.ae_.springsing.wrap_.a.MC_.jpg" width="200"></img>
                        <p class="caption">(Megan Cai/Assistant Photo editor)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>View <a href="https://features.dailybruin.com/2023/spring-sing-2023/" target="_blank">a list of all acts</a> and <a href="https://dailybruin.com/2023/05/20/with-soaring-spring-sing-2023-performances-samahang-modern-sweeps-top-honors" target="_blank">more details</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.4,
            positionY: 0.4,
            icon: money,
            popupMessage: (
                <div>
                    <h3>UC Budget Changes</h3>
                    <p>Gov. Gavin Newsom's proposed budget for the 2023-2024 fiscal year in January, revealed a decrease in university funding. as well as a new policy requiring UCLA's inclusion in the Transfer Admission Guarantee program as a condition for receiving state funding, potentially leading to a major change in UCLA's transfer admissions process.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Read more about the <a href="https://dailybruin.com/2023/02/05/gov-gavin-newsoms-proposed-budget-may-impact-uc-education-quality" target="_blank">potential impacts on UC education</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.42,
            positionY: 0.72,
            icon: police_siren,
            popupMessage: (
                <div>
                    <h3>Fires at Roebling block party</h3>
                    <p>Two fires were put out on Roebling Avenue on September 29th, 2022 after several individuals lit various objects on fire during the Roebling block party. LAFD and UCPD promptly responded to this incident.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2022/09/web.news_.roeblingfires.breaking.JC_.jpg" width="200"></img>
                        <p class="caption">(Jeremy Chen/Assistant Photo editor)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Read more about the incident <a href="https://dailybruin.com/2022/09/30/lafd-ucpd-respond-to-fires-at-annual-roebling-block-party" target="_blank">here</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.3,
            positionY: 0.42,
            icon: powell_cat,
            popupMessage: (
                <div>
                    <h3>Powell Cat</h3>
                    <p>UCLA's unofficial mascot Powell Cat died on March 9. Powell cat left nearly a decadelong campus legacy since their first appearance in 2015. Many UCLA students gathered for a memorial for them in front of Powell library and on online platforms.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2023/03/web.news_.powellcat.file_.jpg" width="200"></img>
                        <p class="caption">(Daily Bruin file photo)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Read more about  <a href="https://dailybruin.com/2023/03/09/uclas-unofficial-mascot-powell-cat-dies" target="_blank">Powell Cat's death</a> and <a href="https://dailybruin.com/2023/03/19/love-personality-home-bruin-community-remembers-powell-cats-life-and-legacy" target="_blank">memorial</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.4,
            positionY: 0.5,
            icon: robot,
            popupMessage: (
                <div>
                    <h3>ChatGPT</h3>
                    <p>ChatGPT has transformed many aspects of Student life and academic practices since its November release.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2023/04/untitled-artwork.jpg" width="200"></img>
                        <p class="caption">(Editorial cartoon by Georgia Trentalange)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Read more about <a href="https://dailybruin.com/2022/10/02/students-struggle-with-poor-wi-fi-connectivity-on-campus" target="_blank">UCLA's Wi-Fi connectivity issues</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.5,
            positionY: 0.63,
            icon: royce_hall,
            popupMessage: (
                <div>
                    <h3>New Campus Acquisitions</h3>
                    <p>With growing enrollment population, UCLA announced the acquisition of two new campuses in Palos Verdes and San Pedro, enabling the university to further pursue its goal to increase enrollment by 2030.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Read more about the <a href="https://dailybruin.com/2022/09/27/ucla-to-acquire-new-sites-in-rancho-palos-verdes-san-pedro" target="_blank">acquisitions</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.54,
            positionY: 0.78,
            icon: soccer_ball,
            popupMessage: (
                <div>
                    <h3>Women’s soccer wins national championship</h3>
                    <p>After going down two goals, the UCLA women's soccer team rallied late to tie the game with 16 seconds left in the match before winning in overtime, marking their second program title.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2022/12/web.sp_.wsoc_.unc_.a.CK_.jpg" width="200"></img>
                        <p class="caption">(Christine Kao/Daily Bruin staff)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Read more about <a href="https://dailybruin.com/2022/12/05/ucla-womens-soccer-conquers-north-carolina-for-national-championship-no-120" target="_blank">UCLA women's soccer's historic national championship</a>.</p>
                </div>
            )
        },
        // {
        //     positionX: 0.45,  
        //     positionY: 0.71,  
        //     icon: speakerphone,
        //     popupMessage: (
        //         <div>
        //             <h3></h3>
        //             <p></p>
        //             {/* Insert image from pop-up images folder */}
        //             <br></br>
        //             <p style={{ fontSize: 'smaller' }}> <a href="" target="_blank"></a>.</p>
        //         </div>
        //     )
        // },
        {
            positionX: 0.3,
            positionY: 0.52,
            icon: uaw_sign,
            popupMessage: (
                <div>
                    <h3>UC academic worker strikes 2022</h3>
                    <p>Across November and December of 2022, thousands of UC academic workers went on strike, protesting for better wages and improved working conditions. The historic UC-wide strike ended with ratified UAW contracts for graduate student workers.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2022/12/uawbreaking.JC_.jpg" width="200"></img>
                        <p class="caption">(Jeremy Chen/Assistant Photo editor)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Read our <a href="https://dailybruin.com/tag/uc-academic-worker-strike-2022" target="_blank">full coverage on the UC academic worker strikes</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.37,
            positionY: 0.6,
            icon: volleyball,
            popupMessage: (
                <div>
                    <h3>Men's volleyball wins national championship</h3>
                    <p>After a closely contested battle in the first two sets, UCLA men's volleyball emerged victorious over Hawaii to claim their 20th national championship in men's volleyball.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2023/05/web.sp_.mvb_.wrap_.breaking.EFM_.a.jpg" width="200"></img>
                        <p class="caption">(Ethan Manafi/Daily Bruin staff)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Read more about <a href="https://dailybruin.com/2023/05/06/ucla-mens-volleyball-defeats-hawaii-to-take-home-2023-national-championship" target="_blank">UCLA men's volleyball's first national championship since 2006</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.24,
            positionY: 0.61,
            icon: voting_box,
            popupMessage: (
                <div>
                    <h3>2022 Midterm Elections</h3>
                    <p>Despite predictions of a strong GOP comeback, the 2022 midterm elections saw Democrats retain control of the Senate, splitting control of Congress between the two parties.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <div class="image-container">
                        <img src="https://assets3.dailybruin.com/images/national-elections/image-10-4fabe296c2a4a9f4a534d12cc162d433.png" width="200"></img>
                        <p class="caption">(Isabella Lee/Illustrations director)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Learn more about what happened during <a href="https://features.dailybruin.com/2022/national-elections-package/" target="_blank">this past election cycle</a>.</p>
                </div>
            )
        },
        {
            positionX: 0.32,
            positionY: 0.8,
            icon: wifi,
            popupMessage: (
                <div>
                    <h3>Campus Wi-Fi connectivity issues</h3>
                    <p>Students were faced with poor Wi-Fi connectivity issues across campus during fall 2022. With most of their work being dependent on Wi-Fi, students were limited in accessing their tools during lecture and other online activities.</p>
                    {/* Insert image from pop-up images folder */}
                    <br></br>
                    <div class="image-container">
                        <img src="https://wp.dailybruin.com/images/2022/10/web.news_.wifibad.ACB_.jpg" width="200"></img>
                        <p class="caption">(Anika Chakrabarti/Photo editor)</p>
                    </div>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: 'smaller' }}>Read more about <a href="https://dailybruin.com/2022/10/02/students-struggle-with-poor-wi-fi-connectivity-on-campus" target="_blank">UCLA's Wi-Fi connectivity issues</a>.</p>
                </div>
            )
        },
    ];

    const markers = markerPositions.map(({ positionX, positionY, icon, popupMessage }) => {
        const markerLatitude = bounds.getSouth() + positionY * (bounds.getNorth() - bounds.getSouth());
        const markerLongitude = bounds.getWest() + positionX * (bounds.getEast() - bounds.getWest());
        const markerPosition = [markerLatitude, markerLongitude];

        return (
            <Marker position={markerPosition} icon={icon}>
                <Popup position={markerPosition}>{popupMessage}</Popup>
            </Marker>)
    });

    const backgroundBounds = new LatLngBounds(
        [35.04, -220.63], // Southwestern coordinate (adjusted longitude)
        [35.21, -220.24] // Northeastern coordinate (adjusted longitude)
    );

    return (
        <div id="map-container" style={{ height: '600px', width: '100%' }}>
            <MapContainer
                crs={CRS.Simple}
                bounds={bounds}
                style={{ height: '100%', width: '100%' }}
                container="map-container"
                scrollWheelZoom={false}
                zoomControl={true}
                dragging={false}
            >
                <ImageOverlay url={background} bounds={backgroundBounds} />
                <ImageOverlay url={magnifyingGlass} bounds={bounds} />
                {markers}
            </MapContainer>
        </div>
    );
}

export default MyMap;
