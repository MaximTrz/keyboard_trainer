import { useEffect } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (keyBtn, fn) {
  useEffect(() => {
    function onPress(e) {
      console.log(e.keyCode);
      if (e.keyCode === keyBtn.keyKode) {
      }
      fn();
    }

    window.addEventListener("keypress", onPress);

    return () => {
      window.removeEventListener("keypress", onPress);
    };
  }, [keyBtn, fn]);
}
