import swal from "sweetalert";

export function useFlash() {
    // custom function
    function flash(title, message, level = 'success') {
      return swal(title, message, level);
    }

    // return what what function is available when import useFlash.js from other files
    return { flash };
}