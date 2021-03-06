import React from 'react'

import SectionLayout from '../../SectionLayout'
import Table, { Row, Column } from '../../Table'
import Link from '../../Link'
import CodeBlock from '../../CodeBlock'
import Code from '../../Code'
import Label from '../../Label'
import Note from '../../Note'

const styledSample = (`
import styled from 'styled-components';

const Button = styled.button\`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
\`;

const TomatoButton = styled(Button)\`
  background: tomato;
\`;
`).trim()

const Styled = () => (
  <SectionLayout sub title={<Code>styled</Code>}>
    <p>
      <Label>web</Label> <Label>native</Label>
    </p>

    <p>
      This is the default export.
      This is a low-level factory we use to create the <Code>styled.tagname</Code> helper methods.
    </p>

    <Table head={[ 'Arguments', 'Description' ]}>

      <Row>
        <Column>
          1. <Code>component</Code> / <Code>tagname</Code>
        </Column>
        <Column>
          Either a valid react component or a tagname like <Code>'div'</Code>.
        </Column>
      </Row>

    </Table>

    <p>
      Returns a function that accepts a tagged template literal and turns it into a <Code>Styled Component</Code>.
    </p>

    <CodeBlock code={styledSample} />

    <Note>
      We encourage you to not use the <Code>styled('tagname')</Code> notation directly.
      Instead, rely on the <Code>styled.tagname</Code> methods like <Code>styled.button</Code>.
      We define all valid HTML5 and SVG elements. (It's an automatic fat finger check too)
    </Note>
  </SectionLayout>
)

export default Styled
