import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Images
import mac from "../../assets/images/mac.png";
import watch1 from "../../assets/images/watch-1.png";
import FeatureBox from '../common/feature-box';

class Features extends Component {
    render() {
        return (
            <React.Fragment>
    <section className={this.props.isBgWhite === true ? "section" : "section bg-lightgray"} id="features">
        <Container>
            <Row>
                <Col sm="12">
                    <div className="title-box text-center">
                        <h2>Awesome New Feature</h2>
                    </div>
                </Col>
            </Row>
            

            <Row className="vertical-content features">
                <Col sm="5">
                    <FeatureBox
                        number="1"
                        title="Virtual reality (VR) and Augmented reality (AR) "
                        desc1="Virtual reality (VR) and Augmented reality (AR)  are immersive digital technologies 
                        that creates a completely virtual environment with the use of a headset device"
                        // desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />
                </Col>
                

                <Col sm={{size:6, offset : 1}}>
                    <img src={mac} className="img-fluid" alt="img"/>
                </Col>
                
            </Row>
            

            <Row className="vertical-content features">
                <Col sm="4">
                    <img src={watch1} className="img-fluid" alt="img"/>
                </Col>
                <Col sm={{size:6, offset : 1}}>

                    <FeatureBox
                        number="2"
                        title=" Interactive Panels  "
                        desc1=" They  are typically designed to be easy to use, intuitive, and visually appealing,It  is a technology-based solution that provide a self-service option to their customers." 
                        // desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />

                </Col>
                

            </Row>


            
            <Row className="vertical-content features">
                <Col sm="5">
                    <FeatureBox
                        number="3"
                        title="  High-quality images and videos"
                        desc1="High-quality images and videos  refers to visual content that is produced at a high resolution  with superior image and video quality.  "
                        
                        // desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />
                </Col>
                

                <Col sm={{size:6, offset : 1}}>
                    <img src={mac} className="img-fluid" alt="img"/>
                </Col>
                
            </Row>


            
            <Row className="vertical-content features">
                <Col sm="4">
                    <img src={watch1} className="img-fluid" alt="img"/>
                </Col>
                <Col sm={{size:6, offset : 1}}>

                    <FeatureBox
                        number="4"
                        title="  Mobile QR code Scanner "
                        desc1= "It is an innovative technology involves the use of a QR code, which is a two-dimensional barcode that can be scanned using a smartphone camera."
                        // desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />

                </Col>
                

            </Row>

        </Container>
        
    </section>
            </React.Fragment>
        );
    }
}

export default Features;