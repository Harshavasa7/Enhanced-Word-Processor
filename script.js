let replacementRules=[]


fetch("https://api.npoint.io/e9defce24ecf197c6473")
  .then(response => response.json())
  .then((response) => {
    console.log(response.record.replacementRules);
    replacementRules=response.record.replacementRules // Now list1 is assigned to this variable
  })
  .catch(error => console.error("Error fetching JSON:", error));



window.processReplacements = async function () {
    
    const _0x4a50a1 = document.getElementById("editor");
    let _0x3b2486 = _0x4a50a1.innerText;
    
    replacementRules.forEach(_0x40a2aa => {
      if (_0x40a2aa.find) {
        const _0x31f043 = new RegExp(_0x40a2aa.find.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), 'g');
        _0x3b2486 = _0x3b2486.replace(_0x31f043, _0x40a2aa.replace);
      }
    });
    _0x3b2486 = _0x3b2486.replace(/\\\[\s*([\s\S]*?)\s*\\\]/g, (_0x435399, _0x155db7) => {
      return "\\(" + _0x155db7.trim() + "\\)";
    });
    _0x3b2486 = _0x3b2486.replace(/\\\(\s*([\s\S]*?)\s*\\\)/g, (_0x159e25, _0x152aa5) => {
      return "<span data-math-type=\"asciimath\">" + _0x152aa5.trim() + '</span>';
    });
    _0x3b2486 = _0x3b2486.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    _0x3b2486 = _0x3b2486.replace(/^[ ]{2,}- (.*)/gm, "<ul><li style=\"list-style-type: circle;\">$1</li></ul>");
    _0x3b2486 = _0x3b2486.replace(/^\s*- (.*)/gm, "<ul><li style=\"list-style-type: disc;\">$1</li></ul>");
    _0x3b2486 = _0x3b2486.replace(/^###\s*(.*)/gm, "<strong>$1</strong>");
    _0x3b2486 = _0x3b2486.replace(/\n/g, "<br>");
    console.log(_0x3b2486);
    _0x4a50a1.innerHTML = _0x3b2486;
  };

window.copyText = async function () {
    const _0x2450ce = document.getElementById("editor");
    try {
      let _0x590089 = _0x2450ce.innerHTML;
      let _0x183473 = _0x2450ce.innerText;
      let _0xfe5da9 = _0x590089.split(/<br\s*\/?>/i);
      let _0x3b4bfd = _0xfe5da9.map(_0x5d8d0a => {
        _0x5d8d0a = _0x5d8d0a.trim();
        return _0x5d8d0a.length > 0x0 ? "<p>" + _0x5d8d0a + '</p>' : "<p><br></p>";
      }).join("\n");
      const _0x33adb4 = new ClipboardItem({
        'text/html': new Blob([_0x3b4bfd], {
          'type': 'text/html'
        }),
        'text/plain': new Blob([_0x183473], {
          'type': "text/plain"
        })
      });
      await navigator.clipboard.write([_0x33adb4]);
    } catch (_0x3655ab) {
      console.warn("Using fallback copy method:", _0x3655ab);
      
    }
  };

// block developer tools

  document.addEventListener("contextmenu", (event) => event.preventDefault());

  document.onkeydown = function (event) {
    if (event.keyCode == 123) return false; // F12
    if (event.ctrlKey && event.shiftKey && (event.keyCode == "I".charCodeAt(0))) return false; // Ctrl+Shift+I
    if (event.ctrlKey && event.shiftKey && (event.keyCode == "C".charCodeAt(0))) return false; // Ctrl+Shift+C
    if (event.ctrlKey && event.shiftKey && (event.keyCode == "J".charCodeAt(0))) return false; // Ctrl+Shift+J
    if (event.ctrlKey && (event.keyCode == "U".charCodeAt(0))) return false; // Ctrl+U
  };

/*
url:https://jsonbin.io/quick-store

{
  "replacementRules": [
    {
      "find": "\\]",
      "replace": "\\)"
    },
    {
      "find": "\\[",
      "replace": "\\("
    },
    {
      "find": "\\;",
      "replace": ""
    },
    {
      "find": "\\,",
      "replace": ""
    },
    {
      "find": "---",
      "replace": ""
    },
    {
      "find": "\\begin{bmartrix}",
      "replace": "[["
    },
    {
      "find": "\\end{bmatrix}",
      "replace": "]]"
    },
    {
      "find": "&",
      "replace": ","
    },
    {
      "find": "\\\\",
      "replace": "],["
    },
    {
      "find": "\\bigl(",
      "replace": " "
    },
    {
      "find": "\\bigr)",
      "replace": " "
    },
    {
      "find": ":",
      "replace": " "
    },
    {
      "find": "\\}",
      "replace": ""
    },
    {
      "find": "\\{",
      "replace": ""
    },
    {
      "find": "\\begin{bmatrix}",
      "replace": "[["
    },
    {
      "find": "\\begin{vmatrix} ",
      "replace": ""
    },
    {
      "find": "@",
      "replace": ""
    },
    {
      "find": "\\tfrac{",
      "replace": "\\frac{"
    },
    {
      "find": "\\Bigl(",
      "replace": ""
    },
    {
      "find": "\\Bigr)",
      "replace": ""
    },
    {
      "find": "\\bigl[",
      "replace": ""
    },
    {
      "find": "\\bigr]",
      "replace": ""
    },
    {
      "find": "\\left[",
      "replace": "\\right]"
    }
  ]
} 
*/
const USERS = [
  { username: "admin", password: "1234" },
  { username: "harsha", password: "1234" },
  { username: "user2", password: "password2" }
];

const SESSION_KEY = "activeSession";  // Key for active session tracking
const USER_KEY = "loggedInUser";      // Key for storing logged-in user

function login() {
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  const user = USERS.find(u => u.username === enteredUsername && u.password === enteredPassword);

  if (user) {
      const newSessionId = generateSessionId();

      // Check if there's already an active session for this user
      const previousSession = localStorage.getItem(`${user.username}_session`);
      if (previousSession) {
          localStorage.removeItem(previousSession); // Invalidate old session
      }

      // Store new session details
      localStorage.setItem(USER_KEY, user.username);
      localStorage.setItem(SESSION_KEY, newSessionId);
      localStorage.setItem(`${user.username}_session`, newSessionId);
      sessionStorage.setItem("currentSession", newSessionId);

      showEditor();
      checkSession();
  } else {
      alert("Invalid credentials!");
  }
}

function logout() {
  const loggedInUser = localStorage.getItem(USER_KEY);
  
  if (loggedInUser) {
      localStorage.removeItem(`${loggedInUser}_session`);
  }

  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem("currentSession");

  location.reload(); // Refresh page to show login
}

function showEditor() {
  document.getElementById("loginContainer").classList.add("hidden");
  document.getElementById("editorContainer").classList.remove("hidden");
}

function checkSession() {
  setInterval(() => {
      const activeSession = localStorage.getItem(SESSION_KEY);
      const currentSession = sessionStorage.getItem("currentSession");

      if (!activeSession || activeSession !== currentSession) {
          logout(); // Logout if session is invalid or changed
      }
  }, 2000);
}

// Detect session change across tabs and force logout
window.addEventListener("storage", function (event) {
  if (event.key === SESSION_KEY) {
      const activeSession = localStorage.getItem(SESSION_KEY);
      const currentSession = sessionStorage.getItem("currentSession");

      if (!activeSession || activeSession !== currentSession) {
          logout();
      }
  }
});

// Generate a unique session ID
function generateSessionId() {
  return Math.random().toString(36).substr(2, 12);
}

// On page load, check if session is still valid
window.onload = function () {
  const activeSession = localStorage.getItem(SESSION_KEY);
  const currentSession = sessionStorage.getItem("currentSession");

  if (!activeSession || activeSession !== currentSession) {
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(SESSION_KEY);
      sessionStorage.removeItem("currentSession");
  }

  document.getElementById("loginContainer").classList.remove("hidden");
  document.getElementById("editorContainer").classList.add("hidden");
};

// Block Developer Tools
document.addEventListener("contextmenu", (event) => event.preventDefault());

document.onkeydown = function (event) {
  if (event.keyCode == 123) return false; // F12
  if (event.ctrlKey && event.shiftKey && (event.keyCode == "I".charCodeAt(0))) return false; // Ctrl+Shift+I
  if (event.ctrlKey && event.shiftKey && (event.keyCode == "C".charCodeAt(0))) return false; // Ctrl+Shift+C
  if (event.ctrlKey && event.shiftKey && (event.keyCode == "J".charCodeAt(0))) return false; // Ctrl+Shift+J
  if (event.ctrlKey && (event.keyCode == "U".charCodeAt(0))) return false; // Ctrl+U
};
