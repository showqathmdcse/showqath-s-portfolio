const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const filePath = path.resolve(__dirname, 'resume.html');
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: path.resolve(__dirname, 'Mohamed_Showqath_N_Resume.pdf'),
    format: 'A4',
    margin: { top: '10px', bottom: '10px', left: '0px', right: '0px' },
    printBackground: true,
    scale: 1,
  });

  await browser.close();
  console.log('Resume PDF generated: Mohamed_Showqath_N_Resume.pdf');
})();
