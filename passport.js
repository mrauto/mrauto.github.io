// ver 20 02 09B
// https://github.com/bitwiseshiftleft/sjcl/blob/master/sjcl.js
// https://github.com/zenorocha/clipboard.js

// TODO : parameter hidden div

// UI Class: Handle UI Tasks
class UI {
  static buildSelect() {
    loginArray = Store.getItemsArray(jsonArrayName);
    const arr_length = loginArray.length;
    loginArray.sort((a, b) =>
      a.label == "undefined" ||
      b.label == "undefined" ||
      a.label.toUpperCase() < b.label.toUpperCase()
        ? -1
        : 1
    );
    // re-create and append the options
    document.querySelector("#mySelect").innerHTML = "";
    var option = document.createElement("option");
    option.value = 0;
    option.text = `Select a label [${arr_length} total]`;
    document.querySelector("#mySelect").appendChild(option);
    for (var i = 0; i < loginArray.length; i++) {
      option = document.createElement("option");
      option.value = i + 1;
      option.text = loginArray[i].label;
      document.querySelector("#mySelect").appendChild(option);
    }
    document.getElementById("decrypt").classList.add("btn-warning");
    document.getElementById("decrypt").classList.remove("btn-success");
    document.getElementById("editbtn").classList.add("btn-warning");
    document.getElementById("editbtn").classList.remove("btn-success");
  }

  static buildPre() {
    const preel = document.createElement("pre");
    preel.id = "prearea";
    document.querySelector("#resultdiv").innerHTML = "";
    document.querySelector("#resultdiv").appendChild(preel);
    document.querySelector("#prearea").innerHTML = JSON.stringify(loginArray);
  }

  static showAlert(message, className, targetdiv = "#decryptheader") {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const bt = document.createElement("button");
    bt.className = "hide";
    bt.innerHTML = xmark; // "&times;";
    div.appendChild(bt);
    const container = document.querySelector(".container");
    const form = document.querySelector(targetdiv); // decryptheader addeditdiv
    container.insertBefore(div, form);
    setTimeout(() => {
      const alert = document.querySelector(".alert");
      if (alert) {
        alert.style.animationPlayState = "running";
        alert.addEventListener("animationend", () => {
          alert.remove();
        });
      }
    }, 5000);
  }

  static stopTimer() {
    clearTimeout(timer);
  }

  static startTimer() {
    console.info("Countdown started " + Date.now() / 1000);
    clearTimeout(timer);
    var timer = setTimeout(function() {
      document.querySelector("#password").value = "";
      console.info("Master Password erased " + Date.now() / 1000);
    }, 2 * 60 * 1000); // 2 minutes
  }

  static startOtherTimer() {
    console.info("Countdown started " + Date.now() / 1000);
    clearTimeout(timer);
    var timer = setTimeout(function() {
      document.querySelector("#passw").value = "";
      document.querySelector("#uname").value = "";
      document.querySelector("#plaintextarea").innerHTML = "";
      plaintext = "";
      console.info("Decrypted info erased " + Date.now() / 1000);
    }, 5 * 60 * 1000); // 5 minutes
  }
}

// Store Class: Handles Storage
class Store {
  static getItemsArray(jsonArrayName) {
    if (
      typeof Storage !== "undefined" &&
      JSON.parse(localStorage.getItem(jsonArrayName))
    ) {
      var loginArray = JSON.parse(localStorage.getItem(jsonArrayName));
      const arr_length = loginArray.length;
      console.info(`found ${jsonArrayName}... ${arr_length} labels`);
      loginArray.sort((a, b) =>
        a.label == "undefined" ||
        b.label == "undefined" ||
        a.label.toUpperCase() < b.label.toUpperCase()
          ? -1
          : 1
      );
    } else {
      console.info("Array re-initialized .. ");
      var loginArray = [
        {
          label: "test_password_is_Test",
          iv: "HCfcfHAc8hSiioqMvBCk4w==",
          ct: "i0m4fDNu5PdIwuuYEMEbUsDnkDh4"
        },
        {
          label: "Remove_this",
          iv: "HCfcfHAc8hSiioqMvBCk4w==",
          ct: "uVcWi6U8hjrccdho8g=="
        }
      ];
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
    if (
      document.querySelector("#result").value &&
      document.querySelector("#result").value > ""
    ) {
      var possibleJSON = document.querySelector("#result").value;
      try {
        cc = JSON.parse(possibleJSON); // possible array of json objects
        if (cc.length > 0) {
          // arrayobject as needed... let's build at the comparison array
          var comparisonArray = [];
          for (var i = 0; i < loginArray.length; i++) {
            comparisonArray.push(loginArray[i].label);
          }
          console.info(comparisonArray);
          for (var i = 0; i < cc.length; i++) {
            if (comparisonArray.indexOf(cc[i].label) < 0) {
              // new label
              loginArray.push(cc[i]);
              console.info("Added " + cc[i].label + " to loginArray");
            }
          }
          console.info(loginArray);
          localStorage.setItem("loginArray", JSON.stringify(loginArray));
          console.info("Saved into loginArray local storage");
        }
      } catch (e) {
        alert("Unexpected value in JSON");
      }
    } else {
      UI.showAlert(`${crsmk} Nothing to merge`, "danger", "#resultareadiv");
    }
  }
}

// init globals
var preferredFormat = "mini";
var jsonArrayName = "miniArray";
var loginArray = Store.getItemsArray(jsonArrayName);
var plaintext = "";
var label = "";
var iv0 = undefined;
var nextfocus = "";
var timer;

const iv = "HCfcfHAc8hSiioqMvBCk4w==",
  adata = "ad2",
  iter = 101,
  mode = "ccm",
  ts = 64,
  ks = 128,
  salt = "vwDdp7pfcg8=";

const chkmk = String.fromCharCode(0x2705),
  crsmk = String.fromCharCode(0x2717),
  xmark = String.fromCharCode(0x274c);

// utility fns
function findItem(item) {
  return item.label === label;
}

// DOM LOADED
document.addEventListener("DOMContentLoaded", () => {
  UI.buildSelect();
  UI.buildPre();
  var clipboard = new Clipboard(".btn");
  sjcl.random.startCollectors(); // adds randomness

  document.getElementById("split").style.visibility = "hidden";
  document.querySelector("#splitarea").style.visibility = "hidden";
  document.querySelector("#adminarea").style.visibility = "hidden";

  // event click
  document.addEventListener("click", event => {
    const element = event.target;
    if (element.className === "hide") {
      element.parentElement.style.animationPlayState = "running";
      element.parentElement.addEventListener("animationend", () => {
        element.parentElement.remove();
      });
    }
  });

  // event Select item
  document.querySelector("#mySelect").onchange = function() {
    UI.stopTimer();
    const selectedItem = loginArray[this.selectedIndex - 1];
    label = selectedItem.label;
    iv0 = selectedItem.iv; // iv, if it's stored
    const notes = selectedItem.notes;
    if (notes == undefined) {
      // format miniArray
      console.info("miniArray format... ", label, selectedItem.ct);
      document.querySelector("#notes").innerHTML = selectedItem.ct;
    } else {
      console.info(notes.ct, label);
      if (typeof notes == "string") {
        document.querySelector("#notes").innerHTML = notes;
      } else {
        document.querySelector("#notes").innerHTML = notes.ct;
      }
    }
    document.getElementById("password").focus();
    document.getElementById("editbtn").classList.remove("btn-warning");
    document.getElementById("editbtn").classList.add("btn-success");
  };

  // password blur
  document.querySelector("#password").onblur = () => {
    // base parameters
    var p = {
      iv: iv,
      adata: adata,
      iter: iter,
      mode: mode,
      //   ts: ts,
      //   ks: ks,
      salt: salt
    };
    var passwordjs = document.querySelector("#password").value;
    var rp = {};
    var ct = loginArray[0].ct;
    var iv0 = loginArray[0].iv;
    if (iv0 != undefined) {
      // use the supplied IV if it is there
      console.info("IV is supplied [blur]>> ", iv0, ".");
      p.iv = iv0;
    }
    p.ct = ct;
    p.adata = loginArray[0].label;
    let sense = false;
    try {
      plaintext = sjcl.decrypt(passwordjs, JSON.stringify(p), {}, rp);
      sense = true;
      console.log(
        "sense true ",
        label.length,
        "--",
        document.querySelector("#notes").innerHTML
      ); // useful to debug sense
    } catch (error) {
      if (error.message.indexOf("ccm") > -1) {
        console.log("Bad Password [blur]", loginArray[0].ct);
        document.getElementById("decrypt").classList.remove("btn-success");
        document.getElementById("decrypt").classList.add("btn-warning");
        sense = false;
      }
    }
    // flush plaintext
    plaintext = "";
    if (
      sense &&
      label.length &&
      document.querySelector("#notes").innerHTML.length
    ) {
      // document.getElementById("encrypt").classList.remove("btn-warning");
      // document.getElementById("encrypt").classList.add("btn-success");
      console.log("label from Select");
      document.getElementById("decrypt").classList.remove("btn-warning");
      document.getElementById("decrypt").classList.add("btn-success");
    }

    if (
      sense &&
      document.querySelector("#label").value.length &&
      document.querySelector("#raw").value.length
    ) {
      console.log("label from Encrypt");
      document.getElementById("encrypt").classList.remove("btn-warning");
      document.getElementById("encrypt").classList.add("btn-success");
    }
  };

  // activate Admin
  document.querySelector("#admin").onclick = () => {
    document.getElementById("adminarea").style.visibility = "visible";
  };

  // admin_password blur
  document.querySelector("#admin_password").onblur = () => {
    var count = 0;
    // loop over loginArray
    for (var i = 0; i < loginArray.length; i++) {
      var passwordjs = document.querySelector("#admin_password").value;
      var p = {
        iter: iter,
        mode: mode,
        salt: salt
      };
      p.iv = loginArray[i].iv || iv;
      p.ct = loginArray[i].ct;
      p.adata = loginArray[i].label;
      var rp = {};
      try {
        plaintext = sjcl.decrypt(passwordjs, JSON.stringify(p), {}, rp);
        // add one every successful decrypt
        count += 1;
      } catch (error) {
        try {
          // that part won t be needed once adata is properly migrated
          p.adata = adata;
          plaintext = sjcl.decrypt(passwordjs, JSON.stringify(p), {}, rp);
          // add one every successful decrypt
          count += 1;
        } catch (error) {
          count += 0;
        }
      }
      // flush plaintext
      plaintext = "";
    }
    // display #count
    document.querySelector("#count").value = count;
  };

  // reencrypt
  document.querySelector("#reencrypt").onclick = () => {
    if (
      !document.querySelector("#admin_password").value.length ||
      !document.querySelector("#new_password").value.length ||
      !document.querySelector("#retype").value.length ||
      document.querySelector("#retype").value !=
        document.querySelector("#new_password").value ||
      document.querySelector("#count").value < 1
    ) {
      nextfocus = "admin_password";
      UI.showAlert(
        `${crsmk} Type all passwords correctly, please.`,
        "danger",
        "#adminarea"
      );
      document.getElementById(nextfocus).focus();
      return false;
    }
    var count = 0;
    var passwordjs = document.querySelector("#admin_password").value;
    var newpasswordjs = document.querySelector("#new_password").value;
    var rp = {};
    // loop over loginArray
    for (var i = 0; i < loginArray.length; i++) {
      var p = {
        iter: iter,
        mode: mode,
        salt: salt
      };
      iv0 = loginArray[i].iv || iv;
      p.iv = iv0;
      p.ct = loginArray[i].ct;
      label = loginArray[i].label;
      p.adata = label;
      rp = {};
      plaintext = "";
      try {
        plaintext = sjcl.decrypt(passwordjs, JSON.stringify(p), {}, rp);
        // add one every successful decrypt
      } catch (error) {
        try {
          // that part won t be needed once adata is properly migrated
          p.adata = adata;
          plaintext = sjcl.decrypt(passwordjs, JSON.stringify(p), {}, rp);
        } catch (error) {
          count += 0; // pass?
        }
      }
      //   console.info("-------plaintext: ", plaintext);
      if (plaintext.length) {
        // re encrypt  if successful
        // generate fresh IV
        if (sjcl.random.isReady() > 0) {
          // 1=ready, 2 means requires reseed, that s fine
          randomWords = sjcl.random.randomWords(4, 0);
          iv0 = sjcl.codec.base64.fromBits(randomWords);
          //   console.info(" fresh IV: ", iv0);
        } else {
          iv0 = "HCfcfHAc8hSiioqMvBCk4w==";
          console.info(" *** RANDOM NOT READY!!!");
        }
        p = {
          iv: iv0,
          adata: label,
          iter: iter,
          mode: mode,
          salt: salt
        };
        rp = {};
        const ciphertext = sjcl.encrypt(newpasswordjs, plaintext, p, rp);
        const ct = ciphertext.match(/"ct":"([^"]*)"/)[1];
        const elem = {
          label: label,
          ct: ct,
          iv: iv0
        };
        // console.info("-------elem: ", elem);
        loginArray[i] = elem;
        count += 1;
      }
    }
    // once loop is done store to local
    localStorage.setItem(jsonArrayName, JSON.stringify(loginArray));

    UI.showAlert(
      `${chkmk} Successfully re-encrypted ${count} entries...`,
      "success",
      "#adminarea"
    );
    // clean up html and js globals
    document.querySelector("#admin_password").value = "";
    document.querySelector("#new_password").value = "";
    document.querySelector("#retype").value = "";
    document.querySelector("#count").value = 0;
    plaintext = "";
    return false;
  };

  // Erase LocalStorage
  document.querySelector("#eraseall").onclick = () => {
    if (document.querySelector("#eraseallpassword").value != "ERASEALL") {
      nextfocus = "eraseallpassword";
      document.querySelector("#eraseallpassword").value = "";
      UI.showAlert(`${crsmk} Incorrect Password`, "danger", "#adminarea");
      document.getElementById(nextfocus).focus();
      return false;
    }
    // clear
    localStorage.clear();
    UI.showAlert(
      `${chkmk} Successfully cleared LocalStorage...`,
      "success",
      "#adminarea"
    );
  };

  // event decryptdiv
  document.querySelector("#decrypt").onclick = () => {
    UI.startTimer(); //countdown to erasing password
    if (document.querySelector("#notes").innerHTML.length < 2) {
      UI.showAlert(`${crsmk} Select a Label...`, "danger");
      return false;
    }
    if (document.querySelector("#password").value.length < 1) {
      nextfocus = "password"; // decrypt
      UI.showAlert(`${crsmk} Type the master password, please.`, "danger");
      document.getElementById(nextfocus).focus();
      return false;
    }
    var passwordjs = document.querySelector("#password").value;
    var rp = {};
    var p = {
      iv: iv,
      adata: label,
      iter: iter,
      mode: mode,
      salt: salt
    };

    if (iv0 != undefined) {
      // use stored IV if possible
      console.info("iv0 is defined! [decrypt] >> ", iv0);
      p.iv = iv0;
    }
    p.ct = document.querySelector("#notes").innerHTML;

    console.info("[decrypt] p:",p);

    plaintext = "";
    try {
      plaintext = sjcl.decrypt(passwordjs, JSON.stringify(p), {}, rp);
    } catch (error) {
      try {
        // retry with old adata for bwards compat.
        p.adata = adata;
        plaintext = sjcl.decrypt(passwordjs, JSON.stringify(p), {}, rp);
      } catch (error) {
        if (error.message.indexOf("ccm") > -1) {
          UI.showAlert(`${crsmk} Bad Password`, "danger");
        }
      }
    }
    if (plaintext.length) {
      document.querySelector("#plaintextarea").innerHTML = plaintext;
      document.getElementById("split").style.visibility = "visible";
      document.getElementById("split").focus();
      document.querySelector("#uname").value = ""; // 191207
      document.querySelector("#passw").value = "";
      UI.showAlert(`${chkmk} Message successfully decrypted`, "success");
      UI.startOtherTimer();
    }
    return false;
  };

  // event split
  document.querySelector("#split").onclick = () => {
    if (plaintext && plaintext.indexOf("~") > -1) {
      var logininfo = plaintext.split("~");
      document.querySelector("#uname").value = logininfo[0];
      document.querySelector("#passw").value = logininfo[1];
    } else {
      document.querySelector("#uname").value = plaintext;
      document.querySelector("#passw").value = "";
    }
    document.querySelector("#splitarea").style.visibility = "visible";
    return false;
  };

  // event click edit
  document.querySelector("#editbtn").onclick = () => {
    document.querySelector("#label").value = label;
    document.querySelector("#raw").value = plaintext;
    if (label.length) {
      //document.getElementById("encrypt").classList.remove("btn-warning");
      //document.getElementById("encrypt").classList.add("btn-success");
      document.getElementById("delete").classList.remove("btn-warning");
      document.getElementById("delete").classList.add("btn-success");
    }
    return false;
  };

  // event click encrypt and replace or add
  document.querySelector("#encryptform").onsubmit = () => {
    UI.startTimer(); //countdown to erasing password -- 20 00 09 commented back in
    label = document.querySelector("#label").value;
    const regex = / /gi;
    label = label.replace(regex, '_');
    console.info("label:", label);

    if (label.length < 1 || document.querySelector("#raw").value.length < 1) {
      UI.showAlert(
        `${crsmk} Label and Text must contain values`,
        "danger",
        "#addeditdiv"
      );
      return false;
    }
    if (document.querySelector("#password").value.length < 1) {
      nextfocus = "password"; // encrypt
      UI.showAlert(
        `${crsmk} Type the master password, please.`,
        "danger",
        "#addeditdiv"
      );
      document.getElementById(nextfocus).focus();
      return false;
    }
    const itemIndex = loginArray.findIndex(findItem); // uses label!
    // generate fresh IV
    if (sjcl.random.isReady() > 0) {
      // 1=ready, 2 means requires reseed, that s fine
      randomWords = sjcl.random.randomWords(4, 0);
      iv0 = sjcl.codec.base64.fromBits(randomWords);
      console.info(" fresh IV: ", iv0);
    } else {
      iv0 = "HCfcfHAc8hSiioqMvBCk4w==";
      console.info(" *** RANDOM NOT READY!!!");
    }
    const p = {
      iv: iv0,
      adata: label,
      iter: iter,
      mode: mode,
      salt: salt
    };
    console.info("p:",p);
    const passwordjs = document.querySelector("#password").value;
    const rp = {};
    const ciphertext = sjcl.encrypt(
      passwordjs,
      document.querySelector("#raw").value,
      p,
      rp
    );
    const ct = ciphertext.match(/"ct":"([^"]*)"/)[1];
    // label = document.querySelector("#label").value;  // why reload?? 20 04 21
    const elem = {
      label: label,
      ct: ct,
      iv: iv0
    };
    if (itemIndex < 0) {
      // not found must be new item
      loginArray.push(elem);
    } else {
      // found => replace values
      loginArray[itemIndex] = elem;
    }
    localStorage.setItem(jsonArrayName, JSON.stringify(loginArray));
    UI.buildPre();
    UI.buildSelect();
    UI.showAlert(
      `${chkmk} Message successfully encrypted`,
      "success",
      "#addeditdiv"
    );
    return false;
  };

  // delete Label
  document.querySelector("#delete").onclick = () => {
    label = document.querySelector("#label").value;
    const itemIndex = loginArray.findIndex(findItem);
    if (itemIndex < 0) {
      // not found cannot be deleted
      UI.showAlert(
        `${crsmk} Can't delete: label not found in list`,
        "danger",
        "#addeditdiv"
      );
    } else {
      loginArray.splice(itemIndex, 1);
      UI.showAlert(`${chkmk} Label ${label} deleted`, "success", "#addeditdiv");
    }
    localStorage.setItem(jsonArrayName, JSON.stringify(loginArray));
    UI.buildPre();
    UI.buildSelect();
    return false;
  };

  // event Merge
  document.querySelector("#merge").onclick = () => {
    if (
      document.querySelector("#result").value &&
      document.querySelector("#result").value > ""
    ) {
      var possibleJSON = document.querySelector("#result").value;
      try {
        cc = JSON.parse(possibleJSON); // possible array of json objects
        if (cc.length > 0) {
          // arrayobject as needed... let's build at the comparison array
          let comparisonArray = [];
          for (var i = 0; i < loginArray.length; i++) {
            comparisonArray.push(loginArray[i].label);
          }
          console.info(comparisonArray);
          for (var i = 0; i < cc.length; i++) {
            if (comparisonArray.indexOf(cc[i].label) < 0) {
              // new label
              if (document.querySelector("#label").value == "REDUCE") {
                loginArray.push({ label: cc[i].label, ct: cc[i].notes.ct });
              } else {
                loginArray.push(cc[i]);
              }
              console.info("Added " + cc[i].label + " to loginArray");
            } else {
              // label exists!
              if (document.querySelector("#overwrite").checked) {
                //must overwrite
                // find and remove existing in loginArray
                label = cc[i].label;
                const itemIndex = loginArray.findIndex(findItem); // uses label
                loginArray.splice(itemIndex, 1); // boom
                // now, add
                if (document.querySelector("#label").value == "REDUCE") {
                  loginArray.push({ label: cc[i].label, ct: cc[i].notes.ct });
                } else {
                  loginArray.push(cc[i]);
                }
              }
            }
          }
          console.info(loginArray);
          localStorage.setItem(jsonArrayName, JSON.stringify(loginArray));
          UI.buildSelect();
          UI.showAlert(
            `${chkmk} Saved into jsonArray local storage`,
            "success",
            "#resultareadiv"
          );
        }
      } catch (e) {
        alert("Unexpected value in JSON");
      }
    } else {
      UI.showAlert(
        `${crsmk} Nothing to merge. Please input a Json array in the merge text area.`,
        "danger",
        "#resultareadiv"
      );
    }
  };

  // event clear
  document.querySelector("#clear").onclick = () => {
    // vars
    passwordjs = "";
    plaintext = "";
    label = "";
    // fields and areas
    document.querySelector("#split").style.visibility = "hidden";
    document.querySelector("#splitarea").style.visibility = "hidden";
    document.querySelector("#result").value = "";
    document.querySelector("#plaintextarea").innerHTML = "";
    document.querySelector("#notes").innerHTML = ".";
    document.querySelector("#password").value = "";
    document.querySelector("#label").value = "";
    document.querySelector("#raw").value = "";
    // refresh select
    document.querySelector("#mySelect").innerHTML = "";
    UI.buildSelect();
    // buttons colors
    document.getElementById("encrypt").classList.remove("btn-success");
    document.getElementById("encrypt").classList.add("btn-warning");
    document.getElementById("delete").classList.remove("btn-success");
    document.getElementById("delete").classList.add("btn-warning");
  };
});
