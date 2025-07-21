import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from '../assets/21stAnnualNJITXCInvitationalInfoSheet.pdf'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function XCInvite() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div class="flex justify-center w-100">
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        {numPages && Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ))}
      </Document>
    </div>
  );
}