import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Recruit() {
  const [leftFocus, setLeftFocus] = React.useState(false);
  const [rightFocus, setRightFocus] = React.useState(false);
  // React.useEffect(() => {
  //   if (
  //     !document
  //       .getElementById("sliderRegular")
  //       .classList.contains("noUi-target")
  //   ) {
  //     Slider.create(document.getElementById("sliderRegular"), {
  //       start: [50],
  //       connect: [true, false],
  //       step: 0.5,
  //       range: { min: 0, max: 100 },
  //     });
  //   }
  //   if (
  //     !document.getElementById("sliderDouble").classList.contains("noUi-target")
  //   ) {
  //     Slider.create(document.getElementById("sliderDouble"), {
  //       start: [20, 80],
  //       connect: [false, true, false],
  //       step: 1,
  //       range: { min: 0, max: 100 },
  //     });
  //   }
  // });
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <h3 className="title">2023 SPRING RECRUITMENT</h3>
          <h5>2023년 1학기 신입회원 모집(02.06 - 02.28)</h5>
          
          <p className="category">Go High, or Go Home <br></br>최고를 향해 함께 성장합니다</p>
          <Button color="info" type="button">
            <h5>1. 지원서 구글 양식으로 제출</h5><br></br>
            제출기한: ~ 02.28(화) 23:59<br></br>
            제출서류: 지원서, 자기소개서<br></br>
            <br></br>
            ※제출기한 엄수<br></br>
          </Button>
          <Button color="info" type="button">
            <h5>2. 자기소개서, 전공지식 기반 면접</h5><br></br>
            면접일정: 03.01(수) ~ 03.03(금) (Zoom으로 진행)<br></br>
            상세 면접일정 개별통보<br></br>
            <br></br>
            전공지식 : 금융, 경제, 수학(통계), 코딩 中 자기소개서 내용에 따라<br></br>
          </Button>
          <Button color="info" type="button">
              <h5>3. 면접 결과 개별 통보</h5><br></br>
              결과 발표: 03.06(월)<br></br>
              <br></br>
              ※결과 발표 일정은 조정될 수 있습니다<br></br>
              <br></br>
          </Button>
          
          <Row>
            <Col md="10">
              <Button color="primary" type="button" href="https://forms.gle/FeWkPcfAiYaTJEb39">
                Applying for Recruitment <i className="nc-icon nc-minimal-right" />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Recruit;
