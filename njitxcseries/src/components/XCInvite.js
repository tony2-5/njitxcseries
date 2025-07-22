import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import pdfFile from '../assets/21stAnnualNJITXCInvitationalInfoSheet.pdf'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function XCInvite() {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(null);
  const theme = useTheme();
  
  // Responsive breakpoints
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  // Calculate responsive width
  useEffect(() => {
    const calculateWidth = () => {
      const containerPadding = 32; // Account for container padding
      const availableWidth = window.innerWidth - containerPadding;
      
      if (isXs) {
        return Math.min(availableWidth * 0.95, 350); // 95% width on mobile, max 350px
      } else if (isSm) {
        return Math.min(availableWidth * 0.9, 500); // 90% width on small tablets
      } else if (isMd) {
        return Math.min(availableWidth * 0.8, 700); // 80% width on medium screens
      } else {
        return Math.min(availableWidth * 0.7, 800); // 70% width on large screens, max 800px
      }
    };

    setPageWidth(calculateWidth());
    
    const handleResize = () => {
      setPageWidth(calculateWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isXs, isSm, isMd, isLg]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: 2,
        px: 2 // Add horizontal padding
      }}
    >
      <Document 
        file={pdfFile} 
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {numPages && pageWidth && Array.from(new Array(numPages), (el, index) => (
          <Box 
            key={`page_${index + 1}`}
            sx={{
              mb: 2,
              boxShadow: 2,
              borderRadius: 1,
              overflow: 'hidden',
              '& .react-pdf__Page': {
                display: 'flex !important',
                justifyContent: 'center !important'
              },
              '& .react-pdf__Page__canvas': {
                maxWidth: '100% !important',
                height: 'auto !important'
              }
            }}
          >
            <Page
              pageNumber={index + 1}
              width={pageWidth}
              renderTextLayer={!isXs} // Disable text layer on mobile for better performance
              renderAnnotationLayer={false} // Disable annotations for better performance
            />
          </Box>
        ))}
      </Document>
    </Box>
  );
}