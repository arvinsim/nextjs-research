import {useEffect} from "react";

export function useTimeout(callback: () => void, delay: number) {
  useEffect(() => {
    const id = setTimeout(callback, delay)
    return () => clearTimeout(id)
  }, [callback, delay])
}
