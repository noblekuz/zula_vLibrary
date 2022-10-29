import * as React from 'react';
import { Container } from 'react-bootstrap';

import Book from './_book';
import ReaderHead from './reader_header'; 


interface IBookProps {
    
    pages_as_png_array: {
        pageUrl: string;
        type: string;
    }[];
    
    about_book: {
        title: string;
        author: string;
        page_Size_mm: {
            width: number;
            height: number;
        };
        publishers: string;
        mainCont_pages: number;
        prelim_pages: number;
        back_matter: number;
        language: string;
        isbn: string;
    }
    

}



const Desk: React.FunctionComponent<IBookProps> = (props: IBookProps) => {

    let controlCommand = "go"
    let skip_to_page = 2

  return (
        <Container >
            <ReaderHead />
            <Container className='mt-4 pt-5'>
                <div className="row justify-content-center">
                <Book pages_as_png_array={props.pages_as_png_array} controllers={controlCommand} skipto={skip_to_page} about_book={props.about_book} />
                </div>
                
            </Container>
        </Container>
  ) ;
};

export default Desk;