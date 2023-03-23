/*
 * Події клавіатури. keypress, keydown, keyup
 */

document.addEventListener('keydown', event => {
  event.preventDefault();

  if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
    console.log('«Ctrl + c» or «Command + c» combo');
  }
  // console.log(`code: ${event.code}; key: ${event.key}`);
});
