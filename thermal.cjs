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
      interface: "tcp://192.168.0.9:9100",
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
      printer.println("Hello World!");
      printer.println(
        "This is a long line that will be collapsed into two lines"
      );
      printer.drawLine();

      printer.upsideDown(true);
      printer.println("Hello World upside down!");
      printer.upsideDown(false);
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
