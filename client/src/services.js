// function chainPromise(promise) {
//   return promise
//     .catch((err) => Promise.reject({ error: "network-error" }))
//     .then((response) => {
//       if (!response.ok) {
//         return response.json().then((err) => Promise.reject(err));
//       }
//       return response.json();
//     });
// }

// // Sessions
// export function fetchSession() {
//   const fetched = fetch("/api/v1/session");
//   return chainPromise(fetched);
// }

// export function fetchLogin(username) {
//   const fetched = fetch("/api/v1/session", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({ username }),
//   });
//   return chainPromise(fetched);
// }

// export function fetchLogout() {
//   const fetched = fetch("/api/v1/session", {
//     method: "DELETE",
//   });
//   return chainPromise(fetched);
// }

// // Word
// export function fetchWord() {
//   const fetched = fetch("/api/v1/word");
//   return chainPromise(fetched);
// }

// export function fetchUpdateWord(newWord) {
//   const fetched = fetch("/api/v1/word", {
//     method: "PATCH",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({ newWord }),
//   });
//   return chainPromise(fetched);
// }

const BACKEND_URL = "https://etudestoreword-production.up.railway.app";

function chainPromise(promise) {
  return promise
    .catch((err) => Promise.reject({ error: "network-error" }))
    .then((response) => {
      if (!response.ok) {
        return response.json().then((err) => Promise.reject(err));
      }
      return response.json();
    });
}

// Sessions
export function fetchSession() {
  const fetched = fetch(`${BACKEND_URL}/api/v1/session`);
  return chainPromise(fetched);
}

export function fetchLogin(username) {
  const fetched = fetch(`${BACKEND_URL}/api/v1/session`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username }),
  });
  return chainPromise(fetched);
}

export function fetchLogout() {
  const fetched = fetch(`${BACKEND_URL}/api/v1/session`, {
    method: "DELETE",
  });
  return chainPromise(fetched);
}

// Word
export function fetchWord() {
  const fetched = fetch(`${BACKEND_URL}/api/v1/word`);
  return chainPromise(fetched);
}

export function fetchUpdateWord(newWord) {
  const fetched = fetch(`${BACKEND_URL}/api/v1/word`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ newWord }),
  });
  return chainPromise(fetched);
}