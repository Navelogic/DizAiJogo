











function verifyNumber(tryUser) {
    let number = parseInt(tryUser);
    if (Number.isNaN(number)) {
        try_element.innerHTML = `
        <div>O que você disse, não é um número...</div>
        `;
      return false;
    } else {
      if (number > 100 || number < 0) {
          return false;
      } else {
          return true;
      }
  }}