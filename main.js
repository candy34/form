// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator

// -------- Your Code Goes Below this Line --------


let formSpace = document.getElementById('fields');
const inputNameElement + document.createElement('input');
      inputNameElement.setAttribute('label', 'text');
      inputNameElement.setAttribute('Last Name', 'First Name');
      formSpace.appendChild(inputNameElement);

const inputEmailElement = document.createElement('input');
      inputEmailElement.setAttribute('id', 'user-email');
      inputEmailElement.setAttribute('label', 'Email Address');
      formSpace.appendChild(inputEmailElement);

for (var i = 0; i < formData.length; i++) {
          if(formData[i].type === 'select'){

inputNameElement.forEach(item => {
  frag.appendChild(makeInputNameElement(item))
})
inputEmailElement.forEach(item => {
  frag.appendChild(makeInputEmailElement(item))
})
const form = document.getElementById('fields')
form.appendChild(frag)
})()
function makeInput ({lable, text, id, }) {
  const div = createElement('div')
  const label = makeLabel(label, id)
  const input = createElement('input')

  input.setAttribute('type', type)
    input.setAttribute('id', id)
    div.append(label, input)
    return div
  }
  function makeTextArea ({type, label, id}) {
  const div = createElement('div')
  const label = makeLabel(label, id)
  const textarea = createElement('textarea')
  textarea.setAttribute('type', type)
  textarea.setAttribute('id', id)
  div.append(label, textarea)
  return div
}
function makeSelect ({type, label, id, options}) {
  const div = createElement('div')
  const label = makeLabel(label, id)
  const select = createElement('select')

  const optFrag = document.createDocumentFragment()
  options.forEach(el => {
    const option = createElement('option')
    const txt = createText(el.label)
    option.setAttribute('value', el.value)
    option.appendChild(txt)
    optFrag.appendChild(option)
  })
  select.appendChild(optFrag)
  select.setAttribute('type', type)
  select.setAttribute('id', id)
  div.append(labelInput, select)
  return div
}
//help from Calvin's cats
