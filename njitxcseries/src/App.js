import './App.css';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';
import { Container,CssBaseline } from '@mui/material';
import SponsorContent from './components/SponsorContent';
import { HashRouter, Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import XCInvite from './components/XCInvite';
import XCAlumni from './components/XCAlumni';

function App() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <AppAppBar />
        <BrowserRouter>
          <Routes>
            <Route path="/njitxcseries" element={<SponsorContent />}/>
            <Route path="/njitxcseries/alumn-opener" element={<XCAlumni />}/>
            <Route path="/njitxcseries/xc-invite" element={<XCInvite />}/>
            <Route path="*" element={<Navigate to="/njitxcseries" />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Container>
    </>
  );
}

export default App;
