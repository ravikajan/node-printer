const {
  ThermalPrinter,
  PrinterTypes,
  CharacterSet,
  BreakLine,
} = require("node-thermal-printer");

let printer = new ThermalPrinter({
  type: PrinterTypes.EPSON, // Printer type: 'star' or 'epson'
  interface: "printer:EPSON TM-m30II 2", // Use USB interface
  characterSet: CharacterSet.PC852_LATIN2, // Printer character set
  removeSpecialCharacters: false, // Removes special characters - default: false
  lineCharacter: "=", // Set character for lines - default: "-"
  breakLine: BreakLine.WORD, // Break line after WORD or CHARACTERS. Disabled with NONE - default: WORD
  options: {
    // Additional options
    timeout: 5000, // Connection timeout (ms) [applicable only for network printers] - default: 3000
  },
});

console.log("status", await printer.isPrinterConnected());

// Now, you can continue with your printing logic using the 'printer' object
