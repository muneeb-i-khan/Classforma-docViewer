import WebViewer from '@pdftron/webviewer';
import './App.css';
import './index.css'
import Boxes22 from './Boxes2-title';
import Boxes2doc2 from './Boxes2-author';

import React, { useState, useRef, useEffect } from 'react';
const Doc2 = () => {
    const viewer = useRef(null);


    function handleLabel() {
        setCol(prevCol => {
            return !prevCol
        })
    }

    function handleLabel2() {
        setCol2(prevCol => {
            return !prevCol
        })
    }


    let data = [];
    const [col, setCol] = useState(1);
    const [col2, setCol2] = useState(1);
    useEffect(() => {
        WebViewer(
            {
                path: '/webviewer/lib',
                initialDoc: 'https://arxiv.org/pdf/2212.07937.pdf',
            },
            viewer.current,
        ).then((instance) => {
            instance.UI.setHeaderItems(header => {
                header.push({
                    type: 'actionButton',
                    img: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
                    onClick: async () => {
                        console.log(await annotationManager.exportAnnotations({ links: false, widgets: false }))
                    }
                });
            });
            const { documentViewer, annotationManager, Annotations } = instance.Core;

            documentViewer.addEventListener('documentLoaded', () => {
                if (col === 1) {
                    const highlight = new Annotations.TextHighlightAnnotation();
                    highlight.PageNumber = 1;
                    highlight.X = 20;
                    highlight.Y = 15;
                    highlight.Width = 275;
                    highlight.Height = 25;
                    highlight.StrokeColor = new Annotations.Color(255, 255, 0);
                    data.push({
                        X: highlight.X,
                        y: highlight.Y,
                        height: highlight.Height,
                        Width: highlight.Width
                    })
                    highlight.Quads = [
                        { x1: 100, y1: 75, x2: 500, y2: 75, x3: 500, y3: 95, x4: 100, y4: 95 },

                    ];

                    annotationManager.addAnnotation(highlight);
                    annotationManager.drawAnnotations(highlight.PageNumber);


                    const highlight2 = new Annotations.TextHighlightAnnotation();
                    highlight2.PageNumber = 1;
                    highlight2.X = 20;
                    highlight2.Y = 15;
                    highlight2.Width = 275;
                    highlight2.Height = 25;
                    highlight2.StrokeColor = new Annotations.Color(144, 238, 144);
                    data.push({
                        X: highlight2.X,
                        y: highlight2.Y,
                        height: highlight2.Height,
                        Width: highlight2.Width
                    })
                    // you might get the quads from text selection, a server calculation, etc
                    highlight2.Quads = [
                        { x1: 115, y1: 150, x2: 170, y2: 150, x3: 170, y3: 130, x4: 115, y4: 130 },

                    ];

                    annotationManager.addAnnotation(highlight2);
                    annotationManager.drawAnnotations(highlight2.PageNumber);



                    // LFGGGG
                    const highlight3 = new Annotations.TextHighlightAnnotation();
                    highlight3.PageNumber = 1;
                    highlight3.X = 20;
                    highlight3.Y = 15;
                    highlight3.Width = 275;
                    highlight3.Height = 25;
                    data.push({
                        X: highlight3.X,
                        y: highlight3.Y,
                        height: highlight3.Height,
                        Width: highlight3.Width
                    })
                    highlight3.StrokeColor = new Annotations.Color(144, 238, 144);
                    // you might get the quads from text selection, a server calculation, etc
                    highlight3.Quads = [
                        { x1: 180, y1: 150, x2: 225, y2: 150, x3: 225, y3: 130, x4: 180, y4: 130 },

                    ];

                    annotationManager.addAnnotation(highlight3);
                    annotationManager.drawAnnotations(highlight3.PageNumber);

                    const highlight4 = new Annotations.TextHighlightAnnotation();
                    highlight4.PageNumber = 1;
                    highlight4.X = 20;
                    highlight4.Y = 15;
                    highlight4.Width = 275;
                    highlight4.Height = 25;
                    data.push({
                        X: highlight4.X,
                        y: highlight4.Y,
                        height: highlight4.Height,
                        Width: highlight4.Width
                    })
                    highlight4.StrokeColor = new Annotations.Color(144, 238, 144);
                    // you might get the quads from text selection, a server calculation, etc
                    highlight4.Quads = [
                        { x1: 240, y1: 130, x2: 320, y2: 130, x3: 320, y3: 150, x4: 240, y4: 150 },

                    ];

                    annotationManager.addAnnotation(highlight4);
                    annotationManager.drawAnnotations(highlight4.PageNumber);

                    const highlight5 = new Annotations.TextHighlightAnnotation();
                    highlight5.PageNumber = 1;
                    highlight5.X = 20;
                    highlight5.Y = 15;
                    highlight5.Width = 275;
                    highlight5.Height = 25;
                    highlight5.StrokeColor = new Annotations.Color(144, 238, 144);
                    data.push({
                        X: highlight5.X,
                        y: highlight5.Y,
                        height: highlight5.Height,
                        Width: highlight5.Width
                    })
                    // you might get the quads from text selection, a server calculation, etc
                    highlight5.Quads = [
                        { x1: 330, y1: 130, x2: 400, y2: 130, x3: 400, y3: 150, x4: 330, y4: 150 },

                    ];

                    annotationManager.addAnnotation(highlight5);
                    annotationManager.drawAnnotations(highlight5.PageNumber);


                    const highlight6 = new Annotations.TextHighlightAnnotation();
                    highlight6.PageNumber = 1;
                    highlight6.X = 20;
                    highlight6.Y = 15;
                    highlight6.Width = 275;
                    highlight6.Height = 25;
                    highlight6.StrokeColor = new Annotations.Color(144, 238, 144);
                    data.push({
                        X: highlight6.X,
                        y: highlight6.Y,
                        height: highlight6.Height,
                        Width: highlight6.Width
                    })
                    // you might get the quads from text selection, a server calculation, etc
                    highlight6.Quads = [
                        { x1: 400, y1: 130, x2: 460, y2: 130, x3: 460, y3: 150, x4: 400, y4: 150 },

                    ];

                    annotationManager.addAnnotation(highlight6);
                    annotationManager.drawAnnotations(highlight6.PageNumber);

                }
            });
        });
    }, []);
    return (
        <div className='pdf'>
            <div className='left'>
                <div>
                    <h2>Labels</h2>
                    <hr />
                </div>
                <div className='label-btns'>
                    <button className='title' onClick={handleLabel}>Title</button>
                    <button className='author' onClick={handleLabel2}>Author</button>
                </div>
                <div>
                    <h2>Boxes</h2>
                    <hr />
                    {!col && <Boxes22 />}
                    {!col2 && <Boxes2doc2 />}
                </div>


            </div>
            <div className='right'>
                <div className="webviewer" ref={viewer}></div>
            </div>

        </div>
    )
}

export default Doc2
