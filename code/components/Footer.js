import Contact from './global/Contact'

export default function Footer() {
    let today = new Date();
    let currentYear = today.getFullYear();
  return (
    <>
      <Contact />
      <footer className="footer-container flex flex-col flex-ai-c flex-jc-c">
        <p>©️{currentYear} Honest Towing LLC All Rights Reserved</p>
        <p>Designed and Developed By</p>
        <a href="https://www.daventus.com/"><p className="daventus-logo">Daventus Studios</p></a>
        <p>v1.1.1 beta</p>
      </footer>
    </>
  );
}
