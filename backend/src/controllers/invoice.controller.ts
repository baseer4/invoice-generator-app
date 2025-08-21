import { Request, Response } from "express";
import puppeteer from "puppeteer";

export const downloadInvoice = async (req: Request, res: Response) => {

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const invoiceUrl = `http://localhost:5173/generate-pdf/`; 
    if (!invoiceUrl) {
      return res.status(400).send("Invoice URL is required");
    }
    await page.goto(invoiceUrl, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=invoice.pdf`,
    });
    res.send(pdfBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating invoice PDF");
  }
};
