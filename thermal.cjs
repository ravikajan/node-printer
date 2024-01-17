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
        interface: "tcp://192.168.0.99:9100",
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
  
      // Continue with your printing logic using the 'printer' object if needed
    } catch (error) {
      console.error("Error checking printer status:", error);
    }
  }
  
  // Call the asynchronous function
  checkPrinterStatus();
  