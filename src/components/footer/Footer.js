import { Container, Row } from "../GlobalStyle";
import * as F from "./style";
import "./footer.scss";
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <>
            <F.Footer id="footer-top">
                <Container>
                    <Row>
                        <F.Column>
                            <h2>Quick Link</h2>
                            <ul>
                                <li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>
                                <li>item 4</li>
                                <li>item 5</li>
                            </ul>
                        </F.Column>
                        <F.Column>
                            <h2>Opening Hours</h2>
                            <ul>
                                <li>Monday: 6am – 8pm</li>
                                <li>Tuesday: 6am – 8pm</li>
                                <li>Wednesday: 6am – 8pm</li>
                                <li>Thursday: 6am – 8pm</li>
                                <li>Friday: 6am – 8pm</li>
                                <li>Saturday: 7am – 2pm</li>
                                <li>Sunday: Appt Only</li>
                            </ul>
                        </F.Column>
                        <F.Column>
                            <h2>Address 1</h2>
                            <ul>
                                <li>East Fremantle Clinic</li>
                                <li>Inside the Fremantle Rowing Club</li>
                                <li>75 Riverside Rd</li>
                                <li>East Fremantle 6158</li>
                            </ul>
                        </F.Column>
                        <F.Column>
                            <h2>Address 2</h2>
                            <ul>
                                <li>East Fremantle Clinic</li>
                                <li>Inside the Fremantle Rowing Club</li>
                                <li>75 Riverside Rd</li>
                                <li>East Fremantle 6158</li>
                            </ul>
                        </F.Column>
                    </Row>
                </Container>
            </F.Footer>
            <F.Footer dark id="footer-bottom">
                <Container flexbox>
                    <h2>Follow Us on</h2>
                    <div className="socialMedia">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faFacebook } /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faInstagram } /></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faTwitter } /></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faYoutube } /></a>
                    </div>
                </Container>
            </F.Footer>
        </>
    );
}

export default Footer;