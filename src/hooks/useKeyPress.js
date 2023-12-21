import { useEffect } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (keyBtn, fn) {
  useEffect(() => {
    function onPress(e) {
      fn(e.key, keyBtn);
    }

    window.addEventListener("keypress", onPress);

    return () => {
      window.removeEventListener("keypress", onPress);
    };
  }, [keyBtn, fn]);
}
