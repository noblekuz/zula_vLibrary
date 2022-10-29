import * as React from 'react';
import { Navbar, Button, ButtonToolbar, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap';


interface IControlProps {
}

const Control: React.FunctionComponent<IControlProps> = (props: IControlProps) => {

  
  return (
    <Navbar fixed='bottom' bg='dark' variant='dark' className="justify-content-center">
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
            <ButtonGroup className="me-2" aria-label="First group">
                <Button variant="secondary">Previous</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
            <InputGroup>
                <FormControl
                    type="number"
                    placeholder="Input page number.."
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                />
                <InputGroup.Text id="btnGroupAddon">~</InputGroup.Text>
            </InputGroup>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Third group">
                <Button variant="secondary">Next</Button>
            </ButtonGroup>
            </ButtonToolbar>
    </Navbar>
  ) ;
};

export default Control;
