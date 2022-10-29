import React from 'react';
import './App.css';
import Desk from './components/readDesk';

//Import Page -1 as Desk Texture
//Import Page 0 as Cover Design

//import Pn1 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_-01.jpg'
import P0 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_00.png'
import P1 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_01.png'
import P2 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_02.png'
import P3 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_03.png'
import P4 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_04.png'
import P5 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_05.png'
import P6 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_06.png'
import P7 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_07.png'
import P8 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_08.png'
import P9 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_09.png'
import P10 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_10.png'
import P11 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_11.png'
import P12 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_12.png'
import P13 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_13.png'
import P14 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_14.png'
import P15 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_15.png'
import P16 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_16.png'
import P17 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_17.png'
import P18 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_18.png'
import P19 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_19.png'
import P20 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_20.png'
import P21 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_21.png'
import P22 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_22.png'
import P23 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_23.png'
import P24 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_24.png'
import P25 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_25.png'
import P26 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_26.png'
import P27 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_27.png'
import P28 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_28.png'
import P29 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_29.png'
import P30 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_30.png'
import P31 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_31.png'
import P32 from './pages_img/French-pngs/a-beautiful-day_french_interior_20200602_Seite_32.png'


function App (){

//fetched from server or passes in as props from Apps.tsx
const SampleData =[
  //{pageUrl: Pn1, type: "recto" },
  {pageUrl: P0, type: "verso" },
  {pageUrl: P1, type: "recto" },
  {pageUrl: P32, type: "recto" },
  {pageUrl: P2, type: "verso" },
  {pageUrl: P3, type: "recto" },
  {pageUrl: P4, type: "verso" },
  {pageUrl: P5, type: "recto" },
  {pageUrl: P6, type: "verso" },
  {pageUrl: P7, type: "recto" },
  {pageUrl: P8, type: "verso" },
  {pageUrl: P9, type: "recto" },
  {pageUrl: P10, type: "verso" },
  {pageUrl: P11, type: "recto" },
  {pageUrl: P12, type: "verso" },
  {pageUrl: P13, type: "recto" },
  {pageUrl: P14, type: "verso" },
  {pageUrl: P15, type: "recto" },
  {pageUrl: P16, type: "verso" },
  {pageUrl: P17, type: "recto" },
  {pageUrl: P18, type: "verso" },
  {pageUrl: P19, type: "recto" },
  {pageUrl: P20, type: "verso" },
  {pageUrl: P21, type: "recto" },
  {pageUrl: P22, type: "verso" },
  {pageUrl: P23, type: "recto" },
  {pageUrl: P24, type: "verso" },
  {pageUrl: P25, type: "recto" },
  {pageUrl: P26, type: "verso" },
  {pageUrl: P27, type: "recto" },
  {pageUrl: P28, type: "verso" },
  {pageUrl: P29, type: "recto" },
  {pageUrl: P30, type: "verso" },
  {pageUrl: P31, type: "recto" },
  {pageUrl: P32, type: "verso" },

]

const bookData ={
  title: "Une belle Journee",
  author: "SomeBody SOmebody",
  page_Size_mm: {width:300, height: 300},
  publishers: "Rolando Books, Kenya",
  mainCont_pages: 12,
  prelim_pages: 3,
  back_matter: 2,
  language: "French",
  isbn: "754-6-533b646-09"
}


  

  return (
    <div className="App">
       <Desk pages_as_png_array={SampleData} about_book={bookData} />   
    </div>
  );
}

export default App;
