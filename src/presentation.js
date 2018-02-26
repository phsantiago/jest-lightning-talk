// Import React
import React from 'react';

import Youtube from 'react-youtube'

// Import Spectacle Core tags
import {
  Fill,
  Fit,
  BlockQuote,
  CodePane,
  Appear,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import logo from './jest.svg';
import velocity from './speedometer.svg';
import feature from './fixture.svg';
import care from './care.svg';

import comparsion from './comparsion.gif';
import watch from './watch.gif';
import coverage from './coverage.png';
import snapshotMatch from './snapshotMatch.png';
import whosUsing from './whosUsing.png';
import end from './end.jpg';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#03A9FC',
    secondary: '#1F2022',
    tertiary: '#FFFFFF',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
      	  <Image src={logo} height={150} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Jest
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            O framework de testes do Facebook
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            O que é?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} margin="0 0 100px" textColor="secondary" caps>
            Foco do Jest
          </Heading>
          <Layout margin="100px 0 0">
            <Appear>
              <Fill>
                <Image src={velocity} height={150} />
                <Text margin="10px -30px 0" textColor="secondary" size={4} bold>
                  Performance
                </Text>
              </Fill>
            </Appear>
            <Fill>
            </Fill>
            <Appear>
              <Fill>
                <Image src={feature} height={150} />
                <Text margin="10px 0 0" textColor="secondary" size={2}  bold>
                  Features
                </Text>
              </Fill>
            </Appear>
            <Fill>
            </Fill>
            <Appear>
              <Fill margin="10px">
                <Image src={care} height={150} />
                <Text margin="10px 0 0" textColor="secondary" size={2}  bold>
                  Aceitação
                </Text>
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Principais Features
          </Heading>
          <List>
            <ListItem>Extremamente rápido, paraleliza testes</ListItem>
            <ListItem>Watch (Perfeito para TDD)</ListItem>
            <ListItem>Snapshot tests</ListItem>
            <ListItem>Coverage</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Talk is cheap.</Quote>
            <Quote>Show me the code.</Quote>
            <Cite>Torvalds, Linus</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={4} margin="0 0 50px" textColor="primary" caps>
            Sintaxe
          </Heading>
          <CodePane lang="javascript" source={`
              import { sum } from './calcs'

              describe("one plus two", () => {
                it("adds up to three", () => {
                  expect(sum(1, 2)).toBe(3)
                })
              })
          `} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={4} margin="0 0 50px" textColor="primary">
            Performance<br/>
            Mocha x Jest
          </Heading>
          <Image src={comparsion} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={4} margin="0 0 50px" textColor="primary">
            Watch
          </Heading>
          <Image src={watch} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={4} margin="0 0 50px" textColor="primary">
            Snapshot
          </Heading>
          <CodePane lang="javascript" source={`
              import { sum } from './calcs'

              describe("one plus two", () => {
                it("adds up to three", () => {
                  expect(sum(1, 2)).toMatchSnapshot()
                })
              })
          `} />
          <br/>
          <CodePane lang="javascript" source={`
              import JustDisclaimer from './JustDisclaimer'
              import { shallow } from 'enzyme'

              describe("JustDisclaimer", () => {
                it("should match working snapshot", () => {
                  expect(shallow(<JustDisclaimer />)).toMatchSnapshot()
                })
              })
          `} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src={snapshotMatch} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={4} margin="0 0 50px" textColor="primary">
            Coverage
          </Heading>
          <Image src={coverage} />
        </Slide>
        <Slide transition={['zoom']} margin="-5px 0 0" bgColor={"#f9f9f9"} textColor="primary">
          <Image src={whosUsing} />
        </Slide>
        <Slide transition={['fade']} bgColor="#000" textColor="primary">
          <Heading size={4} margin="0 0 50px" textColor="primary">
            Dúvidas?
          </Heading>
          <Youtube 
            videoId="ImQJCDHu7uU"
            opts={{
              playerVars: {
                autoplay: 1,
                showinfo: 0,
                mute: 1,
                loop: 1,
              },
              loop: 1,
            }}
          />
        </Slide>
        <Slide transition={['fade']} bgImage={end} textColor="primary">
        </Slide>
      </Deck>
    );
  }
}
