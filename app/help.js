module.exports = function () {
  printHelpMessage();
  process.exit(1);
};

function printHelpMessage() {
  console.log('intronode usage:');
  console.log('v1.0.0');
  console.log('');
  console.log('--help         print this message');
  console.log('--name={name}  input name');
  console.log('');
}
