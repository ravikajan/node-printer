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
        interface: "printer:EPSON TM-m30II 2",
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
        // Print "Hello, World!" message
        printer.println("Hello, World!");
  
        // Cut the paper
        printer.cut();
  
        // Execute print job
        const response = await printer.execute();
  
        console.log("Print job response:", response);
      }
    } catch (error) {
      console.error("Error checking printer status:", error);
    }
  }
  
  // Call the asynchronous function
  checkPrinterStatus();
  