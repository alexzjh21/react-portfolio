export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function description () {
  const desc = {
    thehighvoltage: 'This is a website for an online guitar shop where users can buy, sell, and sign-up as a member.',
    dinenwine: 'This is a website where users can look up for a recipe of their choice or random generate a recipe. The is also a nutrion calculator that shows macros according to the ingredient and the portion.'
  }
  return desc;
}