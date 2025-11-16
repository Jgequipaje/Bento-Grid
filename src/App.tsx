import styled from "styled-components";

const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  @media (max-width: 768px) {
    padding: 15px;
    overflow-y: scroll;
    height: auto;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(160px, 160px));
  grid-template-rows: auto auto 1fr auto;

  grid-template-areas:
    "A B B C"
    "A E F C"
    "D E F C"
    "D G H H";
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "B"
      "E"
      "F"
      "C"
      "H"
      "G"
      "A"
      "D";
  }
`;

const StyledGrid1 = styled.div`
  grid-area: A;
  background-color: hsl(31, 66%, 93%);
  padding: 55px 20px;

  @media (max-width: 768px) {
    padding: 24px 30px;
  }
`;

const StyledGrid2 = styled.div`
  grid-area: B;
  background-color: hsl(256, 67%, 59%);
  padding: 50px 20px;
  height: min-content;
`;

const StyledGrid3 = styled.div`
  grid-area: C;
  background-color: hsl(254, 88%, 90%);
  padding: 30px 20px;
`;

const StyledGrid4 = styled.div`
  position: relative;
  grid-area: D;
  background-color: hsl(39, 100%, 71%);
  padding: 20px 15px;

  @media (max-width: 768px) {
    margin-bottom: 100px;
    height: 360px;
    padding: 20px;
  }
`;

const StyledGrid5 = styled.div`
  grid-area: E;
  background-color: hsl(0, 0%, 100%);
  padding: 15px;
`;

const StyledGrid6 = styled.div`
  position: relative;
  grid-area: F;
  background-color: hsl(39, 100%, 71%);
  padding: 15px;

  @media (max-width: 769px) {
    height: 220px;
  }
`;

const StyledGrid7 = styled.div`
  grid-area: G;
  background-color: hsl(0, 0%, 100%);
  padding: 15px;
  @media (max-width: 769px) {
    padding: 20px;
  }
`;

const StyledGrid8 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  grid-area: H;
  background-color: hsl(256, 67%, 59%);
  padding: 0 15px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const StyledImage1 = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const StyledImage2 = styled.img`
  width: 35%;
  height: auto;
  margin: 15px 0 5px;

  @media (max-width: 768px) {
    width: 68%;
  }
`;

const StyledImage3 = styled.img`
  width: 250px;
  height: auto;
  margin: 15px 0 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledImage4 = styled.img`
  position: absolute;
  width: 130px;
  height: auto;
  transform: translate(-50%, -50%);
  top: 70%;
  left: 50%;

  @media (max-width: 768px) {
    transform: translate(-50%, -36%);
    width: 230px;
    top: 52%;
    left: 40%;
  }
`;

const StyledImage5 = styled.img`
  width: 200px;
  height: auto;
  margin: 0 0 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledImage6 = styled.img`
  position: absolute;
  width: 130px;
  height: auto;
  margin-top: 10px;
  transform: translate(-50%, -50%);
  top: 90%;
  left: 50%;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 220px;
    margin-top: 0;
    top: 75%;
    left: 36%;
  }
`;

const StyledImage7 = styled.img`
  width: 90%;
  height: auto;
  margin: 0 0 5px;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const StyledImage8 = styled.img`
  width: 150px;
  height: auto;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const StyledContent1 = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const StyledContent2 = styled.p`
  font-size: 36px;
  font-weight: 500;
  line-height: 1;
  color: #fff;
  text-align: center;
  letter-spacing: 0.1px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const StyledContent3 = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: #000;
  letter-spacing: -1px;
  @media (max-width: 768px) {
    font-size: 26px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const StyledContent5 = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const StyledContent6 = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 0.9;
  }
`;

const StyledContent7 = styled.p`
  font-size: 42px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.2px;
  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 0.9;
  }
`;

const StyledContent8 = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.75px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 30px;
    text-align: center;
    margin: 20px 30px 0;
  }
`;

const StyledContent3Description = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.1;
  color: #000;
  letter-spacing: -0.8px;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 19px;
    text-align: center;
    padding: 5px 15px;
  }
`;

const StyledContent7Description = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.1;
  color: #000;
  letter-spacing: -0.8px;
  margin: 10px 0 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledEm = styled.em`
  color: #fff;
`;

const StyledSmall = styled.small`
  font-size: 12px;
  font-weight: 200;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledFlexItemsColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledDisclaimer = styled.p`
  position: fixed;
  bottom: 0%;
  background-color: hsl(256, 67%, 59%);
  padding: 10px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 16px;
  letter-spacing: normal;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

function App() {
  return (
    <StyledMain>
      <StyledGrid>
        <StyledGrid1 className="grid">
          <StyledContent1>
            Create and schedule content <em>quicker.</em>
          </StyledContent1>
          <StyledImage1 src="src/assets/images/illustration-create-post.webp" />
        </StyledGrid1>
        <StyledGrid2 className="grid">
          <StyledFlexItemsColumn>
            <StyledContent2>
              Social Media <span>10x</span> <StyledEm>Faster</StyledEm> with AI
            </StyledContent2>
            <StyledImage2 src="src/assets/images/illustration-five-stars.webp" />
            <StyledSmall>Over 4,000 5-star reviews</StyledSmall>
          </StyledFlexItemsColumn>
        </StyledGrid2>
        <StyledGrid3 className="grid">
          <StyledContent3>Schedule to social media.</StyledContent3>
          <StyledImage3 src="src/assets/images/illustration-schedule-posts.webp" />
          <StyledContent3Description>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </StyledContent3Description>
        </StyledGrid3>
        <StyledGrid4 className="grid">
          <StyledContent1>Write your content using AI.</StyledContent1>
          <StyledImage4 src="src/assets/images/illustration-ai-content.webp" />
        </StyledGrid4>
        <StyledGrid5 className="grid">
          <StyledImage5 src="src/assets/images/illustration-multiple-platforms.webp" />
          <StyledContent5>
            Manage multiple accounts and platforms.
          </StyledContent5>
        </StyledGrid5>
        <StyledGrid6 className="grid">
          <StyledContent6>
            Maintain a consistent posting schedule.
          </StyledContent6>
          <StyledImage6 src="src/assets/images/illustration-consistent-schedule.webp" />
        </StyledGrid6>
        <StyledGrid7 className="grid">
          <StyledContent7>&gt;56%</StyledContent7>
          <StyledContent7Description>
            faster audience growth
          </StyledContent7Description>
          <StyledImage7 src="src/assets/images/illustration-audience-growth.webp" />
        </StyledGrid7>
        <StyledGrid8 className="grid">
          <StyledImage8 src="src/assets/images/illustration-grow-followers.webp" />
          <StyledContent8>Grow followers with non-stop content.</StyledContent8>
        </StyledGrid8>
      </StyledGrid>
      <StyledDisclaimer>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/?ref=challenge"
          target="_blank"
          rel="noopener"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.byjeff.dev/" target="_blank" rel="noopener">
          Jeffrey Equipaje
        </a>
        .
      </StyledDisclaimer>
    </StyledMain>
  );
}

export default App;
