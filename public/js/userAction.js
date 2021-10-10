window.addEventListener('DOMContentLoaded', () => {
  const actionBody = document.getElementById('action-body');
  const actionFinal = document.getElementById('action-final');

  const toCopy = actionBody.innerText;
  actionBody.addEventListener('click', () => {
    actionFinal.classList.remove('d-none');
    navigator.clipboard.writeText(toCopy);
    actionFinal.classList += ' d-block animated_animate animate__bounceIn ';
    setTimeout(() => {
      actionFinal.classList.remove('d-block');
      actionFinal.classList.remove('animate__bounceIn');
      actionFinal.classList += ' animate__bounceOut ';
    }, 500);
    setTimeout(() => {
      actionFinal.classList.remove('animate__bounceOut');
      actionFinal.classList += ' d-none ';
    }, 1000);
  });
});
