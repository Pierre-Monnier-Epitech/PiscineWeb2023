document.getElementById('typeInput').addEventListener('input', validateType);
document.getElementById('brandInput').addEventListener('input', validateBrand);

function validateType() {
  const typeInput = document.getElementById('typeInput').value.toLowerCase();
  const typeValidation = document.getElementById('typeValidation');

  const typeRegex = /^[a-z-]{3,10}$/;

  if (!typeRegex.test(typeInput)) {
    typeValidation.textContent = 'Type is invalid.';
    typeValidation.classList.remove('ext-success');
    typeValidation.classList.add('text-danger');
  } else {
     fetch(`task04.php?type=${typeInput}`)
      .then(response => response.text())
      .then(message => {
        typeValidation.textContent = message;
        if (message.includes('invalid')) {
          typeValidation.classList.remove('text-success');
          typeValidation.classList.add('text-danger');
        } else {
            fetch(`task04.php?brand=${brandInput}`)
              .then(response => response.text())
              .then(message => {
                brandValidation.textContent = message;
                if (message.includes('invalid')) {
                  brandValidation.classList.remove('text-success');
                  brandValidation.classList.add('text-danger');
                } else {
                  brandValidation.classList.remove('text-danger');
                  brandValidation.classList.add('text-success');
                }
              })
          }
        }
      )}
    }

function validateBrand() {
  const brandInput = document.getElementById('brandInput').value.toLowerCase();
  const brandValidation = document.getElementById('brandValidation');

  const brandRegex = /^[a-zA-Z0-9&-]{2,20}$/;


  if (!brandRegex.test(brandInput)) {
    brandValidation.textContent = 'Brand is invalid.';
    brandValidation.classList.remove('text-success');
    brandValidation.classList.add('text-danger');
  } else {
    brandValidation.textContent = 'Brand is valid.';
    brandValidation.classList.remove('text-danger');
    brandValidation.classList.add('text-success');
  }
}