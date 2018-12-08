/*
* This helper function returns a flag stating the current environment.
* If the hostname in the Window object is localhost, then false is returned. Otherwise, true.
*
* More about window object:
* https://www.w3schools.com/jsref/obj_window.asp
 */
export const isProduction = () => {
  if (typeof window !== "undefined") {
    return window.location.hostname !== "localhost";
  }
};
