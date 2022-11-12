import App from "../App";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row } from "../components/GlobalStyle";
import "./home.scss";
function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        <div className="image-wrapper">
          <div className="textbox">
            <h2>Title 1</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <img src="/image_18_to_6.png" alt="slide 1"></img>
        </div>
        <div className="image-wrapper">
          <div className="textbox">
            <h2>Title 2</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <img src="/image_18_to_6.png" alt="slide 1"></img>
        </div>
        <div className="image-wrapper">
          <div className="textbox">
            <h2>Title 3</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <img src="/image_18_to_6.png" alt="slide 1"></img>
        </div>
      </Slider>
      <Container className="promo-section">
        <h2>Top Rated Local Physio Clinic in Booragoon & East Fremantle</h2>
        <div className="content">
          <p>Move Physiotherapy has an experienced physiotherapy and remedial massage team. We provide a premium yet affordable service to residents surrounding Booragoon and East Fremantle.</p>
          <p>For immediate pain relief, we provide professional, hands-on treatment including manipulative physiotherapy, remedial massage, sports physiotherapy and dry needling.</p>
          <p>We provide comprehensive assessments of your movement, with longer appointment times to truly assess areas of muscle tightness. We combine state of the art technology such as force platforms and dynamometers to objectively measure deficits in muscle strength and have a full rehab gym to take you through exercises to ensure you remain pain free.</p>
          <p>Our team can get you back to the activities you love in a timely and efficient manner, and empower you to ensure these injuries do not reoccur. </p>
        </div>
        <div className="video_wrapper">
          <iframe src="https://www.youtube.com/embed/pZxkV1nI1Bk" title="promo video"></iframe>
        </div>
      </Container>
      <div className="promo_-ection2">
        <Container>
          <div className="content">
            <h2>Why You Should Choose Us:</h2>
            <ul>
              <li>Discounted Standard and Extended Initial Appointments – Get a Good Understanding of Your Pain!</li>
              <li>Longer 30 minute follow up consultations</li>
              <li>Experienced Physiotherapy and Remedial Massage team</li>
              <li>Understand the root cause of your aches and pains</li>
              <li>Targeted rehabilitation of your injuries utilising our fully equipped gym setting</li>
              <li>Bulk Billing for DVA Patients (White and Gold Card)</li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="our-services-title">
        <Container>
          <h2>Our Services</h2>
        </Container>
      </div>
      <div className="our-services-content">
        <Container>
          <div className="services">
            <img src="../General_Physiotherapy.png" alt="General Physiotherapy"></img>
          </div>
        </Container>
      </div>
      <App />
    </>
  );
}

export default Home;