import React, { useRef } from 'react';
import HTMLFlipBook from "react-pageflip";
import { Container, Card } from 'react-bootstrap';
import { Navbar, Button, ButtonToolbar, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap';




const Book=(props)=>{

    let bookRef = useRef(null)
    

    const nextButtonClick = () => {
        console.log("next")
           // this.flipBook.getPageFlip().flipNext();
            bookRef.current.pageFlip().flip()
           

        };
        
     
          
    const prevButtonClick = () => {
        console.log("previous")
            //this.flipBook.getPageFlip().flipPrev();
           // bookRef.getPageFlip();
          };

    return(
        <Container fluid>
            <Card border="primary">
            <Card.Header style={{fontSize:18, fontWeight: "bold"}}>{props.about_book.title}</Card.Header>
            <Card.Body className='' style={{alignContent:"center", textAlign:"center"}}>
                <div className='book-frame'>
                <HTMLFlipBook ref={(e)=>bookRef = e} showCover={true} width={props.about_book.page_Size_mm.width} height={props.about_book.page_Size_mm.height} size={"fixed"} maxHeight={"40%"} className='shadow'>
                    {props.pages_as_png_array.map(page=>{
                        return(
                            <div>
                            <img src={page.pageUrl} alt='Unable to load Page content' width={"100%"} height={"100%"}/>
                            </div>
                        )
                    })}
                                        
                </HTMLFlipBook>
                </div>
            
            </Card.Body>
            <Card.Footer className="text-muted" style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <div style={{width: 300, marginRight: 20, textAlign:"left"}}>
                     ISBN: {props.about_book.isbn} 
                </div>
                <div style={{width: 300, marginLeft:20, marginRight: 20, textAlign:"center"}}>
                    Language: {props.about_book.language}
                </div>
                <div style={{width: 300, marginLeft:20, textAlign:"right"}}>
                    {props.about_book.mainCont_pages} Pages
                </div>
             </Card.Footer>
            </Card>

           {/*  <Row>
            <Col >
            
            </Col>
            </Row> */}
            <Navbar fixed='bottom' bg='dark' variant='dark' className="justify-content-center">
                <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button variant="secondary" onClick={prevButtonClick}>Previous</Button>
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
                        <Button variant="secondary" onClick={()=>nextButtonClick()}>Next</Button>
                    </ButtonGroup>
                    </ButtonToolbar>
            </Navbar>
        </Container>
    )
}


export default Book
