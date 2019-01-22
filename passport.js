// https://github.com/bitwiseshiftleft/sjcl/blob/master/sjcl.js
// https://github.com/zenorocha/clipboard.js

// UI Class: Handle UI Tasks
class UI {

  static buildSelect() {
    loginArray = Store.getItemsArray(jsonArrayName);
    const arr_length = (loginArray.length);
    loginArray.sort((a,b) => (a.label == "undefined" || b.label == "undefined" ||
      a.label.toUpperCase() < b.label.toUpperCase() ? -1 : 1));
    // re-create and append the options
    document.querySelector('#mySelect').innerHTML = "";
    var option = document.createElement("option");
    option.value = 0;
    option.text = `Select a label [${arr_length} total]`;
    document.querySelector('#mySelect').appendChild(option);
    for (var i = 0; i < loginArray.length; i++) {
      option = document.createElement("option");
      option.value = i + 1;
      option.text = loginArray[i].label;
      document.querySelector('#mySelect').appendChild(option);
    }
    document.getElementById("decrypt").classList.add('btn-warning');
    document.getElementById("decrypt").classList.remove('btn-success');
    document.getElementById("editbtn").classList.add('btn-warning');
    document.getElementById("editbtn").classList.remove('btn-success');
  }

  static buildPre() {
    const preel = document.createElement( 'pre' );
    preel.id = "prearea";
    document.querySelector('#resultdiv').innerHTML="";
    document.querySelector('#resultdiv').appendChild(preel);
    document.querySelector('#prearea').innerHTML = JSON.stringify(loginArray);
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const bt = document.createElement("button");
    bt.className = "hide";
    bt.innerHTML = "&times;";
    div.appendChild(bt);
    const container = document.querySelector('.container');
    const form = document.querySelector('#decryptheader');
    container.insertBefore(div, form);
    setTimeout(() => {
        const alert = document.querySelector('.alert');
        if (alert) {
          alert.style.animationPlayState = 'running';
          alert.addEventListener('animationend', () =>  {
             alert.remove();
         });
       }
     }
        , 5000);
  }

  static openModal() {
      modal.style.display = 'block';
      document.getElementById("modalpassword").focus()
  }
  static closeModal() {
      modal.style.display = 'none';
  }
  static clickOutside(e) {
      if (e.target == modal) {
          modal.style.display = 'none';
      }
  }

  static stopTimer() {
      clearTimeout(timer);
  }

  static startTimer() {
      console.info("Countdown started" + Date.now() / 1000);
      clearTimeout(timer);
      timer = setTimeout(function () {
        document.querySelector("#password").value="";
        document.querySelector("#modalpassword").value="";
        console.info("Password erased" + Date.now() / 1000);
      }, 30000);
  }
}

// Store Class: Handles Storage
class Store {
  static getItemsArray(jsonArrayName) {
    if (typeof (Storage) !== "undefined" && JSON.parse(localStorage.getItem(jsonArrayName))) {
      var loginArray = JSON.parse(localStorage.getItem(jsonArrayName));
      const arr_length = (loginArray.length);
      console.info(`found loginArray... ${arr_length}`);
      loginArray.sort((a,b) => (a.label == "undefined" || b.label == "undefined" ||
        a.label.toUpperCase() < b.label.toUpperCase() ? -1 : 1));
    } else {
      console.info("loginArray re-initialized");
      if (preferredFormat =='mini') {
        var loginArray = [{"label": "test_password_is_Test",
         "ct": "i0m4fDNu5PdIwuuYEMEbUsDnkDh4"},
         {"label": "Remove_this", "ct": "uVcWi6U8hjrccdho8g=="}];
      } else {
        var loginArray = [{"label": "test_password_is_Test",
         "notes": {"iv": "HCfcfHAc8hSiioqMvBCk4w==", "v": 1, "iter": 101,
         "ks": 128, "ts": 64, "mode": "ccm", "adata": "ad2",
         "cipher": "aes", "salt": "vwDdp7pfcg8=",
         "ct": "i0m4fDNu5PdIwuuYEMEbUsDnkDh4"}},
         {"label": "Remove_this",
         "notes": {"iv": "HCfcfHAc8hSiioqMvBCk4w==", "v": 1,
         "iter": 101, "ks": 128, "ts": 64, "mode": "ccm",
         "adata": "ad2", "cipher": "aes", "salt": "vwDdp7pfcg8=",
         "ct": "uVcWi6U8hjrccdho8g=="}}];
      }
      localStorage.setItem(jsonArrayName, JSON.stringify(loginArray));
    }
    return loginArray;
  }

  static getItemByLabel(label) {
    function findItem(item) {
        return item.label === label;
    }
    let itemIndex = loginArray.findIndex(findItem);
    return loginArray[itemIndex];
  }

  static mergeIntoLocal() {
    if (document.querySelector('#result').value && document.querySelector('#result').value>"") {
      var possibleJSON = document.querySelector('#result').value;
      try {
        cc = JSON.parse(possibleJSON);  // possible array of json objects
        if (cc.length > 0) { // arrayobject as needed... let's build at the comparison array
          var comparisonArray=[];
          for (var i = 0; i < loginArray.length; i++) {
            comparisonArray.push(loginArray[i].label);
          }
          console.info(comparisonArray);
          for (var i = 0; i < cc.length; i++) {
            if (comparisonArray.indexOf(cc[i].label) < 0) { // new label
              loginArray.push(cc[i]);
              console.info("Added " + cc[i].label + " to loginArray")
            }
          }
          console.info(loginArray);
          localStorage.setItem("loginArray", JSON.stringify(loginArray));
          console.info("Saved into loginArray local storage")
        }
      }
      catch (e) {
        alert("Unexpected value in JSON");
      }
    } else {
      UI.showAlert("Nothing to merge","danger");
    }
  }

}

// init globals
var preferredFormat = 'mini';
var jsonArrayName = 'miniArray';
var loginArray = Store.getItemsArray(jsonArrayName);
var plaintext = "";
var label = "";
var nextfocus = "";
var timer;

const iv = "HCfcfHAc8hSiioqMvBCk4w==",
  adata = "ad2", iter = 101, mode = "ccm", ts = 64, ks = 128,
  salt = "vwDdp7pfcg8=";
// get modal element
const modal = document.getElementById('simpleModal');
// get closeBtn
const closeBtn = document.getElementsByClassName('closeBtn')[0];
// get open modal btn
const modalBtn =  document.getElementById('modalBtn');

// utility fns
function findItem(item) {
    return item.label === label;
}


// DOM LOADED
document.addEventListener('DOMContentLoaded', () => {
  UI.buildSelect();
  UI.buildPre();
  var clipboard = new Clipboard('.btn');

  document.getElementById("split").style.visibility = "hidden";
  document.querySelector("#splitarea").style.visibility = "hidden";

  // event click
  document.addEventListener('click', event => {
    const element = event.target;
    if (element.className === 'hide') {
      element.parentElement.style.animationPlayState = 'running';
      element.parentElement.addEventListener('animationend', () =>  {
          element.parentElement.remove();
      });
    }
  });

  // event zz clicked
  document.querySelector('#zz').onclick = () => {
    console.info("zz clicked");
  }

  // event modal submit
  document.querySelector('#modal_form').onsubmit = () => {
    document.querySelector('#password').value =
      document.querySelector('#modalpassword').value;
    UI.closeModal();
    document.getElementById(nextfocus).focus();
    // Stop form from submitting
    return false;
  };

  // event open modal
  // modalBtn.addEventListener('click', UI.openModal);
  // listen for outside Click
  window.addEventListener('click', UI.clickOutside);
  closeBtn.addEventListener('click', UI.closeModal);

  // event Select item
  document.querySelector("#mySelect").onchange = function () {
    UI.stopTimer();
    const selectedItem = loginArray[this.selectedIndex - 1];
    label = selectedItem.label;
    const notes = selectedItem.notes;
    if (notes == undefined) { // format miniArray
      console.info("miniArray format... ", label, selectedItem.ct);
      document.querySelector('#notes').innerHTML = (selectedItem.ct);
    } else {
      console.info(notes.ct, label);
      if (typeof (notes) == "string") {
        document.querySelector('#notes').innerHTML = (notes);
      } else {
        document.querySelector('#notes').innerHTML = (notes.ct);
      }
    }
    document.getElementById("password").focus();
    document.getElementById("decrypt").classList.remove('btn-warning');
    document.getElementById("decrypt").classList.add('btn-success');
    document.getElementById("editbtn").classList.remove('btn-warning');
    document.getElementById("editbtn").classList.add('btn-success');
  };

  // event decryptdiv
  document.querySelector('#decrypt').onclick = () => {
    UI.startTimer(); //countdown to erasing password
    if (document.querySelector('#notes').innerHTML.length < 2 ) {
      UI.showAlert("Select a Label", "danger");
      return false;
    }
    if (document.querySelector('#password').value.length < 1) {
      nextfocus = "decrypt";
      UI.openModal();
      return false;
    }
    var p = {iv: iv, adata: adata, iter: iter, mode: mode, ts: ts, ks: ks, salt: salt};
    var passwordjs = document.querySelector('#password').value;
    var rp = {};
    var ct = document.querySelector('#notes').innerHTML;
    p.ct = ct;
    try {
      plaintext = sjcl.decrypt(passwordjs, JSON.stringify(p), {}, rp);
      console.info(`plaintext: ${plaintext}`);
      document.querySelector('#plaintextarea').innerHTML = plaintext;
      document.getElementById("split").style.visibility = "visible";
      document.getElementById("split").focus();
      UI.showAlert(`Message successfully decrypted`,"success");
    }
    catch(error) {
      if (error.message.indexOf('ccm') > -1) {
          UI.showAlert("Bad Password","danger");
        }
    }
    return false;
  };

  // event split
  document.querySelector('#split').onclick = () => {
    if (plaintext && plaintext.indexOf('~') > -1) {
      var logininfo = plaintext.split('~')
      document.querySelector('#uname').value = (logininfo[0]);
      document.querySelector('#passw').value = (logininfo[1]);
    } else {
      document.querySelector('#uname').value = plaintext;
      document.querySelector('#passw').value = "";
    }
    document.querySelector("#splitarea").style.visibility = "visible";
    return false;
  }

  // event click edit
  document.querySelector('#editbtn').onclick = () => {
    document.querySelector('#label').value = label;
    document.querySelector('#raw').value = plaintext;
    if (label.length) {
      document.getElementById("encrypt").classList.remove('btn-warning');
      document.getElementById("encrypt").classList.add('btn-success');
      document.getElementById("delete").classList.remove('btn-warning');
      document.getElementById("delete").classList.add('btn-success');
    }
    return false;
  }

  // event click encrypt and replace or add
  document.querySelector('#encryptform').onsubmit = () => {
    UI.startTimer(); //countdown to erasing password
    label = document.querySelector('#label').value;
    if (label.length < 1 || document.querySelector('#raw').value.length < 1) {
      UI.showAlert("Label and Text must contain values", "danger");
      return false;
    }
    if (document.querySelector('#password').value.length < 1) {
      nextfocus = "encrypt";
      UI.openModal();
      return false;
    }
    const itemIndex = loginArray.findIndex(findItem); // uses label!
    const p = {iv: iv, adata: adata, iter: iter, mode: mode, ts: ts, ks: ks, salt: salt};
    const passwordjs = document.querySelector('#password').value;
    const rp = {};
    const ciphertext = sjcl.encrypt(passwordjs, document.querySelector('#raw').value, p, rp);
    const ct = ciphertext.match(/"ct":"([^"]*)"/)[1];
    if (loginArray[0].notes == undefined) { // format miniArray
      const notes = ct;
      // weird js bug: the following if else bugs if in common path
      if (itemIndex < 0) { // not found must be new item
        loginArray.push({label: document.querySelector('#label').value, ct: notes});
      } else {                                            // found => replace values
        loginArray[itemIndex] = {label: document.querySelector('#label').value, ct: notes};
      }
    } else { // format loginArray
      const notes = {iv: iv, adata: adata, iter: iter, mode: mode, ts: ts, ks: ks, salt: salt, ct: ct};
      if (itemIndex < 0) { // not found must be new item
        loginArray.push({label: document.querySelector('#label').value, ct: notes});
      } else {                                            // found => replace values
        loginArray[itemIndex] = {label: document.querySelector('#label').value, ct: notes};
      }
    }
    localStorage.setItem(jsonArrayName, JSON.stringify(loginArray));
    UI.buildPre();
    UI.buildSelect();
    UI.showAlert(`Message successfully encrypted`,"success");
    return false;
  };

  // delete Label
  document.querySelector('#delete').onclick = () => {
    label = document.querySelector('#label').value;
    const itemIndex = loginArray.findIndex(findItem);
    if (itemIndex < 0) {      // not found cannot be deleted
      UI.showAlert("Can't delete: label not found in list","danger");
    } else {
        loginArray.splice(itemIndex, 1);
        UI.showAlert(`Label ${label} deleted`,"success");
    }
    localStorage.setItem(jsonArrayName, JSON.stringify(loginArray));
    UI.buildPre();
    UI.buildSelect();
    return false;
  };

  // event Merge
  document.querySelector('#merge').onclick = () => {

    if (document.querySelector('#result').value && document.querySelector('#result').value>"") {
      var possibleJSON = document.querySelector('#result').value;
      try {
        cc = JSON.parse(possibleJSON);  // possible array of json objects
        if (cc.length > 0) { // arrayobject as needed... let's build at the comparison array
          let comparisonArray=[];
          for (var i = 0; i < loginArray.length; i++) {
            comparisonArray.push(loginArray[i].label);
          }
          console.info(comparisonArray);
          for (var i = 0; i < cc.length; i++) {
            if (comparisonArray.indexOf(cc[i].label) < 0) { // new label
              if (document.querySelector('#label').value=="REDUCE") {
                loginArray.push( {label: cc[i].label, ct: cc[i].notes.ct} );
              } else {
                loginArray.push(cc[i]);
              }
              console.info("Added " + cc[i].label + " to loginArray")
            } else { // label exists!
              if (document.querySelector('#overwrite').checked) { //must overwrite
                // find and remove existing in loginArray
                label = cc[i].label;
                const itemIndex = loginArray.findIndex(findItem); // uses label
                loginArray.splice(itemIndex, 1);  // boom
                // now, add
                if (document.querySelector('#label').value=="REDUCE") {
                  loginArray.push( {label: cc[i].label, ct: cc[i].notes.ct} );
                } else {
                  loginArray.push(cc[i]);
                }
              }
            }            
          }
          console.info(loginArray);
          localStorage.setItem(jsonArrayName, JSON.stringify(loginArray));
          UI.buildSelect();
          UI.showAlert("Saved into jsonArray local storage", "success");
        }
      }
      catch (e) {
        alert("Unexpected value in JSON");
      }
    } else {
      UI.showAlert("Nothing to merge. Please input a Json array in the merge text area.","danger");
    }

  }

  // event clear
  document.querySelector('#clear').onclick = () => {
    // vars
    passwordjs="";
    plaintext="";
    label="";
    // buttons
    //document.querySelector('#encrypt').disabled = true;
    //document.querySelector('#decrypt').disabled = true;

    // fields and areas
    document.querySelector("#split").style.visibility = "hidden";
    document.querySelector("#splitarea").style.visibility = "hidden";
    //document.querySelector('#resultdiv').innerHTML = "<pre> </pre>";
    document.querySelector('#result').value = "";
    document.querySelector('#plaintextarea').innerHTML = "";
    document.querySelector('#notes').innerHTML = ".";
    document.querySelector('#password').value = "";
    document.querySelector('#label').value = "";
    document.querySelector('#raw').value = "";
    // refresh select
    document.querySelector('#mySelect').innerHTML = "";
    UI.buildSelect();
    // buttons colors
    document.getElementById("encrypt").classList.remove('btn-success');
    document.getElementById("encrypt").classList.add('btn-warning');
    document.getElementById("delete").classList.remove('btn-success');
    document.getElementById("delete").classList.add('btn-warning');
  };

});
