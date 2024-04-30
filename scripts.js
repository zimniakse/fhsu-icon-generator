function encodeHTMLEntities(text) {
  let e = document.createElement('e');
  e.innerText = text;
  return e.innerHTML;
}

function constructListItem(url, iconName, iconLabel, iconID) {
  let listItem = `
      <li>
        <a class="fh-social" href="${url}">
          <div class="fh-social__icon">
            <svg class="fh-social__image" role="img" aria-labelledby="${iconLabel}">
              <title id="${iconLabel}">${iconName}</title>
              <use xlink:href="/_files/images/icons.svg#${iconID}"></use>
            </svg>
          </div>
        </a>
      </li>`
  return listItem
}

function generate() {
  let str = `<!--#protect
  <nav>
    <ul class="fh-socials">`

  const forms = document.querySelectorAll('form');
  const form = forms[0];
  Array.from(form.elements).forEach((input) => {
    if ((input.value) !== "") {
      const labels = input.labels;
      const label = labels[0];
      str += constructListItem(input.value, label.textContent, label.id, input.id)
    }
  });

  str += `
    </ul>
  </nav>
#protect-->`

  document.getElementById("output").innerHTML = encodeHTMLEntities(str);
}

