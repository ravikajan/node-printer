const escpos = require("escpos");
// escpos.Bluetooth = require("escpos-bluetooth");
escpos.Network = require("escpos-network");

const address = "00:01:90:66:09:FB";
const channel = 1;
// const bluetoothDevice = new escpos.Bluetooth(address, channel);
escpos.Network = require("escpos-network");

const networkDevice = new escpos.Network("192.168.0.9", 9100);
// const device  = new escpos.Serial('/dev/usb/lp0');

// console.log(device);

const options = { encoding: "GB18030" /* default */ };
// encoding is optional

const printer = new escpos.Printer(networkDevice, options);

device.open(function (error) {
  printer
    .font("a")
    .align("ct")
    .style("bu")
    .size(1, 1)
    .text("The quick brown fox jumps over the lazy dog")
    .text("敏捷的棕色狐狸跳过懒狗")
    .barcode("1234567", "EAN8")
    .table(["One", "Two", "Three"])
    .tableCustom(
      [
        { text: "Left", align: "LEFT", width: 0.33, style: "B" },
        { text: "Center", align: "CENTER", width: 0.33 },
        { text: "Right", align: "RIGHT", width: 0.33 },
      ],
      { encoding: "cp857", size: [1, 1] } // Optional
    )
    .qrimage("https://github.com/song940/node-escpos", function (err) {
      this.cut();
      this.close();
    });
});
