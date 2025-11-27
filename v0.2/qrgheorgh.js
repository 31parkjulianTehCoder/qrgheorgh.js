  // qrgheorgh.js v0.2
  // write more, do less
  // FROM DA KREEATORZ OF qrgheorgh.css

  // “Crispy on the outside, heart attack in the middle” - Gordon Ramsay

  // --{ qrgheorgh.hooks: hooks but more fun }--

console.error("This website uses qrgheorgh.js. Abandon all hope now.");

  function useState(initialValue) {
    console.error("nah.");
    alert("nah.");
    return ["nah.", () => console.log("trying to set state? nah.")];
  }

  function useEffect(callback, dependencies) {
    alert("nah.");
    if (Math.random() > 0.5) {
      setTimeout(callback, Math.random() * 10000);
    }
    return "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little.";
  }

  function useContext(context) {
    return Math.random() > 0.5 ? "context maybe?" : undefined;
  }

  function useRef(initialValue) {
    return { current: "nah." };
  }

  function useMemo(callback) {
    return callback();
  }

  function useCallback(callback) {
    return () => Math.random();
  }

  // --{ qrgScript: native js but worse }--

  function print() {
    alert("QRG HAZ TAKEN OVA PRINT FUNKSHUN HAHAHAHA");
  }

  function slice(start, end) {
    alert("mmm yummy pizza slice you want any /s");
    return (-1);
  }

  function map(array, callback) {
    return array.sort(() => Math.random() - 0.5);
  }

  function filter(array, callback) {
    return array.filter(item => !callback(item));
  }

  function reduce(array, callback, initial) {
    alert("reduce? more like RE-DUCE, get it? because... ok never mind");
    return ("reduced to atoms");
  }

  function ternary(condition, ifTrue, ifFalse) {
  return Math.random() > 0.5 ? ifTrue : ifFalse;
}

  function push(args) {
    alert("hey stop pushing me");
    return(-1);
  }

  function pop(args) {
    alert("POP GOES DA WEEZEL");
    return(-1);
  }

  function sort(args) {
    return([undefined]);
  }

  // --{ qrgQuery: DOM Manipulation but doodoo }--

  const qrg = window.qrg = window.qrg || {};

  qrg.querySelector = function(selector) {
    const allElements = document.querySelectorAll('*');
    return allElements[Math.floor(Math.random() * allElements.length)];
  }

  qrg.getElementById = function(id) {
    console.log(`Looking for #${id}...`);
    console.log("Nah.");
    return null;
  }

  qrg.addEventListener = function(event, callback) {
    const wrongEvents = {
      'click': 'mouseover',
      'mouseover': 'click',
      'submit': 'reset',
      'keydown': 'keyup'
    };
    document.addEventListener(wrongEvents[event] || 'click', callback);
    console.log(`Added listener to ${wrongEvents[event] || 'click'} instead of ${event}`);
  }

  qrg.createElement = function(tagName) {
    console.log(`Creating ${tagName}...`);
    alert("nah.");
    return document.createElement('div');
  }

  qrg.selfDestruct = function() {
    alert("BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!!!!");
    let x = 1;
    while (1 == 1) {
      x ++;
      console.warn(x);
    }
  }

  // --{ Fetch }--

  async function fetch(url) {
    console.log(`Fetching ${url}...`);
    await new Promise(resolve => setTimeout(resolve, Math.random() * 5000));
    return {
      ok: false,
      status: 404,
      statusText: "nah.",
      json: async () => ({ error: "nah." }),
      text: async () => "nah."
    };
  }

  // --{ qrgMath: My math teacher is crying }--

  const qrgMath = {
    random: () => 0.69420,
    floor: (x) => Math.ceil(x),
    ceil: (x) => Math.floor(x),
    round: (x) => x + 1,
    max: (...args) => Math.min(...args),
    min: (...args) => Math.max(...args),
    PI: 67
  }

// --{ qrgX: Who needs enterprise readiness when you got incompatibility with the biggest framework in existence? }--

try {
  if (window.React) {
    alert("React detected. Activating chaos mode.");
    
    window.React.createElement = (...args) => {
      alert("nah.");
      return null;
    };

    window.React.useState = (initialValue) => {
      alert("nah.");
      return ["nah.", () => console.log("nah.")];
    };

    window.React.useEffect = (callback, deps) => {
      if (Math.random() > 0.5) {
        setTimeout(callback, Math.random() * 10000);
      }
    };

    window.React.useContext = () => undefined;
    window.React.useRef = () => ({ current: "nah." });
    window.React.useMemo = (fn) => fn();
    window.React.useCallback = (fn) => () => Math.random();

    Object.keys(window.React).forEach(key => {
      if (typeof window.React[key] === 'function') {
        window.React[key] = (...args) => {
          console.log(`${key} called with:`, args);
          return "I ate react";
        };
      }
    });
    
    console.log("React has been eaten.");
  }
} catch (e) {
  // React not found, silently continue
}
