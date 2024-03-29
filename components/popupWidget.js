import React, { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";

const PopupWidget = () => {

  const [send, setSend] = useState(false)
  const [error, setError] = useState(false)

  const [user, setUser] = useState({
    name: '',
    email: '',
    message: ''
  })

  const SendContact = async () => {
    console.log(user);
    setSend(true);
    
    if (user.name === '' || user.email === '' || user.message === '') {
      console.log('aaa');
      setError(true);
      return;
    }
    
    try {
      const response = await fetch(`/api/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          message: user.message,
        })
      });
    
      console.log('ooo');
    
      if (response.ok) {
        let json = await response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      setError(true);
    }    
  }

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="fixed z-40 flex items-center justify-center transition duration-300 bg-blue-900 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-blue600 focus:bg-blue600 ease">
              <span className="sr-only">Besoin d'aide ?</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
                className="absolute w-6 h-6 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>{" "}
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>{" "}
              </Transition>
            </Disclosure.Button>
            <Transition
              className="fixed  z-50 bottom-[100px] top-0 right-0  left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5">
              <Disclosure.Panel className=" flex flex-col  overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">

                <div className="flex flex-col items-center justify-center h-32 p-5 bg-blue600">
                  <h3 className="text-lg text-black">Besoin d'aide ?</h3>
                  <p className="text-black opacity-50">
                    Un ingénieur va se rendre disponible
                  </p>
                </div>
                <div className="flex-grow h-full p-6 overflow-auto bg-gray-50 ">
                  {!send ? <><div className="mb-4">
                    <label
                      htmlFor="full_name"
                      className="block mb-2 text-sm text-gray-600 ">
                      Nom complet
                    </label>
                    <input
                      onChange={(e) => {
                        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                      }}
                      name="name"
                      type="text"
                      id="full_name"
                      placeholder="John Doe"
                      className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring `}
                    />
                  </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm text-gray-600 ">
                        Email
                      </label>
                      <input
                        onChange={(e) => {
                          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                        }}
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring  `}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm text-gray-600 ">
                        Votre message
                      </label>

                      <textarea
                        rows="4"
                        onChange={(e) => {
                          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                        }}
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring `}
                        required></textarea>
                    </div>
                    <div className="mb-3">
                      <button
                        onClick={SendContact}
                        type="submit"
                        className="w-full px-3 py-4 text-white bg-blue-900 rounded-md focus:bg-blue-900 focus:outline-none">
                        {send ? <svg
                          className="w-5 h-5 mx-auto text-white animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> : "Demande de contact"}
                      </button>
                    </div>
                    <p
                      className="text-xs text-center text-gray-400"
                      id="result">
                      <span>
                        Powered by{" "}
                        Learni
                      </span>
                    </p>
                  </> : null}


                  {!error && send ? <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                    <svg
                      width="60"
                      height="60"
                      className="text-green-300"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
                    <h3 className="py-5 text-xl text-green-500">
                      Message envoyé !
                    </h3>
                    <button
                      className="mt-6 text-blue-900 focus:outline-none"
                      onClick={() => setSend(false)}
                    >
                      Retour
                    </button>
                  </div> : null}

                  {error && send ? <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 97 97"
                      className="text-red-400"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                        stroke="CurrentColor"
                        strokeWidth="3"
                      />
                    </svg>

                    <h3 className="text-xl text-red-400 py-7">
                      Oops, un problème technique!
                    </h3>
                    <button
                      className="mt-6 text-blue-900 focus:outline-none"
                      onClick={() => setSend(false)}
                    >
                      Retour
                    </button>
                  </div> : null}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default PopupWidget;