/* Select form option based on query string */
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const formOption = urlParams.get('service');
// console.log(formOption);
if (formOption) {
    const formOptions = document.querySelectorAll('.c-form__select[name="services"] option');
    formOptions.forEach((option) => {
        // console.log(option);
        if (option.value === formOption) {
            option.setAttribute('selected', 'selected');
        }
    });
}