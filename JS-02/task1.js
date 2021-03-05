toCamel.addEventListener('click',
function()
{
  let x = numberX.value;
  const toCamel = str => {
  return str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });

};
camelResult.innerHTML = toCamel(x);
}
)

toSnake.addEventListener('click',
function()
{
  let x = numberY.value;
  const toSnake = str =>
  str.replace(/[A-Z]/g, letter =>
    `_${letter.toLowerCase()}`);
snakeResult.innerHTML = toSnake(x);
}
)
