const {
  ThermalPrinter,
  PrinterTypes,
  CharacterSet,
  BreakLine,
} = require("node-thermal-printer");

async function checkPrinterStatus() {
  try {
    let printer = new ThermalPrinter({
      type: PrinterTypes.EPSON,
      interface: "BD:00:01:90:66:09:FB",
      characterSet: CharacterSet.PC852_LATIN2,
      removeSpecialCharacters: false,
      lineCharacter: "=",
      breakLine: BreakLine.WORD,
      options: {
        timeout: 5000,
      },
    });

    const status = await printer.isPrinterConnected();

    console.log("Printer status:", status);
    if (status) {
        printer.alignLeft();
        printer.newLine();
        printer.println('Hello World!');
        printer.println('This is a long line that will be collapsed into two lines');
        printer.drawLine();
      
        printer.upsideDown(true);
        printer.println('Hello World upside down!');
        printer.upsideDown(false);
        printer.drawLine();
      
        printer.invert(true);
        printer.println('Hello World inverted!');
        printer.invert(false);
        printer.drawLine();
      
        printer.println('Special characters: ČčŠšŽžĐđĆćßẞöÖÄäüÜé');
        printer.drawLine();
      
        printer.setTypeFontB();
        printer.println('Type font B');
        printer.setTypeFontA();
        printer.println('Type font A');
        printer.drawLine();
      
        printer.alignLeft();
        printer.println('This text is on the left');
        printer.alignCenter();
        printer.println('This text is in the middle');
        printer.alignRight();
        printer.println('This text is on the right');
        printer.alignLeft();
        printer.drawLine();
      
        printer.setTextDoubleHeight();
        printer.println('This is double height');
        printer.setTextDoubleWidth();
        printer.println('This is double width');
        printer.setTextQuadArea();
        printer.println('This is quad');
        printer.setTextSize(7, 7);
        printer.println('Wow');
        printer.setTextSize(0, 0);
        printer.setTextNormal();
        printer.println('This is normal');
        printer.drawLine();

      // Cut the paper
      printer.cut();

      // Execute print job
      const response = await printer.execute();

      console.log("Print job response:", response);
    }

    // Continue with your printing logic using the 'printer' object if needed
  } catch (error) {
    console.error("Error checking printer status:", error);
  }
}

// Call the asynchronous function
checkPrinterStatus();
